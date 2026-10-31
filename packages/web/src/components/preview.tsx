import type { JSX } from "solid-js";

export function Preview(props: { children?: JSX.Element; class?: string }) {
  return (
    <div
      class={`overflow-hidden rounded-lg border border-border bg-background p-6 ${props.class ?? ""}`}
    >
      {props.children}
    </div>
  );
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
      <pre class="overflow-x-auto rounded-lg border border-border bg-muted p-4 text-sm text-foreground">
        <code>{props.snippet}</code>
      </pre>
    </article>
  );
}
