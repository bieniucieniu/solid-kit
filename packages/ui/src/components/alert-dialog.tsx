import { AlertDialog as AlertDialogPrimitive } from "@kobalte/core/alert-dialog";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type AlertDialogRootProps = ComponentProps<typeof AlertDialogPrimitive>;
type AlertDialogOverlayProps = ComponentProps<typeof AlertDialogPrimitive.Overlay>;
type AlertDialogContentProps = ComponentProps<typeof AlertDialogPrimitive.Content>;
type AlertDialogTitleProps = ComponentProps<typeof AlertDialogPrimitive.Title>;
type AlertDialogDescriptionProps = ComponentProps<typeof AlertDialogPrimitive.Description>;
type AlertDialogCloseButtonProps = ComponentProps<typeof AlertDialogPrimitive.CloseButton>;

function AlertDialogRoot(props: AlertDialogRootProps) {
  return <AlertDialogPrimitive {...props} />;
}

export function AlertDialogOverlay(props: AlertDialogOverlayProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <AlertDialogPrimitive.Overlay
      ref={props.ref}
      class={cn("fixed inset-0 z-50 bg-foreground/40", props.class)}
      {...rest}
    />
  );
}

export function AlertDialogContent(props: AlertDialogContentProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <AlertDialogPrimitive.Content
      ref={props.ref}
      class={cn(
        "fixed top-1/2 left-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg border border-border bg-background p-6 text-foreground shadow-lg outline-none",
        props.class,
      )}
      {...rest}
    />
  );
}

export function AlertDialogTitle(props: AlertDialogTitleProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <AlertDialogPrimitive.Title
      ref={props.ref}
      class={cn("text-lg font-medium text-foreground", props.class)}
      {...rest}
    />
  );
}

export function AlertDialogDescription(props: AlertDialogDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <AlertDialogPrimitive.Description
      ref={props.ref}
      class={cn("text-sm text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function AlertDialogCloseButton(props: AlertDialogCloseButtonProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <AlertDialogPrimitive.CloseButton
      ref={props.ref}
      class={cn(
        "inline-flex items-center justify-center rounded-lg px-3 py-1.5 text-sm text-foreground ring-ring hover:bg-muted focus-visible:ring-2 focus-visible:outline-none data-disabled:opacity-50",
        props.class,
      )}
      {...rest}
    />
  );
}

export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
export const AlertDialogPortal = AlertDialogPrimitive.Portal;

export const AlertDialog = Object.assign(AlertDialogRoot, {
  Trigger: AlertDialogTrigger,
  Portal: AlertDialogPortal,
  Overlay: AlertDialogOverlay,
  Content: AlertDialogContent,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  CloseButton: AlertDialogCloseButton,
});
