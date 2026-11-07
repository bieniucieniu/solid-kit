import { NavigationMenu as NavigationMenuPrimitive } from "@kobalte/core/navigation-menu";
import { type ComponentProps, type JSX, Show, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type NavigationMenuRootProps = ComponentProps<typeof NavigationMenuPrimitive> & {
  /** Render the shared viewport panel. Set `false` to place `NavigationMenu.Viewport` yourself. */
  viewport?: boolean;
};
type NavigationMenuItemProps = ComponentProps<typeof NavigationMenuPrimitive.Menu>;
type NavigationMenuTriggerProps = ComponentProps<typeof NavigationMenuPrimitive.Trigger> &
  Pick<JSX.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target" | "rel">;
type NavigationMenuContentProps = ComponentProps<typeof NavigationMenuPrimitive.Content>;
type NavigationMenuLinkProps = ComponentProps<typeof NavigationMenuPrimitive.Item>;
type NavigationMenuViewportProps = ComponentProps<typeof NavigationMenuPrimitive.Viewport>;

function NavigationMenuRoot(props: NavigationMenuRootProps) {
  const [, rest] = splitProps(props, [
    "class",
    "ref",
    "children",
    "viewport",
    "placement",
    "gutter",
  ]);
  return (
    <NavigationMenuPrimitive
      ref={props.ref}
      data-slot="navigation-menu"
      placement={props.placement ?? "bottom-start"}
      gutter={props.gutter ?? 6}
      class={cn(
        "group/navigation-menu relative flex max-w-max list-none items-center gap-0",
        props.class,
      )}
      {...rest}
    >
      {props.children}
      <Show when={props.viewport !== false}>
        <NavigationMenuViewport />
      </Show>
    </NavigationMenuPrimitive>
  );
}

/** One dropdown: a `Trigger` plus its `Content`. Renders no element. */
export function NavigationMenuItem(props: NavigationMenuItemProps) {
  return <NavigationMenuPrimitive.Menu {...props} />;
}

export const navigationMenuTriggerStyle =
  "group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-lg px-2.5 py-1.5 text-xs/relaxed font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-expanded:bg-muted/50 data-expanded:hover:bg-muted data-expanded:focus:bg-muted";

/**
 * Opens its `Item`'s content. With `href` and outside an `Item`, it renders a plain top-level
 * link that still takes part in arrow-key navigation.
 */
export function NavigationMenuTrigger(props: NavigationMenuTriggerProps) {
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  const isLink = () => props.href !== undefined;
  return (
    <NavigationMenuPrimitive.Trigger
      as={isLink() ? "a" : "button"}
      ref={props.ref}
      data-slot="navigation-menu-trigger"
      class={cn(navigationMenuTriggerStyle, props.class)}
      {...rest}
    >
      {props.children}
      <Show when={!isLink()}>
        <svg
          viewBox="0 0 24 24"
          class="relative top-px ml-1 size-3 transition duration-300 group-data-expanded/navigation-menu-trigger:rotate-180"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </Show>
    </NavigationMenuPrimitive.Trigger>
  );
}

/** Portals into the shared viewport and slides in from the side of the previous menu. */
export function NavigationMenuContent(props: NavigationMenuContentProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <NavigationMenuPrimitive.Portal>
      <NavigationMenuPrimitive.Content
        ref={props.ref}
        data-slot="navigation-menu-content"
        class={cn(
          "absolute top-0 left-0 w-max list-none p-1.5 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] outline-none data-closed:pointer-events-none data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
          props.class,
        )}
        {...rest}
      />
    </NavigationMenuPrimitive.Portal>
  );
}

/** A link inside `Content`. Renders `li > a`. */
export function NavigationMenuLink(props: NavigationMenuLinkProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <NavigationMenuPrimitive.Item
      ref={props.ref}
      data-slot="navigation-menu-link"
      class={cn(
        "flex items-center gap-1.5 rounded-lg p-2 text-xs/relaxed transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:outline-1 data-highlighted:bg-muted data-[active=true]:bg-muted/50 data-[active=true]:hover:bg-muted data-[active=true]:focus:bg-muted [&_svg:not([class*='size-'])]:size-4",
        props.class,
      )}
      {...rest}
    />
  );
}

/** The shared panel every `Content` renders into. `NavigationMenu` adds one unless `viewport={false}`. */
export function NavigationMenuViewport(props: NavigationMenuViewportProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <NavigationMenuPrimitive.Viewport
      ref={props.ref}
      data-slot="navigation-menu-viewport"
      class={cn(
        "z-50 h-(--kb-navigation-menu-viewport-height) w-(--kb-navigation-menu-viewport-width) origin-(--kb-menu-content-transform-origin) list-none overflow-hidden rounded-xl bg-popover text-xs/relaxed text-popover-foreground shadow-md ring-1 ring-foreground/10 transition-[width,height] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] data-expanded:animate-in data-expanded:fade-in-0 data-expanded:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        props.class,
      )}
      {...rest}
    />
  );
}

export const NavigationMenu = Object.assign(NavigationMenuRoot, {
  Item: NavigationMenuItem,
  Trigger: NavigationMenuTrigger,
  Content: NavigationMenuContent,
  Link: NavigationMenuLink,
  Viewport: NavigationMenuViewport,
});
