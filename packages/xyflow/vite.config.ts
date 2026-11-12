import solid from "unplugin-solid/rolldown";
import solidVite from "unplugin-solid/vite";
import { defineConfig } from "vite-plus";
import { playwright } from "vite-plus/test/browser-playwright";

export default defineConfig({
  plugins: [solidVite()],
  pack: [
    {
      plugins: [solid()],
      format: ["esm"],
      clean: true,
      dts: true,
      unbundle: false,
      deps: {
        neverBundle: [/^[^./]/],
      },
      platform: "browser",
      entry: ["src/components/xyflow/index.ts"],
      outputOptions: { dir: "dist" },
    },
  ],
  test: {
    browser: {
      enabled: true,
      headless: true,
      provider: playwright(),
      instances: [{ browser: "chromium" }],
    },
  },
});
