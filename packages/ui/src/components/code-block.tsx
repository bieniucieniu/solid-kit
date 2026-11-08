import {
  type Accessor,
  children,
  createEffect,
  createMemo,
  createSignal,
  For,
  getOwner,
  Index,
  indexArray,
  type JSX,
  onCleanup,
  runWithOwner,
  Show,
  splitProps,
} from "solid-js";
import { Button, type ButtonProps } from "./button";
import { type HighlightedLine, highlightCode } from "@/lib/highlighter";
import { cn } from "@/lib/utils";

const codeBlockVariantClasses = {
  default: "border-border bg-muted/30 text-foreground",
  destructive:
    "border-destructive/30 bg-destructive/5 text-destructive *:data-[slot=code-block-footer]:border-destructive/20 *:data-[slot=code-block-header]:border-destructive/20 *:data-[slot=code-block-header]:text-destructive",
};

type CodeBlockProps = JSX.HTMLAttributes<HTMLDivElement> & {
  variant?: keyof typeof codeBlockVariantClasses;
  size?: "default" | "sm";
};

export function CodeBlock(props: CodeBlockProps) {
  const [, rest] = splitProps(props, ["class", "ref", "variant", "size"]);
  return (
    <div
      ref={props.ref}
      data-slot="code-block"
      data-variant={props.variant ?? "default"}
      data-size={props.size ?? "default"}
      class={cn(
        "group/code-block relative flex min-w-0 flex-col overflow-hidden rounded-lg border text-xs/relaxed *:data-[slot=code-block-actions]:absolute *:data-[slot=code-block-actions]:top-1.5 *:data-[slot=code-block-actions]:right-1.5 *:data-[slot=code-block-actions]:z-10 *:data-[slot=code-block-actions]:rounded-md *:data-[slot=code-block-actions]:bg-background/80 *:data-[slot=code-block-actions]:backdrop-blur-sm",
        codeBlockVariantClasses[props.variant ?? "default"],
        props.class,
      )}
      {...rest}
    />
  );
}

export function CodeBlockHeader(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      data-slot="code-block-header"
      class={cn(
        "flex min-h-9 items-center gap-2 border-b border-border px-3 text-muted-foreground group-data-[size=sm]/code-block:min-h-8 group-data-[size=sm]/code-block:px-2.5",
        props.class,
      )}
      {...rest}
    />
  );
}

/** A filename or label, with an optional leading icon. Truncates when it runs out of room. */
export function CodeBlockTitle(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      data-slot="code-block-title"
      class={cn(
        "block min-w-0 truncate font-medium [&_svg]:pointer-events-none [&_svg]:mr-1.5 [&_svg]:inline-block [&_svg]:align-[-0.125em] [&_svg:not([class*='size-'])]:size-3.5",
        props.class,
      )}
      {...rest}
    />
  );
}

/** Buttons for the block. Inside a header it sits on the right; as a direct child of `CodeBlock` it floats over the top-right corner. */
export function CodeBlockActions(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      data-slot="code-block-actions"
      class={cn("ml-auto flex shrink-0 items-center gap-0.5", props.class)}
      {...rest}
    />
  );
}

function CopyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function CodeBlockCopyButton(props: ButtonProps & { value: string }) {
  const [, rest] = splitProps(props, ["value", "onClick", "children"]);
  const [copied, setCopied] = createSignal(false);
  let timer: ReturnType<typeof setTimeout> | undefined;
  onCleanup(() => clearTimeout(timer));

  const copy: JSX.EventHandler<HTMLButtonElement, MouseEvent> = (event) => {
    if (typeof props.onClick === "function") props.onClick(event);
    // `clipboard` is missing on insecure origins, and writes can be refused (page not focused,
    // permission denied). Either way the button just doesn't show "copied".
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(props.value).then(
      () => {
        setCopied(true);
        clearTimeout(timer);
        timer = setTimeout(() => setCopied(false), 2000);
      },
      () => setCopied(false),
    );
  };

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-xs"
      data-slot="code-block-copy-button"
      data-copied={copied() ? "" : undefined}
      aria-label={copied() ? "Copied" : "Copy code"}
      onClick={copy}
      {...rest}
    >
      {props.children ?? (
        <Show when={copied()} fallback={<CopyIcon />}>
          <CheckIcon />
        </Show>
      )}
    </Button>
  );
}

