import { Button, CodeBlock, createHighlightedCode } from "@solid-kit/ui";
import { createSignal, For } from "solid-js";
import { VariantRow, VariantStack } from "~/components/preview";

const component = `import { createSignal } from "solid-js";

export function Counter() {
  const [count, setCount] = createSignal(0);
  return <button onClick={() => setCount(count() + 1)}>{count()}</button>;
}`;

const buildOutput = `$ pnpm build
vite v8.3.5 building for production...
✓ 412 modules transformed.
dist/index.html                  0.46 kB
dist/assets/index-4f8a1c.css    18.20 kB
dist/assets/index-b72e9d.js    142.71 kB
✓ built in 1.84s`;

const longLine = `const message = "This line is long enough to scroll sideways unless wrapping is turned on, which keeps the whole thing visible.";`;

const logs = Array.from(
  { length: 24 },
  (_, index) => `[12:00:${String(index).padStart(2, "0")}] request ${index + 1} ok`,
).join("\n");

function TerminalIcon() {
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
      <path d="m4 17 6-6-6-6" />
      <path d="M12 19h8" />
    </svg>
  );
}

function WrapIcon() {
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
      <path d="M3 6h18" />
      <path d="M3 12h15a3 3 0 1 1 0 6h-4" />
      <path d="m16 16-2 2 2 2" />
      <path d="M3 18h7" />
    </svg>
  );
}

export function CodeBlockDemo() {
  const highlighted = createHighlightedCode(
    () => component,
    () => "tsx",
  );
  const [wrap, setWrap] = createSignal(false);
  const [expanded, setExpanded] = createSignal(false);

  return (
    <VariantStack class="max-w-xl">
      <VariantRow class="flex-col flex-nowrap items-stretch" label="Header, title and copy">
        <CodeBlock>
          <CodeBlock.Header>
            <CodeBlock.Title>
              <TerminalIcon />
              Terminal
            </CodeBlock.Title>
            <CodeBlock.Actions>
              <CodeBlock.CopyButton value={buildOutput} />
            </CodeBlock.Actions>
          </CodeBlock.Header>
          <CodeBlock.Content>{buildOutput}</CodeBlock.Content>
        </CodeBlock>
      </VariantRow>

      <VariantRow
        class="flex-col flex-nowrap items-stretch"
        label="Syntax highlighting, line numbers, floating actions"
      >
        <CodeBlock>
          <CodeBlock.Actions>
            <CodeBlock.CopyButton value={component} />
          </CodeBlock.Actions>
          <CodeBlock.Content lineNumbers>
            <For each={highlighted()}>{(line) => <CodeBlock.Line>{line}</CodeBlock.Line>}</For>
          </CodeBlock.Content>
        </CodeBlock>
      </VariantRow>

      <VariantRow
        class="flex-col flex-nowrap items-stretch"
        label="Highlighted lines, start line 12"
      >
        <CodeBlock>
          <CodeBlock.Content lineNumbers startLine={12}>
            <CodeBlock.Line>{"export function Counter() {"}</CodeBlock.Line>
            <CodeBlock.Line variant="highlighted">
              {"  const [count, setCount] = createSignal(0);"}
            </CodeBlock.Line>
            <CodeBlock.Line>{"  return <button>{count()}</button>;"}</CodeBlock.Line>
            <CodeBlock.Line>{"}"}</CodeBlock.Line>
          </CodeBlock.Content>
        </CodeBlock>
      </VariantRow>

      <VariantRow class="flex-col flex-nowrap items-stretch" label="Diff">
        <CodeBlock>
          <CodeBlock.Content>
            <CodeBlock.Line>{"const [count, setCount] = createSignal(0);"}</CodeBlock.Line>
            <CodeBlock.Line variant="removed">
              {"useEffect(() => log(count), [count]);"}
            </CodeBlock.Line>
            <CodeBlock.Line variant="added">{"createEffect(() => log(count()));"}</CodeBlock.Line>
          </CodeBlock.Content>
        </CodeBlock>
      </VariantRow>

      <VariantRow class="flex-col flex-nowrap items-stretch" label="Wrap toggle">
        <CodeBlock>
          <CodeBlock.Header>
            <CodeBlock.Title>message.ts</CodeBlock.Title>
            <CodeBlock.Actions>
              <Button
                type="button"
                variant="ghost"
                size="icon-xs"
                aria-label="Wrap lines"
                aria-pressed={wrap()}
                classList={{ "bg-muted text-foreground": wrap() }}
                onClick={() => setWrap(!wrap())}
              >
                <WrapIcon />
              </Button>
              <CodeBlock.CopyButton value={longLine} />
            </CodeBlock.Actions>
          </CodeBlock.Header>
          <CodeBlock.Content wrap={wrap()}>{longLine}</CodeBlock.Content>
        </CodeBlock>
      </VariantRow>

      <VariantRow class="flex-col flex-nowrap items-stretch" label="Show more">
        <CodeBlock>
          <CodeBlock.Content
            id="code-block-logs"
            class={expanded() ? undefined : "max-h-40 overflow-y-hidden"}
          >
            {logs}
          </CodeBlock.Content>
          <CodeBlock.Footer class="justify-center">
            <Button
              type="button"
              variant="ghost"
              size="xs"
              aria-expanded={expanded()}
              aria-controls="code-block-logs"
              onClick={() => setExpanded(!expanded())}
            >
              {expanded() ? "Show less" : "Show more"}
            </Button>
          </CodeBlock.Footer>
        </CodeBlock>
      </VariantRow>

      <VariantRow class="flex-col flex-nowrap items-stretch" label="Size sm">
        <CodeBlock size="sm">
          <CodeBlock.Header>
            <CodeBlock.Title>tool output</CodeBlock.Title>
          </CodeBlock.Header>
          <CodeBlock.Content>{`{ "status": "ok", "items": 3 }`}</CodeBlock.Content>
        </CodeBlock>
      </VariantRow>

      <VariantRow class="flex-col flex-nowrap items-stretch" label="Destructive">
        <CodeBlock variant="destructive">
          <CodeBlock.Header>
            <CodeBlock.Title>Error</CodeBlock.Title>
          </CodeBlock.Header>
          <CodeBlock.Content>
            {
              "TypeError: Cannot read properties of undefined (reading 'map')\n    at List (list.tsx:12:18)"
            }
          </CodeBlock.Content>
        </CodeBlock>
      </VariantRow>
    </VariantStack>
  );
}
