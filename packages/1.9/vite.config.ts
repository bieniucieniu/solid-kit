import solid from "unplugin-solid/rolldown";
import solidVite from "unplugin-solid/vite";
import { defineConfig } from "vite-plus";
import { playwright } from "vite-plus/test/browser-playwright";

// ui and m3 import `@/lib/…` (the shadcn alias the registry ships); motion, xyflow, and tiptap
// import `#/…` (package.json `imports`). Both point at src.
const src = decodeURIComponent(new URL("./src", import.meta.url).pathname);

export default defineConfig({
  plugins: [solidVite()],
  resolve: {
    alias: { "@": src },
  },
  pack: [
    {
      plugins: [solid()],
      format: ["esm"],
      clean: true,
      dts: true,
      unbundle: true,
      alias: { "@": src },
      deps: {
        neverBundle: [/^[^./#@]|^@[^/]+\//],
      },
      platform: "browser",
      entry: {
        ui: "src/components/ui/index.ts",
        m3: "src/components/m3/index.ts",
        motion: "src/components/motion/index.ts",
        xyflow: "src/components/xyflow/index.ts",
        "xyflow-panels": "src/components/xyflow/panels.ts",
        tiptap: "src/components/tiptap/index.ts",
        "tiptap-menus": "src/components/tiptap/menus/index.ts",
        "tiptap-node-view": "src/components/tiptap/node-view.ts",
      },
      outputOptions: { dir: "dist" },
    },
  ],
  test: {
    environment: "node",
    browser: {
      enabled: true,
      headless: true,
      provider: playwright(),
      instances: [{ browser: "chromium" }],
    },
  },
});
