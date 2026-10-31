import { Tabs as TabsPrimitive } from "@kobalte/core/tabs";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type TabsRootProps = ComponentProps<typeof TabsPrimitive>;
type TabsListProps = ComponentProps<typeof TabsPrimitive.List>;
type TabsTriggerProps = ComponentProps<typeof TabsPrimitive.Trigger>;
type TabsIndicatorProps = ComponentProps<typeof TabsPrimitive.Indicator>;
type TabsContentProps = ComponentProps<typeof TabsPrimitive.Content>;

function TabsRoot(props: TabsRootProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <TabsPrimitive
      ref={props.ref}
      class={cn("flex flex-col gap-2 data-[orientation=vertical]:flex-row", props.class)}
      {...rest}
    />
  );
}

export function TabsList(props: TabsListProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <TabsPrimitive.List
      ref={props.ref}
      class={cn(
        "relative inline-flex h-8 items-center rounded-lg bg-muted p-[3px] text-muted-foreground data-[orientation=vertical]:h-auto data-[orientation=vertical]:flex-col",
        props.class,
      )}
      {...rest}
    />
  );
}

export function TabsTrigger(props: TabsTriggerProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <TabsPrimitive.Trigger
      ref={props.ref}
      class={cn(
        "inline-flex items-center justify-center gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-xs font-medium whitespace-nowrap text-foreground focus-visible:ring-2 focus-visible:outline-none data-disabled:opacity-50 data-highlighted:bg-background data-selected:bg-background [&_svg:not([class*='size-'])]:size-3.5",
        props.class,
      )}
      {...rest}
    />
  );
}

export function TabsIndicator(props: TabsIndicatorProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <TabsPrimitive.Indicator
      ref={props.ref}
      class={cn(
        "pointer-events-none absolute top-0 bg-primary data-[orientation=horizontal]:top-auto data-[orientation=horizontal]:bottom-0 data-[orientation=horizontal]:h-0.5 data-[orientation=vertical]:left-0 data-[orientation=vertical]:w-0.5",
        props.class,
      )}
      {...rest}
    />
  );
}

export function TabsContent(props: TabsContentProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <TabsPrimitive.Content
      ref={props.ref}
      class={cn("text-xs/relaxed text-foreground outline-none", props.class)}
      {...rest}
    />
  );
}

export const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Trigger: TabsTrigger,
  Indicator: TabsIndicator,
  Content: TabsContent,
});
