# @solid-kit/kit — Solid 2.0

The main package. It rewrites the five Solid 1.9 libraries in `packages/1.9/` for Solid 2.0, one subpath each:

| Subpath                                                 | Source                                     | 1.9 original          |
| ------------------------------------------------------- | ------------------------------------------ | --------------------- |
| `@solid-kit/kit/ui`, `/ui/theme.css`                    | `src/components/ui/`                       | `packages/1.9/ui`     |
| `@solid-kit/kit/m3`, `/m3/theme.css`, `/m3/tokens.css`  | `src/components/m3/`, `src/lib/m3/`        | `packages/1.9/m3`     |
| `@solid-kit/kit/motion`                                 | `src/components/motion/`, `src/lib/motion` | `packages/1.9/motion` |
| `@solid-kit/kit/xyflow`, `/xyflow/panels`, `/style.css` | `src/components/xyflow/`, `src/lib/xyflow` | `packages/1.9/xyflow` |
| `@solid-kit/kit/tiptap`, `/tiptap/menus`, `/node-view`  | `src/components/tiptap/`, `src/lib/tiptap` | `packages/1.9/tiptap` |

Keep each subpath's public names and props the same as its 1.9 barrel unless ui-sdk forces a change.

Run tooling through devenv: `devenv shell -- vp check packages/kit`, `devenv shell -- vp test` (browser tests, Playwright chromium), and `devenv shell -- pnpm --filter @solid-kit/kit typecheck`.

## Stack

- `solid-js` and `@solidjs/web` `^2.0.3`. `jsxImportSource` is `@solidjs/web`. The Vite plugin is `@solidjs/vite-plugin`.
- `ui` and `m3` are built on [`@ui-sdk/solid`](https://github.com/vercel-labs/ui) and `@ui-sdk/core`, pinned to one beta. Never import Kobalte or corvu. The docs ship in `node_modules/@ui-sdk/solid/docs/` (`components/<name>.md`, `styling-and-animation.md`, `popups.md`). Read the component's doc before wrapping it.
- Internal imports use `#kit/…` (`package.json` `imports`). Shared `cn` and `partClass` live in `src/lib/utils.ts`.

## Wrapping a ui-sdk part

```tsx
import { DialogContent as DialogContentPrimitive } from "@ui-sdk/solid/dialog";
import { type ComponentProps, omit } from "solid-js";
import { partClass } from "#kit/lib/utils";

export function DialogContent(props: ComponentProps<typeof DialogContentPrimitive>) {
  const rest = omit(props, "class");
  return <DialogContentPrimitive class={partClass("…tailwind…", props.class)} {...rest} />;
}
```

- ui-sdk sets `data-slot` on every part. Do not set it on a wrapped part. Set it on plain elements (`data-slot="dialog-header"`).
- A part's `class`, `style`, and `children` may be functions of its state. `partClass(base, props.class)` merges both forms.
- Change the element with `render={(props, state) => <a {...props} />}`. There is no `as` or `asChild`.
- Style state with the ui-sdk attributes: `data-open`, `data-closed`, `data-checked`, `data-unchecked`, `data-indeterminate`, `data-highlighted`, `data-selected`, `data-pressed`, `data-disabled`, `data-invalid`, `data-orientation`, `data-side`, `data-align`. There is no `data-state` or `data-expanded`.
- Animate popups with transitions on `data-starting-style` and `data-ending-style` (`transition-[opacity,scale] data-starting-style:opacity-0 data-ending-style:opacity-0`). ui-sdk waits for them before it unmounts. Size and origin with `--anchor-width`, `--available-height`, `--transform-origin`; panels with `--accordion-panel-height` and `--collapsible-panel-height`.
- Roots take `open`/`defaultOpen`/`onOpenChange(open, details)` or `value`/`defaultValue`/`onValueChange(value, details)`.
- The page must declare `@layer ui-sdk;` before `@import "tailwindcss"`, or ui-sdk's base CSS lands above the utilities.

## Solid 2.0 rules

| Do not write (1.9)                            | Write (2.0)                                                                |
| --------------------------------------------- | -------------------------------------------------------------------------- |
| `splitProps(props, [...])`                    | `const rest = omit(props, "a", "b")`; read the picked keys off `props`     |
| `mergeProps(a, b)`                            | `merge(a, b)` (`undefined` overrides)                                      |
| `createEffect(() => { … onCleanup(…) })`      | `createEffect(() => read(), (value) => { …; return cleanup })`             |
| `on(deps, fn)`                                | read the deps in the compute function; `{ defer: true }` to skip the first |
| `onMount`                                     | `onSettled(() => { …; return cleanup })`                                   |
| `<Ctx.Provider value={v}>`                    | `<Ctx value={v}>`                                                          |
| `classList={{ a: on() }}`                     | `class={{ a: on() }}` or `class={["base", { a: on() }]}`                   |
| `<Index each>`                                | `<For each keyed={false}>` (item is an accessor, index a number)           |
| `<Dynamic component={c}>`                     | `const C = dynamic(() => c)` from `@solidjs/web`, then `<C />`             |
| `solid-js/web`, `solid-js/store`              | `@solidjs/web`; stores from `solid-js`                                     |
| store path setters, `produce`, `unwrap`       | draft setters `setState((d) => { d.a = 1 })`, `snapshot`                   |
| `Suspense`, `ErrorBoundary`, `createResource` | `Loading`, `Errored`, async `createMemo`                                   |
| `batch`                                       | nothing; writes batch on the microtask. `flush()` in tests                 |
| `use:`, `on:`, `attr:`, `bool:`, `/*@once*/`  | ref callbacks or factories, camelCase `onX`, plain attributes              |

- Never destructure `props`. Read `props.x` inside JSX, a memo, or an effect's compute function. Reads at the top of a component body warn (`STRICT_READ_UNTRACKED`).
- Do not write signals inside a memo or a component body. Writes go in event handlers, actions, or an effect's apply function.
- A ref callback cannot create effects or call `onCleanup`. Do that work in the component body and keep the element in a variable.
- `JSX`, `ComponentProps`, `Portal`, `dynamic`, `isServer`, `render` come from `@solidjs/web`. `Show`, `For`, `Switch`, `Match`, `createSignal`, `createMemo`, `createEffect`, `createStore`, `omit`, `merge` come from `solid-js`.
