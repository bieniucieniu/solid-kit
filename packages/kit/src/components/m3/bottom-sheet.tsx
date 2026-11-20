import {
  Drawer as DrawerRootPrimitive,
  DrawerClose as DrawerClosePrimitive,
  DrawerContent as DrawerContentPrimitive,
  DrawerDescription as DrawerDescriptionPrimitive,
  DrawerTitle as DrawerTitlePrimitive,
  DrawerBackdrop as DrawerBackdropPrimitive,
  DrawerTrigger as DrawerTriggerPrimitive,
} from "@ui-sdk/solid/drawer";
import { type JSX } from "@solidjs/web";
import { type ComponentProps, omit } from "solid-js";
import { ScrollArea } from "./scroll-area";
import { cn, partClass } from "#kit/lib/utils";

/**
 * Modal bottom sheet (ui-sdk drawer). Drag down to dismiss. Pass `snapPoints` (for example
 * `[0, 0.5, 1]`) for a partially expanded state.
 */
export function BottomSheet(props: Omit<ComponentProps<typeof DrawerRootPrimitive>, "side">) {
  return <DrawerRootPrimitive {...props} side="bottom" />;
}

/** The scrim. ui-sdk fades it with how far the sheet is open, so it tracks a drag. */
export function BottomSheetOverlay(props: ComponentProps<typeof DrawerBackdropPrimitive>) {
  const rest = omit(props, "class");
  return (
    <DrawerBackdropPrimitive
      class={partClass(() => cn("fixed inset-0 z-50 bg-scrim/32"), props.class)}
      {...rest}
    />
  );
}

/**
 * Up to 640px wide, centered, with 28px top corners. It does not scroll itself: the fill
 * below it (shown when the sheet is dragged up past its height) would become scrollable
 * space. Put long content in `BottomSheetBody`.
 */
export function BottomSheetContent(props: ComponentProps<typeof DrawerContentPrimitive>) {
  const rest = omit(props, "class");
  return (
    <DrawerContentPrimitive
      class={partClass(
        () =>
          cn(
            "z-50 mx-auto flex max-h-[calc(100%-4.5rem)] w-full max-w-160 flex-col rounded-t-extra-large bg-surface-container-low px-4 pb-6 text-on-surface shadow-level-1 outline-none after:absolute after:inset-x-0 after:top-full after:h-1/2 after:bg-inherit medium:mt-18",
          ),
        props.class,
      )}
      {...rest}
    />
  );
}

/** The 32x4 grab handle at the top. Visual only: the whole sheet is draggable. */
export function BottomSheetDragHandle(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const rest = omit(props, "class");
  return (
    <div
      ref={props.ref}
      aria-hidden="true"
      data-slot="bottom-sheet-drag-handle"
      class={cn(
        "mx-auto my-5.5 h-1 w-8 shrink-0 rounded-full bg-on-surface-variant/40",
        props.class,
      )}
      {...rest}
    />
  );
}

export function BottomSheetTitle(props: ComponentProps<typeof DrawerTitlePrimitive>) {
  const rest = omit(props, "class");
  return (
    <DrawerTitlePrimitive
      class={partClass(() => cn("px-2 pb-2 typescale-title-large text-on-surface"), props.class)}
      {...rest}
    />
  );
}

export function BottomSheetDescription(props: ComponentProps<typeof DrawerDescriptionPrimitive>) {
  const rest = omit(props, "class");
  return (
    <DrawerDescriptionPrimitive
      class={partClass(() => cn("px-2 typescale-body-medium text-on-surface-variant"), props.class)}
      {...rest}
    />
  );
}

/**
 * The scrolling region. Takes the height left under the handle and title, and reaches the
 * sheet's side and bottom edges so the scrollbar sits at the edge. Dragging down starts
 * closing the sheet only once it is scrolled to the top.
 */
export function BottomSheetBody(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const rest = omit(props, "class");
  return (
    <ScrollArea
      ref={props.ref}
      data-slot="bottom-sheet-body"
      class={cn("-mx-4 -mb-6 min-h-0 flex-1 px-4 pb-6", props.class)}
      {...rest}
    />
  );
}

export function BottomSheetTrigger(props: ComponentProps<typeof DrawerTriggerPrimitive>) {
  return <DrawerTriggerPrimitive {...props} />;
}
export function BottomSheetClose(props: ComponentProps<typeof DrawerClosePrimitive>) {
  return <DrawerClosePrimitive {...props} />;
}
