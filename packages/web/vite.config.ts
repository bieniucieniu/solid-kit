import tailwindcss from "@tailwindcss/vite";
import { solidStart } from "@solidjs/start/config";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite-plus";

export default defineConfig({
  plugins: [tailwindcss(), solidStart(), nitro()],
  resolve: {
    tsconfigPaths: true,
  },
  build: {
    rolldownOptions: {
      external: ["env", "wasi_snapshot_preview1"],
    },
  },
  ssr: {
    noExternal: [/^@solid-kit\//],
  },
});
