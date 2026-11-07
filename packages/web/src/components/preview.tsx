import { CodeBlock, cn, createHighlightedCode } from "@solid-kit/ui";
import { For, type JSX } from "solid-js";

export function Preview(props: { children?: JSX.Element; class?: string }) {
  return (
    <div
      class={cn("overflow-hidden rounded-lg border border-border bg-background p-6", props.class)}
    >
      {props.children}
    </div>
  );
}

export function VariantRow(props: { label: string; children: JSX.Element; class?: string }) {
  return (
    <div class="flex flex-col gap-2">
      <span class="text-xs font-medium text-muted-foreground">{props.label}</span>
      <div class={cn("flex flex-wrap items-center gap-2", props.class)}>{props.children}</div>
    </div>
  );
}

export function VariantStack(props: { children: JSX.Element; class?: string }) {
  return <div class={cn("flex w-full flex-col gap-6", props.class)}>{props.children}</div>;
}

export function DocsPage(props: {
  title: string;
  description: string;
  snippet: string;
  previewClass?: string;
  children: JSX.Element;
}) {
  return (
    <article class="space-y-6">
      <header class="space-y-2">
        <h1 class="text-3xl font-semibold tracking-tight text-foreground">{props.title}</h1>
        <p class="text-muted-foreground">{props.description}</p>
      </header>
      <Preview class={props.previewClass}>{props.children}</Preview>
      <CodeExample code={props.snippet} />
    </article>
  );
}

function FileCodeIcon() {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="m10 13-2 2 2 2" />
      <path d="m14 17 2-2-2-2" />
    </svg>
  );
}

/** A highlighted, copyable code sample with a title bar. */
export function CodeExample(props: {
  code: string;
  language?: string;
  title?: string;
  wrap?: boolean;
  class?: string;
}) {
  const lines = createHighlightedCode(
    () => props.code,
    () => props.language ?? "tsx",
  );
  return (
    <CodeBlock class={props.class}>
      <CodeBlock.Header>
        <CodeBlock.Title>
          <FileCodeIcon />
          {props.title ?? "Usage"}
        </CodeBlock.Title>
        <CodeBlock.Actions>
          <CodeBlock.CopyButton value={props.code} />
        </CodeBlock.Actions>
      </CodeBlock.Header>
      <CodeBlock.Content wrap={props.wrap} class="max-h-[32rem]">
        <For each={lines()}>{(line) => <CodeBlock.Line>{line}</CodeBlock.Line>}</For>
      </CodeBlock.Content>
    </CodeBlock>
  );
}
