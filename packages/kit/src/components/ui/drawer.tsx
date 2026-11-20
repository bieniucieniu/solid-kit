import type { JSX } from "@solidjs/web";
import {
  Drawer as DrawerPrimitive,
  DrawerBackdrop as DrawerBackdropPrimitive,
  DrawerClose as DrawerClosePrimitive,
  DrawerContent as DrawerContentPrimitive,
  DrawerDescription as DrawerDescriptionPrimitive,
  DrawerHandle as DrawerHandlePrimitive,
  DrawerTitle as DrawerTitlePrimitive,
  DrawerTrigger as DrawerTriggerPrimitive,
} from "@ui-sdk/solid/drawer";
import { type ComponentProps, omit } from "solid-js";
import { type ButtonSize, type ButtonVariant, buttonVariants } from "./button";
import { cn, partClass } from "#/lib/utils";

export { DrawerOutlet, createDrawerController } from "@ui-sdk/solid/drawer";

/** Drag-to-dismiss panel. `side` defaults to `bottom`; `snapPoints` adds resting heights. */
export function Drawer(props: ComponentProps<typeof DrawerPrimitive>) {
  return <DrawerPrimitive {...props} />;
}

export function DrawerTrigger(props: ComponentProps<typeof DrawerTriggerPrimitive>) {
  return <DrawerTriggerPrimitive {...props} />;
}

/** ui-sdk sets its opacity from how far the drawer is open, so it tracks a drag. */
export function DrawerOverlay(props: ComponentProps<typeof DrawerBackdropPrimitive>) {
  const rest = omit(props, "class");
  return (
    <DrawerBackdropPrimitive
      class={partClass(
        "fixed inset-0 z-50 bg-black/80 supports-backdrop-filter:backdrop-blur-xs",
        props.class,
      )}
      {...rest}
    />
  );
}

/** Alias for the ui-sdk part name. */
export const DrawerBackdrop = DrawerOverlay;

/** The sheet. ui-sdk positions and translates it; this gives it a size, a surface and corners. */
export const drawerContentClass = [
  "group/drawer-content z-50 flex h-auto flex-col gap-4 bg-popover px-4 pb-4 text-xs/relaxed text-popover-foreground outline-none",
  "data-[side=bottom]:mt-24 data-[side=bottom]:max-h-[80vh] data-[side=bottom]:w-full data-[side=bottom]:rounded-t-xl data-[side=bottom]:border-t",
  "data-[side=top]:mb-24 data-[side=top]:max-h-[80vh] data-[side=top]:w-full data-[side=top]:rounded-b-xl data-[side=top]:border-b data-[side=top]:pt-4",
  "data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:rounded-r-xl data-[side=left]:border-r data-[side=left]:pt-4 data-[side=left]:sm:max-w-sm",
  "data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:rounded-l-xl data-[side=right]:border-l data-[side=right]:pt-4 data-[side=right]:sm:max-w-sm",
  "border-border",
];

export function DrawerContent(
  props: ComponentProps<typeof DrawerContentPrimitive> & {
    /** Show the grab handle on a bottom drawer. Defaults to true. */
    showHandle?: boolean;
  },
) {
  const rest = omit(props, "class", "children", "showHandle");
  return (
    <DrawerContentPrimitive class={partClass(drawerContentClass, props.class)} {...rest}>
      {(props.showHandle ?? true) && (
        <DrawerHandlePrimitive class="mx-auto mt-3 hidden h-1.5 w-[100px] shrink-0 rounded-full bg-muted group-data-[side=bottom]/drawer-content:block" />
      )}
      {props.children as JSX.Element}
    </DrawerContentPrimitive>
  );
}

export function DrawerHeader(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const rest = omit(props, "class");
  return (
    <div
      data-slot="drawer-header"
      class={cn("flex flex-col gap-1 text-center md:text-left", props.class)}
      {...rest}
    />
  );
}

export function DrawerFooter(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const rest = omit(props, "class");
  return (
    <div
      data-slot="drawer-footer"
      class={cn("mt-auto flex flex-col gap-2", props.class)}
      {...rest}
    />
  );
}

export function DrawerTitle(props: ComponentProps<typeof DrawerTitlePrimitive>) {
  const rest = omit(props, "class");
  return (
    <DrawerTitlePrimitive
      class={partClass("text-sm font-medium text-foreground", props.class)}
      {...rest}
    />
  );
}

/** The 1.9 name for the title. */
export const DrawerLabel = DrawerTitle;

export function DrawerDescription(props: ComponentProps<typeof DrawerDescriptionPrimitive>) {
  const rest = omit(props, "class");
  return (
    <DrawerDescriptionPrimitive
      class={partClass("text-xs/relaxed text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function DrawerClose(
  props: ComponentProps<typeof DrawerClosePrimitive> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
  },
) {
  const rest = omit(props, "class", "variant", "size");
  return (
    <DrawerClosePrimitive
      class={partClass(
        () => buttonVariants({ variant: props.variant ?? "outline", size: props.size }),
        props.class,
      )}
      {...rest}
    />
  );
}
