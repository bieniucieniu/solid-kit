import { Dialog as DrawerPrimitive, useDialogContext } from "@kobalte/core/dialog";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type DrawerRootProps = ComponentProps<typeof DrawerPrimitive>;
type DrawerOverlayProps = ComponentProps<typeof DrawerPrimitive.Overlay>;
type DrawerContentProps = ComponentProps<typeof DrawerPrimitive.Content>;
type DrawerTitleProps = ComponentProps<typeof DrawerPrimitive.Title>;
type DrawerDescriptionProps = ComponentProps<typeof DrawerPrimitive.Description>;
type DrawerCloseButtonProps = ComponentProps<typeof DrawerPrimitive.CloseButton>;

function DrawerRoot(props: DrawerRootProps) {
  return <DrawerPrimitive {...props} />;
}

export function DrawerOverlay(props: DrawerOverlayProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <DrawerPrimitive.Overlay
      ref={props.ref}
      class={cn("fixed inset-0 z-50 bg-black/80", props.class)}
      {...rest}
    />
  );
}

export function DrawerContent(props: DrawerContentProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <DrawerPrimitive.Content
      ref={props.ref}
      class={cn(
        "fixed inset-x-0 bottom-0 z-50 flex max-h-[85vh] w-full flex-col gap-1 overflow-auto rounded-t-xl bg-popover p-4 text-xs/relaxed text-popover-foreground shadow-lg outline-none",
        props.class,
      )}
      {...rest}
    />
  );
}

export function DrawerTitle(props: DrawerTitleProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <DrawerPrimitive.Title
      ref={props.ref}
      class={cn("text-sm font-medium", props.class)}
      {...rest}
    />
  );
}

export function DrawerDescription(props: DrawerDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <DrawerPrimitive.Description
      ref={props.ref}
      class={cn("text-xs/relaxed text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function DrawerCloseButton(props: DrawerCloseButtonProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <DrawerPrimitive.CloseButton
      ref={props.ref}
      class={cn(
        "inline-flex h-7 items-center justify-center rounded-md px-2 text-xs/relaxed text-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:outline-none data-disabled:opacity-50",
        props.class,
      )}
      {...rest}
    />
  );
}

export const DrawerTrigger = DrawerPrimitive.Trigger;
export const DrawerPortal = DrawerPrimitive.Portal;

export const Drawer = Object.assign(DrawerRoot, {
  Trigger: DrawerTrigger,
  Portal: DrawerPortal,
  Overlay: DrawerOverlay,
  Content: DrawerContent,
  Title: DrawerTitle,
  Description: DrawerDescription,
  CloseButton: DrawerCloseButton,
  useContext: useDialogContext,
});
