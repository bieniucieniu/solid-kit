import { ToggleGroup as ToggleGroupPrimitive } from "@kobalte/core/toggle-group";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type ToggleGroupRootProps = ComponentProps<typeof ToggleGroupPrimitive>;
type ToggleGroupItemProps = ComponentProps<typeof ToggleGroupPrimitive.Item>;

function ToggleGroupRoot(props: ToggleGroupRootProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ToggleGroupPrimitive
      ref={props.ref}
      class={cn("inline-flex items-center gap-1 data-[orientation=vertical]:flex-col", props.class)}
      {...rest}
    />
  );
}

export function ToggleGroupItem(props: ToggleGroupItemProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ToggleGroupPrimitive.Item
      ref={props.ref}
      class={cn(
        "inline-flex items-center justify-center rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-foreground ring-ring hover:bg-muted focus-visible:ring-2 focus-visible:outline-none data-disabled:opacity-50 data-pressed:border-primary data-pressed:bg-primary data-pressed:text-primary-foreground",
        props.class,
      )}
      {...rest}
    />
  );
}

export const ToggleGroup = Object.assign(ToggleGroupRoot, {
  Item: ToggleGroupItem,
});
