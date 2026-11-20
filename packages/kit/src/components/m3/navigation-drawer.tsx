import {
  Drawer as DrawerRootPrimitive,
  DrawerClose as DrawerClosePrimitive,
  DrawerContent as DrawerContentPrimitive,
  DrawerTitle as DrawerTitlePrimitive,
  DrawerBackdrop as DrawerBackdropPrimitive,
  DrawerTrigger as DrawerTriggerPrimitive,
} from "@ui-sdk/solid/drawer";
import { type JSX, type ValidComponent } from "@solidjs/web";
import { type ComponentProps, omit } from "solid-js";
import { dynamic } from "@solidjs/web";
import { cn, partClass } from "#kit/lib/utils";

/** Standard (always visible) drawer: a 360px column of destinations. */
export function NavigationDrawer(props: JSX.HTMLAttributes<HTMLElement>) {
  const rest = omit(props, "class");
  return (
    <nav
      ref={props.ref}
      data-slot="navigation-drawer"
      class={cn(
        "flex h-full w-90 max-w-full shrink-0 flex-col gap-0.5 overflow-y-auto bg-surface p-3 text-on-surface-variant",
        props.class,
      )}
      {...rest}
    />
  );
}

/** Section heading inside the drawer. */
export function NavigationDrawerHeadline(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const rest = omit(props, "class");
  return (
    <div
      ref={props.ref}
      data-slot="navigation-drawer-headline"
      class={cn(
        "flex h-14 items-center px-4 typescale-title-small text-on-surface-variant",
        props.class,
      )}
      {...rest}
    />
  );
}

export type NavigationDrawerItemProps = JSX.HTMLAttributes<HTMLElement> &
  Pick<JSX.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
  Pick<JSX.ButtonHTMLAttributes<HTMLButtonElement>, "disabled" | "type"> & {
    as?: ValidComponent;
    active?: boolean;
  };

/** A 56px pill: icon, label, and an optional trailing badge text. */
export function NavigationDrawerItem(props: NavigationDrawerItemProps) {
  const rest = omit(props, "class", "as", "active");
  const Tag = dynamic(() => props.as ?? "button");
  return (
    <Tag
      ref={props.ref}
      type={props.as ? undefined : "button"}
      data-slot="navigation-drawer-item"
      data-active={props.active ? "" : undefined}
      aria-current={props.active ? "page" : undefined}
      class={cn(
        "group/navigation-item relative flex h-14 w-full shrink-0 cursor-pointer items-center gap-3 rounded-full pr-6 pl-4 text-left typescale-label-large text-on-surface-variant outline-none select-none state-layer focus-ring motion-fast disabled:pointer-events-none disabled:opacity-38 data-active:bg-secondary-container data-active:text-on-secondary-container [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-6",
        props.class,
      )}
      {...rest}
    />
  );
}

export function NavigationDrawerItemLabel(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  const rest = omit(props, "class");
  return (
    <span
      ref={props.ref}
      data-slot="navigation-drawer-item-label"
      class={cn("min-w-0 flex-1 truncate", props.class)}
      {...rest}
    />
  );
}

/** Trailing count or label. */
export function NavigationDrawerItemBadge(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  const rest = omit(props, "class");
  return (
    <span
      ref={props.ref}
      data-slot="navigation-drawer-item-badge"
      class={cn("shrink-0 typescale-label-large tabular-nums", props.class)}
      {...rest}
    />
  );
}

export function NavigationDrawerDivider(props: JSX.HTMLAttributes<HTMLHRElement>) {
  const rest = omit(props, "class");
  return (
    <hr
      ref={props.ref}
      data-slot="navigation-drawer-divider"
      class={cn("mx-4 my-2 border-none bg-outline-variant h-px", props.class)}
      {...rest}
    />
  );
}

/**
 * Modal drawer that slides in from the start edge over a scrim (ui-sdk drawer). Swipe toward the
 * edge to dismiss.
 */
export function ModalNavigationDrawer(
  props: Omit<ComponentProps<typeof DrawerRootPrimitive>, "side">,
) {
  return <DrawerRootPrimitive {...props} side="left" />;
}

/** The scrim. Fades with how far the drawer is open, so it tracks a drag. */
export function ModalNavigationDrawerOverlay(
  props: ComponentProps<typeof DrawerBackdropPrimitive>,
) {
  const rest = omit(props, "class");
  return (
    <DrawerBackdropPrimitive
      class={partClass(() => cn("fixed inset-0 z-50 bg-scrim/32"), props.class)}
      {...rest}
    />
  );
}

export function ModalNavigationDrawerContent(props: ComponentProps<typeof DrawerContentPrimitive>) {
  const rest = omit(props, "class");
  return (
    <DrawerContentPrimitive
      class={partClass(
        () =>
          cn(
            "z-50 h-full flex w-90 max-w-[calc(100%-3.5rem)] flex-col gap-0.5 overflow-y-auto rounded-e-large bg-surface-container-low p-3 text-on-surface-variant shadow-level-1 outline-none",
          ),
        props.class,
      )}
      {...rest}
    />
  );
}

export function ModalNavigationDrawerTrigger(props: ComponentProps<typeof DrawerTriggerPrimitive>) {
  return <DrawerTriggerPrimitive {...props} />;
}
export function ModalNavigationDrawerClose(props: ComponentProps<typeof DrawerClosePrimitive>) {
  return <DrawerClosePrimitive {...props} />;
}
export function ModalNavigationDrawerTitle(props: ComponentProps<typeof DrawerTitlePrimitive>) {
  return <DrawerTitlePrimitive {...props} />;
}
