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
        "inline-flex items-center justify-center rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-foreground ring-ring hover:bg-muted focus-visible:ring-2 focus-visible:outline-none data-disabled:opacity-50 data-pressed:border-primary data-pressed:bg-primary data-pressed:text-primary-foreground",
        props.class,
      )}
      {...rest}
    />
  );
}
