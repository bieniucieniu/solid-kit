import { ToggleButton as ToggleButtonPrimitive } from "@kobalte/core/toggle-button";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type ToggleProps = ComponentProps<typeof ToggleButtonPrimitive>;

export function Toggle(props: ToggleProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ToggleButtonPrimitive
      ref={props.ref}
      class={cn(
        "inline-flex h-7 min-w-7 items-center justify-center gap-1 rounded-md bg-transparent px-2 text-xs font-medium transition-all hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none data-disabled:opacity-50 data-pressed:bg-muted",
        props.class,
      )}
      {...rest}
    />
  );
}
