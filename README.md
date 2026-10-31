# solid-kit

SolidJS packages. The workspace root is private and does not export library code. Each package under `packages/` is installed on its own.

| Package                       | Import                                                   |
| ----------------------------- | -------------------------------------------------------- |
| `@solid-kit/tiptap`           | `Tiptap`, `useEditor`, `useTiptapState`, `EditorContent` |
| `@solid-kit/tiptap/menus`     | `BubbleMenu`, `FloatingMenu`                             |
| `@solid-kit/tiptap/node-view` | Custom node view helpers                                 |
| `@solid-kit/xyflow`           | `Flow`, `createFlow`, `useFlow`, `Handle`                |

`@solid-kit/tiptap` follows the public API of [`@tiptap/react`](https://tiptap.dev/docs/editor/getting-started/install/react).

## Install `@solid-kit/tiptap`

Not published to npm yet. From a pnpm workspace in this repo:

```json
{
  "dependencies": {
    "@solid-kit/tiptap": "workspace:*",
    "@tiptap/core": "^3.23.5",
    "@tiptap/pm": "^3.23.5",
    "solid-js": "^1.9.0"
  }
}
```

Peers: `@tiptap/core`, `@tiptap/pm`, `solid-js` `^1.9.0`. Bubble and floating menus also need `@tiptap/extension-bubble-menu` and `@tiptap/extension-floating-menu`.

## Usage

```tsx
import StarterKit from "@tiptap/starter-kit";
import { Tiptap, useEditor } from "@solid-kit/tiptap";

export function Editor() {
  const editor = useEditor(() => ({
    extensions: [StarterKit],
    content: "<p>Hello world</p>",
  }));

  return (
    <Tiptap editor={editor}>
      <Tiptap.Content />
    </Tiptap>
  );
}
```

Menus:

```tsx
import { BubbleMenu, FloatingMenu } from "@solid-kit/tiptap/menus";
```

## `@solid-kit/xyflow`

A Solid store owns the graph. `@xyflow/system` stays the interaction engine. `onNodesChange`, `onEdgesChange`, and `onConnect` run after the store has already applied the change.

```tsx
import { Flow, Handle, Position, createFlow, type FlowNode } from "@solid-kit/xyflow";
import "@solid-kit/xyflow/style.css";

function TextNode(props: { node: FlowNode }) {
  return (
    <>
      <Handle type="target" position={Position.Left} />
      <span>{String(props.node.data.label ?? "")}</span>
      <Handle type="source" position={Position.Right} />
    </>
  );
}

export function Canvas() {
  const flow = createFlow(() => ({
    nodes: [
      { id: "1", type: "text", position: { x: 0, y: 0 }, data: { label: "1" } },
      { id: "2", type: "text", position: { x: 0, y: 120 }, data: { label: "2" } },
    ],
    edges: [{ id: "e1-2", source: "1", target: "2" }],
    fitView: true,
    nodeTypes: { text: TextNode },
  }));

  return (
    <Flow flow={flow}>
      <Flow.Background />
      <Flow.Controls />
    </Flow>
  );
}
```

Peer: `solid-js` `^1.9.0`. The example app is `examples/flow` (`pnpm --filter example-flow dev`).

## Development

pnpm workspace (pnpm 12+). [Vite+](https://viteplus.dev/guide/) is the toolchain. [devenv](https://devenv.sh) provides Node.js and pnpm.

```bash
devenv shell
pnpm install
pnpm exec vp check
pnpm --filter @solid-kit/tiptap build
pnpm --filter @solid-kit/xyflow test
pnpm --filter example-simple dev
pnpm --filter example-flow dev
pnpm --filter example-simple build
```

Add another library as `packages/<name>` with its own `package.json`. Do not add its exports to the root package.
