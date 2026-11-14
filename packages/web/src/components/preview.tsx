import {
  cn,
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockLine,
  CodeBlockTitle,
  createHighlightedCode,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@solid-kit/ui";
import { For, type JSX, Show } from "solid-js";

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
  /**
   * The demo file's contents, loaded with `import source from "~/demos/<pkg>/<name>.tsx?raw"`.
   * When set, the preview gets a Code tab that shows it.
   */
  source?: string;
  sourceTitle?: string;
  previewClass?: string;
  children: JSX.Element;
}) {
  return (
    <article class="space-y-6">
      <header class="space-y-2">
        <h1 class="text-3xl font-semibold tracking-tight text-foreground">{props.title}</h1>
        <p class="text-muted-foreground">{props.description}</p>
      </header>
      <Show
        when={props.source}
        fallback={<Preview class={props.previewClass}>{props.children}</Preview>}
      >
        {(source) => (
          <Tabs defaultValue="preview">
            <TabsList variant="line">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview" class="text-base">
              <Preview class={props.previewClass}>{props.children}</Preview>
            </TabsContent>
            <TabsContent value="code" class="text-base">
              <CodeExample code={source()} title={props.sourceTitle ?? "Source"} />
            </TabsContent>
          </Tabs>
        )}
      </Show>
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
      <CodeBlockHeader>
        <CodeBlockTitle>
          <FileCodeIcon />
          {props.title ?? "Usage"}
        </CodeBlockTitle>
        <CodeBlockActions>
          <CodeBlockCopyButton value={props.code} />
        </CodeBlockActions>
      </CodeBlockHeader>
      <CodeBlockContent wrap={props.wrap} class="max-h-[32rem]">
        <For each={lines()}>{(line) => <CodeBlockLine>{line}</CodeBlockLine>}</For>
      </CodeBlockContent>
    </CodeBlock>
  );
}
