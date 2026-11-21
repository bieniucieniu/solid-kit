// Storybook's config runs in Node, but this app has no @types/node. Declare the one Node API it uses.
declare module "node:url" {
  export function fileURLToPath(url: string | URL): string;
}

// Side-effect stylesheet imports (`import "./preview.css"`), handled by Vite.
declare module "*.css";
