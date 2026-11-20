import type { JSX } from "@solidjs/web";
import {
  NavigationMenu as NavigationMenuPrimitive,
  NavigationMenuContent as NavigationMenuContentPrimitive,
  NavigationMenuIndicator as NavigationMenuIndicatorPrimitive,
  NavigationMenuItem as NavigationMenuItemPrimitive,
  NavigationMenuLink as NavigationMenuLinkPrimitive,
  NavigationMenuList as NavigationMenuListPrimitive,
  NavigationMenuTrigger as NavigationMenuTriggerPrimitive,
  NavigationMenuViewport as NavigationMenuViewportPrimitive,
} from "@ui-sdk/solid/navigation-menu";
import { type ComponentProps, Show, omit } from "solid-js";
import { cn, partClass, popupMotion } from "#/lib/utils";

export { NavigationMenuLinkIcon } from "@ui-sdk/solid/navigation-menu";

/**
 * Site navigation with dropdown panels. Give it an `aria-label`. Each `NavigationMenuItem` holds
 * a trigger and its content, or a plain `NavigationMenuLink`.
 */
export function NavigationMenu(
  props: ComponentProps<typeof NavigationMenuPrimitive> & {
    /** Render the shared viewport panel. Set `false` to place `NavigationMenuViewport` yourself. */
    viewport?: boolean;
  },
) {
  const rest = omit(props, "class", "children", "viewport");
  return (
    <NavigationMenuPrimitive
      class={partClass(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        props.class,
      )}
      {...rest}
    >
      {props.children as JSX.Element}
      <Show when={props.viewport !== false}>
        <NavigationMenuViewport />
      </Show>
    </NavigationMenuPrimitive>
  );
}

export function NavigationMenuList(props: ComponentProps<typeof NavigationMenuListPrimitive>) {
  const rest = omit(props, "class");
  return (
    <NavigationMenuListPrimitive
      class={partClass(
        "group flex flex-1 list-none items-center justify-center gap-0",
        props.class,
      )}
      {...rest}
    />
  );
}

export function NavigationMenuItem(props: ComponentProps<typeof NavigationMenuItemPrimitive>) {
  const rest = omit(props, "class");
  return <NavigationMenuItemPrimitive class={partClass("relative", props.class)} {...rest} />;
}

export const navigationMenuTriggerStyle =
  "group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-lg px-2.5 py-1.5 text-xs/relaxed font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-open:bg-muted/50 data-open:hover:bg-muted data-open:focus:bg-muted";

export function NavigationMenuTrigger(
  props: ComponentProps<typeof NavigationMenuTriggerPrimitive>,
) {
  const rest = omit(props, "class", "children");
  return (
    <NavigationMenuTriggerPrimitive
      class={partClass(navigationMenuTriggerStyle, props.class)}
      {...rest}
    >
      {props.children as JSX.Element}
      <svg
        viewBox="0 0 24 24"
        class="relative top-px ml-1 size-3 transition duration-300 group-data-open/navigation-menu-trigger:rotate-180"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </NavigationMenuTriggerPrimitive>
  );
}

/**
 * The panel. Inside a viewport it sits at the viewport's corner with its own width, and slides in
 * from the side of the previous panel.
 */
export function NavigationMenuContent(
  props: ComponentProps<typeof NavigationMenuContentPrimitive>,
) {
  const rest = omit(props, "class");
  return (
    <NavigationMenuContentPrimitive
      class={partClass(
        "absolute top-0 left-0 w-max p-1.5 transition-[opacity,translate] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] outline-none data-[motion=from-end]:data-starting-style:translate-x-52 data-[motion=from-start]:data-starting-style:-translate-x-52 data-[motion=to-end]:data-ending-style:translate-x-52 data-[motion=to-start]:data-ending-style:-translate-x-52 data-starting-style:opacity-0 data-ending-style:opacity-0 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        props.class,
      )}
      {...rest}
    />
  );
}

/** A link. `current` marks the page you are on. */
export function NavigationMenuLink(props: ComponentProps<typeof NavigationMenuLinkPrimitive>) {
  const rest = omit(props, "class");
  return (
    <NavigationMenuLinkPrimitive
      class={partClass(
        "flex items-center gap-1.5 rounded-lg p-2 text-xs/relaxed transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:outline-1 aria-[current=page]:bg-muted/50 aria-[current=page]:hover:bg-muted [&_svg:not([class*='size-'])]:size-4",
        props.class,
      )}
      {...rest}
    />
  );
}

/** The shared panel every `Content` renders into. `NavigationMenu` adds one unless `viewport={false}`. */
export function NavigationMenuViewport(
  props: ComponentProps<typeof NavigationMenuViewportPrimitive>,
) {
  const rest = omit(props, "class");
  return (
    <NavigationMenuViewportPrimitive
      sideOffset={6}
      class={partClass(
        [
          "z-50 h-(--viewport-height) w-(--viewport-width) overflow-hidden rounded-xl bg-popover text-xs/relaxed text-popover-foreground shadow-md ring-1 ring-foreground/10 transition-[width,height,opacity,scale] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          popupMotion,
        ],
        props.class,
      )}
      {...rest}
    />
  );
}

/** A bar under the open trigger, or the current page's link. */
export function NavigationMenuIndicator(
  props: ComponentProps<typeof NavigationMenuIndicatorPrimitive>,
) {
  const rest = omit(props, "class");
  return (
    <NavigationMenuIndicatorPrimitive
      class={partClass(
        cn(
          "absolute top-(--active-item-bottom) left-(--active-item-left) z-10 h-0.5 w-(--active-item-width) bg-foreground opacity-0 transition-all duration-200 data-visible:opacity-100",
        ),
        props.class,
      )}
      {...rest}
    />
  );
}
