# solid-kit

SolidJS packages. The workspace root is private and does not export library code. Each package under `packages/` is installed on its own.

| Package                       | Import                                                   |
| ----------------------------- | -------------------------------------------------------- |
| `@solid-kit/tiptap`           | `Tiptap`, `useEditor`, `useTiptapState`, `EditorContent` |
| `@solid-kit/tiptap/menus`     | `BubbleMenu`, `FloatingMenu`                             |
| `@solid-kit/tiptap/node-view` | Custom node view helpers                                 |

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

## Development

pnpm workspace (pnpm 12+). [Vite+](https://viteplus.dev/guide/) is the toolchain. [devenv](https://devenv.sh) provides Node.js and pnpm.

```bash
devenv shell
pnpm install
pnpm exec vp check
pnpm --filter @solid-kit/tiptap build
pnpm --filter example-simple dev
pnpm --filter example-simple build
```

Add another library as `packages/<name>` with its own `package.json`. Do not add its exports to the root package.
