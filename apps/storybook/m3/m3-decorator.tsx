import type { JSX } from "solid-js";

/**
 * Wraps an M3 story in `[data-m3]` so bg-primary / bg-secondary use the M3 scheme next to the
 * shadcn theme, and paints the M3 surface behind it.
 */
export function withM3(Story: () => JSX.Element) {
  return (
    <div data-m3 class="min-h-full bg-surface p-6 text-on-surface typescale-body-medium">
      <Story />
    </div>
  );
}
