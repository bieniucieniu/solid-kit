import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import type { StorybookConfig } from "storybook-solidjs-vite";
import { mergeConfig } from "vite";

const repoRoot = fileURLToPath(new URL("../../..", import.meta.url));

const config = {
  stories: [
    // This package's stories import as ./src/... from the Storybook cwd.
    // A parent glob never matches that path, so index them on their own.
    "../src/**/*.stories.@(ts|tsx)",
    // Other packages. From .storybook, ../.. is packages/.
    "../../!(storybook)/**/*.stories.@(ts|tsx)",
  ],
  framework: "storybook-solidjs-vite",
  async viteFinal(viteConfig) {
    return mergeConfig(viteConfig, {
      plugins: [tailwindcss()],
      resolve: {
        alias: {
          "@": fileURLToPath(new URL("../../ui/src", import.meta.url)),
        },
      },
      server: {
        fs: {
          allow: [repoRoot],
        },
      },
    });
  },
} satisfies StorybookConfig;

export default config;
