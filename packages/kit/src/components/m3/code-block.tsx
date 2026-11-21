import type { JSX } from "@solidjs/web";
import { children, createSignal, For, omit, onCleanup, Show } from "solid-js";
import { IconButton, type IconButtonProps } from "./icon-button";
import { cn } from "#kit/lib/utils";

export { createHighlightedCode } from "#kit/lib/highlighted-code";

const codeBlockVariantClasses = {
  standard: "bg-surface-container-low text-on-surface",
  error:
    "bg-error-container/40 text-on-error-container *:data-[slot=code-block-footer]:border-error/30 *:data-[slot=code-block-header]:border-error/30 *:data-[slot=code-block-header]:text-on-error-container",
};

export type CodeBlockVariant = keyof typeof codeBlockVariantClasses;

export type CodeBlockProps = JSX.HTMLAttributes<HTMLDivElement> & {
  variant?: CodeBlockVariant;
  size?: "md" | "sm";
};

/**
 * A block of code on a low surface container with medium corners. Put a CodeBlockHeader (or a
 * floating CodeBlockActions) and a CodeBlockContent inside.
 */
export function CodeBlock(props: CodeBlockProps) {
  const rest = omit(props, "variant", "size");
  return (
    <div
      {...rest}
      data-slot="code-block"
      data-variant={props.variant ?? "standard"}
      data-size={props.size ?? "md"}
      class={cn(
        "group/code-block relative flex min-w-0 flex-col overflow-hidden rounded-medium border border-outline-variant *:data-[slot=code-block-actions]:absolute *:data-[slot=code-block-actions]:top-1 *:data-[slot=code-block-actions]:right-1 *:data-[slot=code-block-actions]:z-10 *:data-[slot=code-block-actions]:rounded-full *:data-[slot=code-block-actions]:bg-surface-container-low/80 *:data-[slot=code-block-actions]:backdrop-blur-sm",
        codeBlockVariantClasses[props.variant ?? "standard"],
        props.class,
      )}
    />
  );
}

export function CodeBlockHeader(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      data-slot="code-block-header"
      class={cn(
        "flex min-h-12 items-center gap-2 border-b border-outline-variant ps-4 pe-1 text-on-surface-variant group-data-[size=sm]/code-block:min-h-10 group-data-[size=sm]/code-block:ps-3",
        props.class,
      )}
    />
  );
}

/** A filename or label, with an optional leading icon. Truncates when it runs out of room. */
export function CodeBlockTitle(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      data-slot="code-block-title"
      class={cn(
        "block min-w-0 truncate typescale-title-small [&_svg]:pointer-events-none [&_svg]:me-2 [&_svg]:inline-block [&_svg]:align-[-0.125em] [&_svg:not([class*='size-'])]:size-4.5",
        props.class,
      )}
    />
  );
}

/** Buttons for the block. Inside a header it sits at the end; as a direct child of `CodeBlock` it floats over the top-end corner. */
export function CodeBlockActions(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      data-slot="code-block-actions"
      class={cn("ms-auto flex shrink-0 items-center gap-1", props.class)}
    />
  );
}

function CopyIcon() {
  return (
    <svg viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
      <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
      <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
    </svg>
  );
}

/** A standard icon button that copies `value` and shows a check for two seconds. */
export function CodeBlockCopyButton(props: IconButtonProps & { value: string }) {
  const rest = omit(props, "value");
  const [copied, setCopied] = createSignal(false);
  let timer: ReturnType<typeof setTimeout> | undefined;
  onCleanup(() => clearTimeout(timer));

  const copy = (event: MouseEvent & { currentTarget: HTMLButtonElement; target: Element }) => {
    const handler = props.onClick;
    if (typeof handler === "function") handler(event);
    else if (Array.isArray(handler)) handler[0](handler[1], event);
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
    <IconButton
      size="xs"
      {...rest}
      data-slot="code-block-copy-button"
      data-copied={copied() ? "" : undefined}
      aria-label={copied() ? "Copied" : "Copy code"}
      onClick={copy}
    >
      {props.children ?? (
        <Show when={copied()} fallback={<CopyIcon />}>
          <CheckIcon />
        </Show>
      )}
    </IconButton>
  );
}

export type CodeBlockContentProps = JSX.HTMLAttributes<HTMLPreElement> & {
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
  const rest = omit(props, "wrap", "lineNumbers", "startLine");
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
      {...rest}
      dir="ltr"
      tabindex={props.tabindex ?? 0}
      data-slot="code-block-content"
      class={cn(
        "min-h-0 overflow-auto py-4 font-mono text-[0.8125rem]/relaxed outline-none focus-visible:outline-3 focus-visible:-outline-offset-3 focus-visible:outline-secondary group-data-[size=sm]/code-block:py-3 group-data-[size=sm]/code-block:text-xs/relaxed **:data-[slot=code-block-token]:[font-style:var(--shiki-light-font-style)] **:data-[slot=code-block-token]:[font-weight:var(--shiki-light-font-weight)] dark:**:data-[slot=code-block-token]:text-(--shiki-dark)! dark:**:data-[slot=code-block-token]:[font-style:var(--shiki-dark-font-style)] dark:**:data-[slot=code-block-token]:[font-weight:var(--shiki-dark-font-weight)]",
        props.class,
      )}
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
  added: "bg-tertiary-container/50 *:data-[slot=code-block-line-marker]:text-tertiary",
  removed: "bg-error-container/50 *:data-[slot=code-block-line-marker]:text-error",
  highlighted: "bg-secondary-container/60 shadow-[inset_3px_0_0_var(--md-sys-color-primary)]",
};

const lineMarkers = { added: "+", removed: "−" } as const;

export function CodeBlockLine(
  props: JSX.HTMLAttributes<HTMLSpanElement> & { variant?: keyof typeof lineVariantClasses },
) {
  const rest = omit(props, "variant");
  const marker = () => {
    const variant = props.variant;
    return variant === "added" || variant === "removed" ? lineMarkers[variant] : undefined;
  };
  return (
    <span
      {...rest}
      data-slot="code-block-line"
      data-variant={props.variant ?? "default"}
      class={cn(
        "flex min-h-[1lh] px-4 group-data-[size=sm]/code-block:px-3 group-data-line-numbers/code-block-code:[counter-increment:line] group-data-line-numbers/code-block-code:before:me-4 group-data-line-numbers/code-block-code:before:w-[var(--code-block-gutter,3ch)] group-data-line-numbers/code-block-code:before:shrink-0 group-data-line-numbers/code-block-code:before:text-right group-data-line-numbers/code-block-code:before:text-on-surface-variant/60 group-data-line-numbers/code-block-code:before:content-[counter(line)] group-data-line-numbers/code-block-code:before:select-none",
        lineVariantClasses[props.variant ?? "default"],
        props.class,
      )}
    >
      <Show when={marker()}>
        {(value) => (
          <span
            data-slot="code-block-line-marker"
            aria-hidden="true"
            class="me-2 w-[1ch] shrink-0 select-none"
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
  return (
    <div
      {...props}
      data-slot="code-block-footer"
      class={cn(
        "flex items-center gap-2 border-t border-outline-variant px-4 py-2 typescale-body-small text-on-surface-variant",
        props.class,
      )}
    />
  );
}
