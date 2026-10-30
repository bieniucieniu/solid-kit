# tiptap-solid

SolidJS bindings for [Tiptap](https://tiptap.dev). API and patterns follow [`@tiptap/react`](https://tiptap.dev/docs/editor/getting-started/install/react).

## Install

Not published to npm yet — install from GitHub with peer dependencies:

```bash
pnpm add github:bieniucieniu/tiptap-solid @tiptap/core @tiptap/pm @tiptap/starter-kit solid-js
```

npm:

```bash
npm install github:bieniucieniu/tiptap-solid @tiptap/core @tiptap/pm @tiptap/starter-kit solid-js
```

`dist/` (including `.d.ts`) is built on install via `prepare` (`vp pack` for JS, then `tsc` for types). Use aligned `@tiptap/*` versions (≥ 3.23.5).

After updating, reinstall (`pnpm update tiptap-solid`) so `prepare` runs again.

For bubble/floating menus, also install the extensions and import from `tiptap-solid/menus`:

```bash
pnpm add @tiptap/extension-bubble-menu @tiptap/extension-floating-menu
```

## Usage

```tsx
import StarterKit from "@tiptap/starter-kit";
import { Tiptap, useEditor } from "tiptap-solid";

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

## Exports

| Import                   | Description                                                 |
| ------------------------ | ----------------------------------------------------------- |
| `tiptap-solid`           | `Tiptap`, `useEditor`, `useTiptapState`, `EditorContent`, … |
| `tiptap-solid/menus`     | `BubbleMenu`, `FloatingMenu`                                |
| `tiptap-solid/node-view` | Custom node view helpers                                    |

## Development

pnpm workspace (pnpm 12+). [devenv](https://devenv.sh) provides Node.js and pnpm. This project uses [Vite+](https://viteplus.dev/guide/). Install the global CLI, then:

```bash
devenv shell
pnpm install
vp build                 # build library (vp pack in packages/solid)
vp dev                   # example app
vp preview               # preview example build
vp check                 # format, lint, type-check
vp build examples/simple # production build for example
```
