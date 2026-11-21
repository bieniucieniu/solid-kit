import type { JSX } from "@solidjs/web";

import { cn } from "#kit/lib/utils";

export function Spinner(props: JSX.SvgSVGAttributes<SVGSVGElement>) {
  return (
    <svg
      role="status"
      aria-label="Loading"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
      class={cn("size-4 shrink-0 animate-spin", props.class)}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}
