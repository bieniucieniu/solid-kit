import { Dialog as DialogPrimitive } from "@kobalte/core/dialog";
import { type ComponentProps, type JSX, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type BottomSheetProps = ComponentProps<typeof DialogPrimitive>;
type BottomSheetOverlayProps = ComponentProps<typeof DialogPrimitive.Overlay>;
type BottomSheetContentProps = ComponentProps<typeof DialogPrimitive.Content>;
type BottomSheetTitleProps = ComponentProps<typeof DialogPrimitive.Title>;
type BottomSheetDescriptionProps = ComponentProps<typeof DialogPrimitive.Description>;

/** Modal bottom sheet (Kobalte dialog). */
export function BottomSheet(props: BottomSheetProps) {
  return <DialogPrimitive {...props} />;
}

export function BottomSheetOverlay(props: BottomSheetOverlayProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <DialogPrimitive.Overlay
      ref={props.ref}
      data-slot="bottom-sheet-overlay"
      class={cn(
        "fixed inset-0 z-50 bg-scrim/32 data-expanded:animate-in data-expanded:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        props.class,
      )}
      {...rest}
    />
  );
}

/** Up to 640px wide, centered, with 28px top corners. */
export function BottomSheetContent(props: BottomSheetContentProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <DialogPrimitive.Content
      ref={props.ref}
      data-slot="bottom-sheet-content"
      class={cn(
        "fixed inset-x-0 bottom-0 z-50 mx-auto flex max-h-[calc(100%-4.5rem)] w-full max-w-160 flex-col overflow-y-auto rounded-t-extra-large bg-surface-container-low px-4 pb-6 text-on-surface shadow-level-1 outline-none data-expanded:animate-in data-expanded:slide-in-from-bottom data-expanded:duration-500 data-expanded:ease-default-spatial data-closed:animate-out data-closed:slide-out-to-bottom data-closed:duration-200 medium:mt-18",
        props.class,
      )}
      {...rest}
    />
  );
}

/** The 32x4 grab handle at the top. Visual only. */
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

export function BottomSheetTitle(props: BottomSheetTitleProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <DialogPrimitive.Title
      ref={props.ref}
      data-slot="bottom-sheet-title"
      class={cn("px-2 pb-2 typescale-title-large text-on-surface", props.class)}
      {...rest}
    />
  );
}

export function BottomSheetDescription(props: BottomSheetDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <DialogPrimitive.Description
      ref={props.ref}
      data-slot="bottom-sheet-description"
      class={cn("px-2 typescale-body-medium text-on-surface-variant", props.class)}
      {...rest}
    />
  );
}

export const BottomSheetTrigger = DialogPrimitive.Trigger;
export const BottomSheetPortal = DialogPrimitive.Portal;
export const BottomSheetClose = DialogPrimitive.CloseButton;
