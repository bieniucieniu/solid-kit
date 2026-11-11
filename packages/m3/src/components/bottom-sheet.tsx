import DrawerPrimitive, {
  type ContentProps,
  type DescriptionProps,
  type DynamicProps,
  type LabelProps,
  type OverlayProps,
  type RootProps,
} from "@corvu/drawer";
import { type JSX, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

/**
 * Modal bottom sheet (corvu drawer). Drag down to dismiss. Pass `snapPoints` (for example
 * `[0, 0.5, 1]`) for a partially expanded state.
 */
export function BottomSheet(props: Omit<RootProps, "side">) {
  return <DrawerPrimitive {...props} side="bottom" />;
}

/** The scrim. Fades with how far the sheet is open, so it tracks a drag. */
export function BottomSheetOverlay(props: DynamicProps<"div", OverlayProps>) {
  const [, rest] = splitProps(props, ["class", "ref", "style"]);
  const context = DrawerPrimitive.useContext(props.contextId);
  return (
    <DrawerPrimitive.Overlay
      ref={props.ref}
      data-slot="bottom-sheet-overlay"
      class={cn(
        "fixed inset-0 z-50 bg-scrim/32 data-transitioning:transition-opacity data-opening:duration-500 data-closing:duration-200 data-snapping:duration-300 data-transitioning:ease-default-effects",
        props.class,
      )}
      style={{
        opacity: Math.min(context.openPercentage(), 1),
        ...(typeof props.style === "object" ? props.style : {}),
      }}
      {...rest}
    />
  );
}

/** Up to 640px wide, centered, with 28px top corners. */
export function BottomSheetContent(props: DynamicProps<"div", ContentProps>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <DrawerPrimitive.Content
      ref={props.ref}
      data-slot="bottom-sheet-content"
      class={cn(
        "fixed inset-x-0 bottom-0 z-50 mx-auto flex max-h-[calc(100%-4.5rem)] w-full max-w-160 flex-col overflow-y-auto rounded-t-extra-large bg-surface-container-low px-4 pb-6 text-on-surface shadow-level-1 outline-none after:absolute after:inset-x-0 after:top-full after:h-1/2 after:bg-inherit data-transitioning:transition-transform data-opening:duration-500 data-closing:duration-200 data-snapping:duration-300 data-transitioning:ease-default-spatial medium:mt-18",
        props.class,
      )}
      {...rest}
    />
  );
}

/** The 32x4 grab handle at the top. Visual only: the whole sheet is draggable. */
export function BottomSheetDragHandle(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
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

export function BottomSheetTitle(props: DynamicProps<"h2", LabelProps>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <DrawerPrimitive.Label
      ref={props.ref}
      data-slot="bottom-sheet-title"
      class={cn("px-2 pb-2 typescale-title-large text-on-surface", props.class)}
      {...rest}
    />
  );
}

export function BottomSheetDescription(props: DynamicProps<"p", DescriptionProps>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <DrawerPrimitive.Description
      ref={props.ref}
      data-slot="bottom-sheet-description"
      class={cn("px-2 typescale-body-medium text-on-surface-variant", props.class)}
      {...rest}
    />
  );
}

export const BottomSheetTrigger = DrawerPrimitive.Trigger;
export const BottomSheetPortal = DrawerPrimitive.Portal;
export const BottomSheetClose = DrawerPrimitive.Close;
export const useBottomSheetContext = DrawerPrimitive.useContext;
