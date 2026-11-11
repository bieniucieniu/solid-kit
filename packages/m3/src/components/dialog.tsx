import { Dialog as DialogPrimitive, useDialogContext } from "@kobalte/core/dialog";
import { type ComponentProps, type JSX, splitProps } from "solid-js";
import { type ButtonSize, type ButtonVariant, buttonVariants } from "./button";
import { cn } from "@/lib/utils";

type DialogProps = ComponentProps<typeof DialogPrimitive>;
type DialogOverlayProps = ComponentProps<typeof DialogPrimitive.Overlay>;
type DialogContentProps = ComponentProps<typeof DialogPrimitive.Content> & {
  /** Fill the window: no corners, surface background, header row at the top. */
  fullScreen?: boolean;
};
type DialogHeadlineProps = ComponentProps<typeof DialogPrimitive.Title>;
type DialogDescriptionProps = ComponentProps<typeof DialogPrimitive.Description>;
type DialogCloseProps = ComponentProps<typeof DialogPrimitive.CloseButton> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Dialog(props: DialogProps) {
  return <DialogPrimitive {...props} />;
}

/** The scrim: 32% scrim color over the page. */
export function DialogOverlay(props: DialogOverlayProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <DialogPrimitive.Overlay
      ref={props.ref}
      data-slot="dialog-overlay"
      class={cn(
        "fixed inset-0 z-50 bg-scrim/32 data-expanded:animate-in data-expanded:fade-in-0 data-expanded:duration-200 data-closed:animate-out data-closed:fade-out-0 data-closed:duration-150",
        props.class,
      )}
      {...rest}
    />
  );
}

export function DialogContent(props: DialogContentProps) {
  const [, rest] = splitProps(props, ["class", "ref", "fullScreen"]);
  return (
    <DialogPrimitive.Content
      ref={props.ref}
      data-slot="dialog-content"
      data-full-screen={props.fullScreen ? "" : undefined}
      class={cn(
        "group/dialog fixed z-50 flex flex-col text-on-surface outline-none",
        props.fullScreen
          ? "inset-0 bg-surface data-expanded:animate-in data-expanded:slide-in-from-bottom-8 data-expanded:fade-in-0 data-expanded:duration-300 data-closed:animate-out data-closed:fade-out-0 data-closed:slide-out-to-bottom-8 data-closed:duration-200"
          : "top-1/2 left-1/2 max-h-[calc(100%-3rem)] w-[calc(100%-3rem)] max-w-140 min-w-70 -translate-x-1/2 -translate-y-1/2 gap-4 overflow-y-auto rounded-extra-large bg-surface-container-high p-6 shadow-level-3 medium:w-auto data-expanded:animate-in data-expanded:fade-in-0 data-expanded:zoom-in-90 data-expanded:slide-in-from-top-4 data-expanded:duration-300 data-expanded:ease-default-spatial data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-closed:duration-150",
        props.class,
      )}
      {...rest}
    />
  );
}

/** Optional hero icon above the headline. Centers the headline when present. */
export function DialogIcon(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <span
      ref={props.ref}
      data-slot="dialog-icon"
      class={cn(
        "flex justify-center text-secondary [&_svg:not([class*='size-'])]:size-6",
        props.class,
      )}
      {...rest}
    />
  );
}

/** Top row of a full-screen dialog: close button, headline, and a confirm action. */
export function DialogHeader(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      data-slot="dialog-header"
      class={cn(
        "flex h-14 shrink-0 items-center gap-1 px-1 [&>[data-slot=dialog-headline]]:flex-1 [&>[data-slot=dialog-headline]]:typescale-title-large",
        props.class,
      )}
      {...rest}
    />
  );
}

export function DialogHeadline(props: DialogHeadlineProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <DialogPrimitive.Title
      ref={props.ref}
      data-slot="dialog-headline"
      class={cn(
        "typescale-headline-small text-on-surface group-has-data-[slot=dialog-icon]/dialog:text-center",
        props.class,
      )}
      {...rest}
    />
  );
}

export function DialogDescription(props: DialogDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <DialogPrimitive.Description
      ref={props.ref}
      data-slot="dialog-description"
      class={cn(
        "typescale-body-medium text-on-surface-variant group-data-full-screen/dialog:px-6",
        props.class,
      )}
      {...rest}
    />
  );
}

/** Scrollable body for longer content, such as a list. */
export function DialogBody(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      data-slot="dialog-body"
      class={cn(
        "min-h-0 flex-1 overflow-y-auto typescale-body-medium text-on-surface-variant group-data-full-screen/dialog:px-6",
        props.class,
      )}
      {...rest}
    />
  );
}

export function DialogActions(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      data-slot="dialog-actions"
      class={cn("flex flex-wrap items-center justify-end gap-2 pt-2", props.class)}
      {...rest}
    />
  );
}

/** Closes the dialog. A text button by default. */
export function DialogClose(props: DialogCloseProps) {
  const [, rest] = splitProps(props, ["class", "ref", "variant", "size"]);
  return (
    <DialogPrimitive.CloseButton
      ref={props.ref}
      data-slot="dialog-close"
      class={buttonVariants({
        variant: props.variant ?? "text",
        size: props.size,
        class: props.class,
      })}
      {...rest}
    />
  );
}

export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogPortal = DialogPrimitive.Portal;
export const DialogCloseButton = DialogPrimitive.CloseButton;
export { useDialogContext };
