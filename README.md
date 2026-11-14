# solid-kit

> **Work in progress.** APIs change without notice and nothing is published to npm yet.

SolidJS ports of popular React libraries, plus shadcn-style component registries, in one pnpm workspace. Each package under `packages/` stands on its own. The workspace root is private and exports nothing.

| Package              | What it is                                                                                |
| -------------------- | ----------------------------------------------------------------------------------------- |
| `@solid-kit/tiptap`  | Tiptap editor bindings that follow the public API of `@tiptap/react`                      |
| `@solid-kit/xyflow`  | Node-based graph editor on `@xyflow/system`, with the graph held in a Solid store         |
| `@solid-kit/motion`  | Solid lifecycle around the vanilla `motion` API, with props that match Motion for React   |
| `packages/ui`        | UI component registry for the shadcn CLI and Tailwind 4 ([README](packages/ui/README.md)) |
| `packages/m3`        | Material 3 Expressive registry on the same API as `ui` ([README](packages/m3/README.md))  |
| `packages/web`       | Docs and demo site                                                                        |
| `packages/storybook` | Storybook for the packages above                                                          |

## Development

pnpm workspace with [Vite+](https://viteplus.dev/guide/) as the toolchain. [devenv](https://devenv.sh) provides Node.js and pnpm.

## License

[MIT](LICENSE)
