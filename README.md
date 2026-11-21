# solid-kit

> **Work in progress.** APIs change without notice and nothing is published to npm yet.

SolidJS ports of popular React libraries, plus shadcn-style component registries, in one pnpm workspace. Each package under `packages/` stands on its own. The workspace root is private and exports nothing.

`packages/kit` (`@solid-kit/kit`) is the main package: a Solid 2.0 rewrite of all five 1.9 packages, with `ui` and `m3` on [ui-sdk](https://github.com/vercel-labs/ui). `packages/kit-playground` shows it in the browser.

The docs site (`packages/web`) runs on Solid 2.0 and the kit, server-rendered and prerendered to static HTML. The Solid 1.9 packages live under `packages/1.9/` and stay on Solid 1.9. They feed Storybook and the shadcn registry.

| Package                   | What it is                                                                                                           |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `@solid-kit/kit`          | Solid 2.0 rewrite of the five packages below, on `@ui-sdk/solid`: `./ui`, `./m3`, `./motion`, `./xyflow`, `./tiptap` |
| `packages/kit-playground` | Client-only Solid 2.0 playground for `@solid-kit/kit`                                                                |
| `@solid-kit/tiptap`       | Tiptap editor bindings that follow the public API of `@tiptap/react`                                                 |
| `@solid-kit/xyflow`       | Node-based graph editor on `@xyflow/system`, with the graph held in a Solid store                                    |
| `@solid-kit/motion`       | Solid lifecycle around the vanilla `motion` API, with props that match Motion for React                              |
| `packages/1.9/ui`         | UI component registry for the shadcn CLI and Tailwind 4 ([README](packages/1.9/ui/README.md))                        |
| `packages/1.9/m3`         | Material 3 Expressive registry on the same API as `ui` ([README](packages/1.9/m3/README.md))                         |
| `packages/web`            | Docs and demo site for `@solid-kit/kit` (Solid 2.0 start mode, m3 chrome)                                            |
| `packages/storybook`      | Storybook for the 1.9 packages (Solid 1.9)                                                                           |

## Development

pnpm workspace with [Vite+](https://viteplus.dev/guide/) as the toolchain. [devenv](https://devenv.sh) provides Node.js and pnpm.

## License

[MIT](LICENSE)