type CodeBlockContentProps = JSX.HTMLAttributes<HTMLPreElement> & {
  /** Wrap long lines instead of scrolling sideways. */
  wrap?: boolean;
  lineNumbers?: boolean;
  /** Number shown on the first line when `lineNumbers` is on. */
  startLine?: number;
};

/**
 * The code itself. Pass a string (split into lines for you) or a list of `CodeBlockLine`.
 * Always left-to-right.
 */
export function CodeBlockContent(props: CodeBlockContentProps) {
  const [, rest] = splitProps(props, [
    "class",
    "ref",
    "children",
    "wrap",
    "lineNumbers",
    "startLine",
    "tabIndex",
  ]);
  const resolved = children(() => props.children);
  const textLines = () => {
    const value = resolved();
    return typeof value === "string" ? value.replace(/\n$/, "").split("\n") : undefined;
  };
  // Wide enough for the last line number, so 4+ digit numbers don't spill into the code.
  const gutter = () => {
    const count = textLines()?.length ?? resolved.toArray().length;
    const last = (props.startLine ?? 1) + Math.max(count, 1) - 1;
    return `${Math.max(String(last).length, 2)}ch`;
  };

  return (
    <pre
      ref={props.ref}
      dir="ltr"
      tabIndex={props.tabIndex ?? 0}
      data-slot="code-block-content"
      class={cn(
        "min-h-0 overflow-auto py-3 font-mono text-xs/relaxed outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-inset group-data-[size=sm]/code-block:py-2 group-data-[size=sm]/code-block:text-[0.6875rem]/relaxed **:data-[slot=code-block-token]:[font-style:var(--shiki-light-font-style)] **:data-[slot=code-block-token]:[font-weight:var(--shiki-light-font-weight)] dark:**:data-[slot=code-block-token]:text-(--shiki-dark)! dark:**:data-[slot=code-block-token]:[font-style:var(--shiki-dark-font-style)] dark:**:data-[slot=code-block-token]:[font-weight:var(--shiki-dark-font-weight)]",
        props.class,
      )}
      {...rest}
    >
      <code
        data-slot="code-block-code"
        data-line-numbers={props.lineNumbers ? "" : undefined}
        data-wrap={props.wrap ? "" : undefined}
        class="group/code-block-code grid w-max min-w-full whitespace-pre data-wrap:w-full data-wrap:whitespace-pre-wrap data-wrap:wrap-break-word"
        style={{
          "counter-reset": `line ${(props.startLine ?? 1) - 1}`,
          "--code-block-gutter": gutter(),
        }}
      >
        <Show when={textLines()} fallback={resolved()}>
          {(lines) => <For each={lines()}>{(line) => <CodeBlockLine>{line}</CodeBlockLine>}</For>}
        </Show>
      </code>
    </pre>
  );
}

const lineVariantClasses = {
  default: "",
  added:
    "bg-emerald-500/10 *:data-[slot=code-block-line-marker]:text-emerald-600 dark:*:data-[slot=code-block-line-marker]:text-emerald-400",
  removed: "bg-destructive/10 *:data-[slot=code-block-line-marker]:text-destructive",
  highlighted: "bg-muted shadow-[inset_2px_0_0_var(--primary)]",
};

const lineMarkers = { added: "+", removed: "−" } as const;

