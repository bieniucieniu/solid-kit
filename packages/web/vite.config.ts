import tailwindcss from "@tailwindcss/vite";
import { solidStart } from "@solidjs/start/config";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite-plus";

export default defineConfig({
  plugins: [tailwindcss(), solidStart(), nitro()],
  resolve: {
    tsconfigPaths: true,
  },
  ssr: {
    noExternal: [/^@solid-kit\//],
  },
});
