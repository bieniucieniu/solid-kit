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
      class={cn(
        "inline-flex items-center gap-1 rounded-md data-[orientation=vertical]:flex-col",
        props.class,
      )}
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
        "inline-flex h-7 min-w-7 items-center justify-center gap-1 rounded-md bg-transparent px-2 text-xs font-medium transition-all hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none data-disabled:opacity-50 data-pressed:bg-muted",
        props.class,
      )}
      {...rest}
    />
  );
}

export const ToggleGroup = Object.assign(ToggleGroupRoot, {
  Item: ToggleGroupItem,
});