export function CodeBlockLine(
  props: JSX.HTMLAttributes<HTMLSpanElement> & { variant?: keyof typeof lineVariantClasses },
) {
  const [, rest] = splitProps(props, ["class", "ref", "variant", "children"]);
  const marker = () => {
    const variant = props.variant;
    return variant === "added" || variant === "removed" ? lineMarkers[variant] : undefined;
  };
  return (
    <span
      ref={props.ref}
      data-slot="code-block-line"
      data-variant={props.variant ?? "default"}
      class={cn(
        "flex min-h-[1lh] px-4 group-data-[size=sm]/code-block:px-3 group-data-line-numbers/code-block-code:[counter-increment:line] group-data-line-numbers/code-block-code:before:mr-4 group-data-line-numbers/code-block-code:before:w-[var(--code-block-gutter,3ch)] group-data-line-numbers/code-block-code:before:shrink-0 group-data-line-numbers/code-block-code:before:text-right group-data-line-numbers/code-block-code:before:text-muted-foreground/60 group-data-line-numbers/code-block-code:before:content-[counter(line)] group-data-line-numbers/code-block-code:before:select-none",
        lineVariantClasses[props.variant ?? "default"],
        props.class,
      )}
      {...rest}
    >
      <Show when={marker()}>
        {(value) => (
          <span
            data-slot="code-block-line-marker"
            aria-hidden="true"
            class="mr-2 w-[1ch] shrink-0 select-none"
          >
            {value()}
          </span>
        )}
      </Show>
      <span class="min-w-0 flex-1">{props.children}</span>
    </span>
  );
}

export function CodeBlockFooter(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      data-slot="code-block-footer"
      class={cn("flex items-center gap-2 border-t border-border px-3 py-1.5", props.class)}
      {...rest}
    />
  );
}

function HighlightedTokens(props: { line: HighlightedLine }) {
  return (
    <Index each={props.line}>
      {(token) => (
        <span data-slot="code-block-token" style={token().htmlStyle}>
          {token().content}
        </span>
      )}
    </Index>
  );
}

const lineText = (line: HighlightedLine) => line.map((token) => token.content).join("");

/**
 * Syntax-highlights `code` with Shiki and returns one element per line, ready for
 * `CodeBlockLine`. Until highlighting finishes (and for unknown languages) the lines are
 * plain text. Highlighting runs in the browser only, so server and client render the same
 * plain lines first.
 */
export function createHighlightedCode(
  code: Accessor<string>,
  language: Accessor<string>,
): Accessor<JSX.Element[]> {
  const [highlighted, setHighlighted] = createSignal<{
    source: string;
    language: string;
    lines: HighlightedLine[];
  }>();
  let request = 0;

  createEffect(() => {
    const source = code();
    const lang = language();
    const id = ++request;
    void highlightCode(source, lang).then(
      (lines) => {
        if (id === request) setHighlighted(lines ? { source, language: lang, lines } : undefined);
      },
      () => {
        if (id === request) setHighlighted(undefined);
      },
    );
  });

  const lines = createMemo<HighlightedLine[]>(() => {
    const text = code().replace(/\n$/, "").split("\n");
    const result = highlighted();
    if (!result || result.language !== language()) return text.map((content) => [{ content }]);
    if (result.source === code()) return result.lines;
    // A newer highlight is on its way. Keep the colors of lines whose text didn't change, so
    // editing doesn't flash the whole block back to plain text.
    const previous = new Map<string, HighlightedLine>();
    for (const line of result.lines) {
      const key = lineText(line);
      if (!previous.has(key)) previous.set(key, line);
    }
    return text.map((content) => previous.get(content) ?? [{ content }]);
  });

  // One element per line index, updated in place, so unchanged lines keep their DOM nodes.
  // Built on first read, not here: the server maps arrays as soon as `indexArray` is called,
  // which would render the tokens before the surrounding markup and shift every hydration
  // key after them. The owner is captured now so the lines are disposed with the caller.
  const owner = getOwner();
  let mapped: Accessor<JSX.Element[]> | undefined;
  return () => {
    mapped ??= runWithOwner(owner, () =>
      indexArray(lines, (line) => <HighlightedTokens line={line()} />),
    );
    return mapped?.() ?? [];
  };
}
