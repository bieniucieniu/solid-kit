# Project Basics

- Act only on request; minimize unnecessary builds/checks.
- No arbitrary fix scripts; never downgrade package versions.
- If in doubt, ask for clarification.

# Repository layout

pnpm workspace. Root `solid-kit` is private and exports nothing. Each library is `packages/<name>` with its own `package.json` and public exports. `@solid-kit/tiptap` is one package. Add the next library as another folder under `packages/`. Do not re-export a package from the root.

# Package Development: Solid

Peer dependency is `solid-js` `^1.9.0`. `jsxImportSource` is `solid-js`. Write Solid 1.9 only.

Match the public behavior of [Tiptap React](https://github.com/ueberdosis/tiptap/tree/main/packages/react). Implement it with the patterns already in `packages/tiptap/src`. Copying React component bodies, hooks, or JSX is a bug.

A component function runs once. Updates come from signals read in JSX, `createMemo`, or `createEffect`. There is no re-render and no dependency array.

## Banned

Never import `react`, `react-dom`, or `react/jsx-runtime`.

Never write these. They compile, then do nothing, or they are the wrong framework:

- `useState`, `useEffect`, `useLayoutEffect`, `useMemo`, `useCallback`, `useRef`, `useReducer`, `useContext` from React, `forwardRef`, `memo(`, `React.FC`, `.current`
- a dependency array on `createEffect` (the second argument is the previous value, not deps)
- a cleanup function returned from `createEffect` (1.9 cleanup is `onCleanup`)
- `className`, `htmlFor`, camelCase `style` keys, unitless style numbers (`fontSize: 12`)
- `key=` on list children, `{items.map(...)}` for a list that changes, `{cond && <Node />}` when `cond` can be `0`
- destructuring `props`
- `createSignal(props.value)` to mirror a prop
- `createMutable` (gone in 2.0; this repo uses `createSignal` / `createStore`)
- Solid 2.0-only APIs listed below

| React habit | Solid 1.9 in this repo |
| --- | --- |
| `useState` | `createSignal`; read it with `count()` |
| `useEffect(fn, deps)` | `createEffect(fn)`; it tracks reads. Cleanup: `onCleanup` |
| `useMemo` / `useCallback` | read it inline. `createMemo` only for a new object/array, or a call to a function that came from props |
| `useRef` / `.current` | `let ref: HTMLElement \| undefined` and `ref={(el) => { ref = el }}` |
| `useContext` | `useContext` from `solid-js` |
| destructure `props` | `props.x`, or `splitProps` |
| `className` | `class` |
| `` className={on ? "a" : "b"} `` | `classList={{ a: on() }}` |
| `style={{ fontSize: 12 }}` | `style={{ "font-size": "12px" }}` |
| `onChange` on a text field | `onInput` (`onChange` is the DOM change event) |
| `<div onClick={props.onClick}>` | `<div onClick={(e) => props.onClick?.(e)}>` — native `on*` is not a tracked scope |
| `{list.map}` | `<For each={list()}>` |
| index-stable list | `<Index each={list()}>` |
| `{cond && <A />}` | `<Show when={cond()}>` |
| `React.memo` | nothing |

## Solid 1.9

- Props are a reactive proxy. Never destructure them. `splitProps` when you need the rest. If you only read the pulled keys off `props`, drop the local: `const [, rest] = splitProps(...)`.
- The only allowed tuple destructure is `const [value, setValue] = createSignal(...)`. Do not destructure hook return objects.
- Read props and signals inside JSX, `createMemo`, or `createEffect`. `const x = props.foo` at the top of the function freezes the first value.
- JSX `editor={editor()}` compiles to a getter and stays reactive. `editor={editor}` passes the function.
- Hook arguments that must stay reactive: pass an accessor, `useEditor(() => options)`.
- `createSignal` for primitives. `createStore` from `solid-js/store` for nested objects.
- `createMemo` only for a new object/array, or when calling a function that came from props. Skip it for `a + b`, `a.b`, and raw functions.
- `onMount` is one-shot after mount. Re-running work goes in `createEffect`. Use `on(deps, fn)` from `solid-js` when tracking must be narrowed (`useEditor.ts`).
- Refs: `let ref: HTMLElement | undefined`, assign with `ref={(el) => { ref = el }}` or `ref={ref}`. The callback receives the element, not `null`.
- Control flow: `<Show when={state()}>{(v) => ...}</Show>`. `<For>` and `<Index>` from `solid-js`. `<Dynamic>` from `solid-js/web`. `<Switch>` / `<Match>` for several branches.
- To inspect children in JS, use the `children()` helper. In JSX, `props.children` is enough.

### Preferred `splitProps` pattern

```tsx
export function NodeViewWrapper(props: NodeViewWrapperProps) {
  const [, rest] = splitProps(props, ["as", "style", "ref"]);
  const nv = useSolidNodeView();
  return (
    <Dynamic
      component={props.as || "div"}
      {...rest}
      ref={props.ref}
      onDragStart={nv.onDragStart}
      style={{ "white-space": "normal", ...(typeof props.style === "object" ? props.style : {}) }}
    />
  );
}
```

## Solid 2.0-rc — do not write it here

2.0 RC (August 2026) is a different API. This package still typechecks as 1.9. Guides: [v2.solidjs.com](https://v2.solidjs.com), [migration](https://github.com/solidjs/solid/blob/next/documentation/solid-2.0/MIGRATION.md), [RC post](https://www.solidjs.com/blog/solid-2-0-rc-the-big-reveal).

| If you reach for this (2.0) | Stay on this (1.9) |
| --- | --- |
| `omit` / `merge` | `splitProps` / `mergeProps` |
| `onSettled` | `onMount` + `onCleanup` |
| `createEffect(compute, apply)` and return-as-cleanup | one-function `createEffect` + `onCleanup` |
| `Loading` / `Errored` / `Reveal` / `isPending` / `flush` | `Suspense` / `ErrorBoundary`; no `flush` |
| async `createMemo`, no `createResource` | `createResource` when a fetch helper is actually needed |
| object or array `class` | `class` string + `classList` |
| `@solidjs/web`, `@solidjs/signals`, `jsxImportSource: "@solidjs/web"` | `solid-js`, `solid-js/web`, `solid-js/store`, `jsxImportSource: "solid-js"` |
| context used as the provider element | `Context.Provider` |

`createMutable`, `produce`, and `batch` still exist in 1.9 and are removed in 2.0. Do not add them. Use `createSignal` and `createStore`.

<!--VITE PLUS START-->

# Using Vite+, the Unified Toolchain for the Web

This project is using Vite+, a unified toolchain built on top of Vite, Rolldown, Vitest, tsdown, Oxlint, Oxfmt, and Vite Task. Vite+ wraps runtime management, package management, and frontend tooling in a single global CLI called `vp`. Vite+ is distinct from Vite, and it invokes Vite through `vp dev` and `vp build`. Run `vp help` to print a list of commands and `vp <command> --help` for information about a specific command.

Docs are local at `node_modules/vite-plus/docs` or online at https://viteplus.dev/guide/.

## Review Checklist

- [ ] Run `vp install` after pulling remote changes and before getting started.
- [ ] Run `vp check` and `vp test` to format, lint, type check and test changes.
- [ ] Check if there are `vite.config.ts` tasks or `package.json` scripts necessary for validation, run via `vp run <script>`.
- [ ] If setup, runtime, or package-manager behavior looks wrong, run `vp env doctor` and include its output when asking for help.

<!--VITE PLUS END-->
