import solid from "@solidjs/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite-plus";

export default defineConfig({
  plugins: [tailwindcss(), solid()],
  // One copy of @ui-sdk/core for the app and @ui-sdk/solid.
  optimizeDeps: {
    exclude: ["@ui-sdk/core"],
  },
  server: {
    port: 3100,
    strictPort: true,
  },
});
