import { defineConfig } from "vite-plus";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3002,
  },
  build: {
    target: "esnext",
    minify: false,
  },
});
