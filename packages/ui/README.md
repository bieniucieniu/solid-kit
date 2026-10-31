# `@solid-kit/ui`

SolidJS components for the [shadcn CLI](https://ui.shadcn.com/docs/registry). Tailwind CSS 4. One style per component. Theme comes from CSS variables on `:root` and `.dark`.

Install into an app. Do not import this package as a component library. The CLI copies the source and rewrites `@/lib/utils`.

## Install

From a project that already has `components.json` (see below):

```bash
pnpm dlx shadcn@latest add bieniucieniu/solid-kit/theme
pnpm dlx shadcn@latest add bieniucieniu/solid-kit/button
pnpm dlx shadcn@latest add bieniucieniu/solid-kit/dialog
pnpm dlx shadcn@latest add bieniucieniu/solid-kit/tooltip
pnpm dlx shadcn@latest add bieniucieniu/solid-kit/checkbox
```

`utils` (`cn`) installs with the components. Add `theme` once. Later component installs do not write color tokens again.

`shadcn` has no Solid `init` template. Do not run `shadcn init` in a Solid app. Hand-write `components.json`:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "base",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/index.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

`src/index.css` must start with `@import "tailwindcss";`. Set `tailwind.css` to that file. `shadcn add bieniucieniu/solid-kit/theme` merges the variables and the `.dark` variant into it.

## Theming

Edit CSS variables only. Components use `bg-background`, `text-foreground`, `border-border`, `text-primary-foreground`, `rounded-lg`, and `ring-ring`.

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
}
```

Put `.dark` on an ancestor. There are no `variant` or `size` props and no style presets.

The same tokens live in [`src/theme.css`](src/theme.css).

## Primitives

Corvu first. Kobalte only when Corvu has no primitive.

| Item       | Primitive                |
| ---------- | ------------------------ |
| `button`   | `<button>`               |
| `dialog`   | `@corvu/dialog`          |
| `tooltip`  | `@corvu/tooltip`         |
| `checkbox` | `@kobalte/core/checkbox` |

```tsx
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";

<Dialog>
  <Dialog.Trigger as={Button}>Open</Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content>
      <Dialog.Label>Title</Dialog.Label>
      <Dialog.Description>Details</Dialog.Description>
      <Dialog.Close>Close</Dialog.Close>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog>;
```

Trigger, portal, and anchor stay unstyled so they can render `as={Button}`.

From the repo root, `pnpm registry:build` runs `pnpm dlx shadcn@latest build` and writes `public/r/*.json`.
