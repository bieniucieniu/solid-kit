import { Dialog as SheetPrimitive, useDialogContext } from "@kobalte/core/dialog";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type SheetRootProps = ComponentProps<typeof SheetPrimitive>;
type SheetOverlayProps = ComponentProps<typeof SheetPrimitive.Overlay>;
type SheetContentProps = ComponentProps<typeof SheetPrimitive.Content>;
type SheetTitleProps = ComponentProps<typeof SheetPrimitive.Title>;
type SheetDescriptionProps = ComponentProps<typeof SheetPrimitive.Description>;
type SheetCloseButtonProps = ComponentProps<typeof SheetPrimitive.CloseButton>;

function SheetRoot(props: SheetRootProps) {
  return <SheetPrimitive {...props} />;
}

export function SheetOverlay(props: SheetOverlayProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SheetPrimitive.Overlay
      ref={props.ref}
      class={cn("fixed inset-0 z-50 bg-foreground/40", props.class)}
      {...rest}
    />
  );
}

export function SheetContent(props: SheetContentProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SheetPrimitive.Content
      ref={props.ref}
      class={cn(
        "fixed inset-y-0 right-0 z-50 h-full w-full max-w-sm overflow-auto rounded-lg border border-border bg-background p-6 text-foreground shadow-lg outline-none",
        props.class,
      )}
      {...rest}
    />
  );
}

export function SheetTitle(props: SheetTitleProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SheetPrimitive.Title
      ref={props.ref}
      class={cn("text-lg font-medium text-foreground", props.class)}
      {...rest}
    />
  );
}

export function SheetDescription(props: SheetDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SheetPrimitive.Description
      ref={props.ref}
      class={cn("text-sm text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function SheetCloseButton(props: SheetCloseButtonProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SheetPrimitive.CloseButton
      ref={props.ref}
      class={cn(
        "inline-flex items-center justify-center rounded-lg px-3 py-1.5 text-sm text-foreground ring-ring hover:bg-muted focus-visible:ring-2 focus-visible:outline-none data-disabled:opacity-50",
        props.class,
      )}
      {...rest}
    />
  );
}

export const SheetTrigger = SheetPrimitive.Trigger;
export const SheetPortal = SheetPrimitive.Portal;

export const Sheet = Object.assign(SheetRoot, {
  Trigger: SheetTrigger,
  Portal: SheetPortal,
  Overlay: SheetOverlay,
  Content: SheetContent,
  Title: SheetTitle,
  Description: SheetDescription,
  CloseButton: SheetCloseButton,
  useContext: useDialogContext,
});
