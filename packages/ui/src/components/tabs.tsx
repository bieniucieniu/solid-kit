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
        "relative inline-flex items-center gap-1 rounded-lg bg-muted p-1 text-muted-foreground data-[orientation=vertical]:flex-col",
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
        "inline-flex items-center justify-center rounded-lg px-3 py-1.5 text-sm whitespace-nowrap text-foreground ring-ring focus-visible:ring-2 focus-visible:outline-none data-disabled:opacity-50 data-highlighted:bg-background data-selected:bg-background",
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
      class={cn("text-sm text-foreground outline-none", props.class)}
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
