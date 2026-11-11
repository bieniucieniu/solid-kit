import { Dialog as DialogPrimitive } from "@kobalte/core/dialog";
import { type ComponentProps, type JSX, splitProps, type ValidComponent } from "solid-js";
import { Dynamic } from "solid-js/web";
import { cn } from "@/lib/utils";

/** Standard (always visible) drawer: a 360px column of destinations. */
export function NavigationDrawer(props: JSX.HTMLAttributes<HTMLElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
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
  const [, rest] = splitProps(props, ["class", "ref"]);
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
  const [, rest] = splitProps(props, ["class", "ref", "as", "active"]);
  return (
    <Dynamic
      component={props.as ?? "button"}
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
  const [, rest] = splitProps(props, ["class", "ref"]);
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
  const [, rest] = splitProps(props, ["class", "ref"]);
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
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <hr
      ref={props.ref}
      data-slot="navigation-drawer-divider"
      class={cn("mx-4 my-2 border-none bg-outline-variant h-px", props.class)}
      {...rest}
    />
  );
}

type ModalNavigationDrawerProps = ComponentProps<typeof DialogPrimitive>;
type ModalNavigationDrawerOverlayProps = ComponentProps<typeof DialogPrimitive.Overlay>;
type ModalNavigationDrawerContentProps = ComponentProps<typeof DialogPrimitive.Content>;

/** Modal drawer that slides in from the start edge over a scrim (Kobalte dialog). */
export function ModalNavigationDrawer(props: ModalNavigationDrawerProps) {
  return <DialogPrimitive {...props} />;
}

export function ModalNavigationDrawerOverlay(props: ModalNavigationDrawerOverlayProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <DialogPrimitive.Overlay
      ref={props.ref}
      data-slot="modal-navigation-drawer-overlay"
      class={cn(
        "fixed inset-0 z-50 bg-scrim/32 data-expanded:animate-in data-expanded:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        props.class,
      )}
      {...rest}
    />
  );
}

export function ModalNavigationDrawerContent(props: ModalNavigationDrawerContentProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <DialogPrimitive.Content
      ref={props.ref}
      data-slot="modal-navigation-drawer-content"
      class={cn(
        "fixed inset-y-0 left-0 z-50 flex w-90 max-w-[calc(100%-3.5rem)] flex-col gap-0.5 overflow-y-auto rounded-e-large bg-surface-container-low p-3 text-on-surface-variant shadow-level-1 outline-none data-expanded:animate-in data-expanded:slide-in-from-left data-expanded:duration-500 data-expanded:ease-default-spatial data-closed:animate-out data-closed:slide-out-to-left data-closed:duration-200",
        props.class,
      )}
      {...rest}
    />
  );
}

export const ModalNavigationDrawerTrigger = DialogPrimitive.Trigger;
export const ModalNavigationDrawerPortal = DialogPrimitive.Portal;
export const ModalNavigationDrawerClose = DialogPrimitive.CloseButton;
export const ModalNavigationDrawerTitle = DialogPrimitive.Title;
