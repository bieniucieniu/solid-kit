import { DocsPage } from "~/components/preview";
import { CodeBlockDemo } from "~/demos/ui/code-block";

const snippet = `import { CodeBlock, createHighlightedCode } from "@solid-kit/ui";
import { For } from "solid-js";

// CodeBlock variant: "default" | "destructive"   size: "default" | "sm"
// CodeBlock.Content wrap, lineNumbers, startLine
// CodeBlock.Line variant: "default" | "added" | "removed" | "highlighted"
const lines = createHighlightedCode(() => code, () => "tsx");

<CodeBlock>
  <CodeBlock.Header>
    <CodeBlock.Title>counter.tsx</CodeBlock.Title>
    <CodeBlock.Actions>
      <CodeBlock.CopyButton value={code} />
    </CodeBlock.Actions>
  </CodeBlock.Header>
  <CodeBlock.Content lineNumbers>
    <For each={lines()}>{(line) => <CodeBlock.Line>{line}</CodeBlock.Line>}</For>
  </CodeBlock.Content>
</CodeBlock>

// Plain text: pass a string and it is split into lines.
<CodeBlock>
  <CodeBlock.Content>{output}</CodeBlock.Content>
</CodeBlock>`;

export default function CodeBlockPage() {
  return (
    <DocsPage
      title="Code block"
      description="Code with a title bar, copy button, line numbers, diffs, and Shiki syntax highlighting."
      snippet={snippet}
    >
      <CodeBlockDemo />
    </DocsPage>
  );
}
