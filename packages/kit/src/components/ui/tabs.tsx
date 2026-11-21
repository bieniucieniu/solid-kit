import {
  Tabs as TabsPrimitive,
  TabsIndicator as TabsIndicatorPrimitive,
  TabsList as TabsListPrimitive,
  TabsPanel as TabsPanelPrimitive,
  TabsTab as TabsTabPrimitive,
} from "@ui-sdk/solid/tabs";
import { type ComponentProps, omit } from "solid-js";
import { partClass } from "#kit/lib/utils";

export { TabsTabIcon } from "@ui-sdk/solid/tabs";

export function Tabs(props: ComponentProps<typeof TabsPrimitive>) {
  return (
    <TabsPrimitive
      {...props}
      class={partClass("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col", props.class)}
    />
  );
}

export function TabsList(
  props: ComponentProps<typeof TabsListPrimitive> & { variant?: "default" | "line" },
) {
  const rest = omit(props, "variant");
  return (
    <TabsListPrimitive
      data-variant={props.variant ?? "default"}
      {...rest}
      class={partClass(
        "group/tabs-list relative inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-8 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=default]:bg-muted data-[variant=line]:gap-1 data-[variant=line]:rounded-none data-[variant=line]:bg-transparent",
        props.class,
      )}
    />
  );
}

export function TabsTrigger(props: ComponentProps<typeof TabsTabPrimitive>) {
  return (
    <TabsTabPrimitive
      {...props}
      class={partClass(
        [
          "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-xs font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start group-data-[orientation=vertical]/tabs:py-[calc(--spacing(1.25))] hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 data-disabled:pointer-events-none data-disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
          "data-selected:bg-background data-selected:text-foreground dark:data-selected:border-input dark:data-selected:bg-input/30 dark:data-selected:text-foreground",
          "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-selected:bg-transparent dark:group-data-[variant=line]/tabs-list:data-selected:border-transparent dark:group-data-[variant=line]/tabs-list:data-selected:bg-transparent",
          "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-selected:after:opacity-100",
        ],
        props.class,
      )}
    />
  );
}

/** Alias for the ui-sdk part name. */
export const TabsTab = TabsTrigger;

/** A bar under the selected tab. ui-sdk sizes it with `--active-tab-*` variables. */
export function TabsIndicator(props: ComponentProps<typeof TabsIndicatorPrimitive>) {
  return (
    <TabsIndicatorPrimitive
      {...props}
      class={partClass(
        "pointer-events-none absolute bg-foreground transition-all duration-200 group-data-[orientation=horizontal]/tabs:bottom-[-2px] group-data-[orientation=horizontal]/tabs:left-(--active-tab-left) group-data-[orientation=horizontal]/tabs:h-0.5 group-data-[orientation=horizontal]/tabs:w-(--active-tab-width) group-data-[orientation=vertical]/tabs:top-(--active-tab-top) group-data-[orientation=vertical]/tabs:-right-1 group-data-[orientation=vertical]/tabs:h-(--active-tab-height) group-data-[orientation=vertical]/tabs:w-0.5",
        props.class,
      )}
    />
  );
}

export function TabsContent(props: ComponentProps<typeof TabsPanelPrimitive>) {
  return (
    <TabsPanelPrimitive
      {...props}
      class={partClass("flex-1 text-xs/relaxed outline-none", props.class)}
    />
  );
}

/** Alias for the ui-sdk part name. */
export const TabsPanel = TabsContent;
