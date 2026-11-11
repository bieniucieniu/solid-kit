# solid-kit

SolidJS packages. The workspace root is private and does not export library code. Each package under `packages/` is installed on its own.

| Package                       | Import                                                     |
| ----------------------------- | ---------------------------------------------------------- |
| `@solid-kit/tiptap`           | `Tiptap`, `useEditor`, `useTiptapState`, `EditorContent`   |
| `@solid-kit/tiptap/menus`     | `BubbleMenu`, `FloatingMenu`                               |
| `@solid-kit/tiptap/node-view` | Custom node view helpers                                   |
| `@solid-kit/xyflow`           | `Flow`, `createFlow`, `useFlow`, `Handle`                  |
| `@solid-kit/motion`           | `motion`, `AnimatePresence`, `useMotionValue`, `useSpring` |

UI registry (shadcn CLI, Tailwind 4): [`packages/ui`](packages/ui/README.md).
Material 3 Expressive registry on the same API: [`packages/m3`](packages/m3/README.md).

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
import { Background, Controls } from "@solid-kit/xyflow/panels";
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
      <Background />
      <Controls />
    </Flow>
  );
}
```

Peer: `solid-js` `^1.9.0`. Docs: `pnpm --filter web dev` (`/xyflow`).

## `@solid-kit/motion`

Solid lifecycle around the vanilla [`motion`](https://motion.dev) API (`animate`, `hover`, `press`, `drag`, `inView`, `styleEffect`). Props match Motion for React. `AnimatePresence` owns the list, because a Solid `{open() && <motion.div />}` disposes before `exit` can run.

```tsx
import { AnimatePresence, motion, useMotionValue, useSpring } from "@solid-kit/motion";

const x = useMotionValue(0);
const springX = useSpring(x, () => ({ stiffness: 220 }));

<motion.div animate={{ x: 120 }} whileHover={{ scale: 1.1 }} />
<motion.div style={{ x: springX }} />
<AnimatePresence when={open}>
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
</AnimatePresence>
<AnimatePresence each={items} by={(item) => item.id}>
  {(item) => <motion.div exit={{ opacity: 0 }}>{item.name}</motion.div>}
</AnimatePresence>
```

Peers: `solid-js` `^1.9.0`, `motion` `^14.9.0`. Docs: `pnpm --filter web dev` (`/motion`).

## Development

pnpm workspace (pnpm 12+). [Vite+](https://viteplus.dev/guide/) is the toolchain. [devenv](https://devenv.sh) provides Node.js and pnpm.

```bash
devenv shell
pnpm install
pnpm exec vp check
pnpm --filter @solid-kit/tiptap build
pnpm --filter @solid-kit/xyflow test
pnpm --filter @solid-kit/motion test
pnpm --filter web dev
pnpm --filter web build
```

Add another library as `packages/<name>` with its own `package.json`. Do not add its exports to the root package.
