import type { JSX } from "@solidjs/web";

import { cn } from "#kit/lib/utils";

export function Kbd(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <kbd
      data-slot="kbd"
      {...props}
      class={cn(
        "pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-xs bg-muted px-1 font-sans text-[0.625rem] font-medium text-muted-foreground select-none in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background dark:in-data-[slot=tooltip-content]:bg-background/10 [&_svg:not([class*='size-'])]:size-3",
        props.class,
      )}
    />
  );
}

export function KbdGroup(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <kbd
      data-slot="kbd-group"
      {...props}
      class={cn("inline-flex items-center gap-1", props.class)}
    />
  );
}
