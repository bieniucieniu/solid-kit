import type { JSX } from "@solidjs/web";

import { cn } from "#kit/lib/utils";

export function ScrollArea(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="scroll-area"
      {...props}
      class={cn(
        "relative overflow-auto rounded-[inherit] [scrollbar-color:var(--border)_transparent] scrollbar-thin transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1",
        props.class,
      )}
    />
  );
}
