import {
  Dialog as DialogPrimitive,
  DialogBackdrop as DialogBackdropPrimitive,
  DialogClose as DialogClosePrimitive,
  DialogContent as DialogContentPrimitive,
  DialogDescription as DialogDescriptionPrimitive,
  DialogTitle as DialogTitlePrimitive,
  DialogTrigger as DialogTriggerPrimitive,
} from "@ui-sdk/solid/dialog";
import type { JSX } from "@solidjs/web";
import { type ComponentProps, Show, omit } from "solid-js";
import { type ButtonSize, type ButtonVariant, buttonVariants } from "./button";
import { cn, partClass } from "#kit/lib/utils";

export { createDialogController } from "@ui-sdk/solid/dialog";

export function Dialog(props: ComponentProps<typeof DialogPrimitive>) {
  return <DialogPrimitive {...props} />;
}

export function DialogTrigger(props: ComponentProps<typeof DialogTriggerPrimitive>) {
  return <DialogTriggerPrimitive {...props} />;
}

export function DialogOverlay(props: ComponentProps<typeof DialogBackdropPrimitive>) {
  return (
    <DialogBackdropPrimitive
      {...props}
      class={partClass(
        "fixed inset-0 isolate z-50 bg-black/80 transition-opacity duration-100 supports-backdrop-filter:backdrop-blur-xs data-starting-style:opacity-0 data-ending-style:opacity-0",
        props.class,
      )}
    />
  );
}

/** Alias for the ui-sdk part name. */
export const DialogBackdrop = DialogOverlay;

export function DialogContent(
  props: ComponentProps<typeof DialogContentPrimitive> & { showCloseButton?: boolean },
) {
  const rest = omit(props, "showCloseButton");
  return (
    <DialogContentPrimitive
      {...rest}
      class={partClass(
        "fixed top-1/2 left-1/2 z-50 m-0 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl border-0 bg-popover p-4 text-xs/relaxed text-popover-foreground ring-1 ring-foreground/10 transition-[opacity,scale] duration-100 outline-none sm:max-w-sm data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0",
        props.class,
      )}
    >
      {props.children as JSX.Element}
      <Show when={props.showCloseButton ?? true}>
        <DialogClosePrimitive
          aria-label="Close"
          class={buttonVariants({
            variant: "ghost",
            size: "icon-sm",
            class: "absolute top-2 right-2",
          })}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </DialogClosePrimitive>
      </Show>
    </DialogContentPrimitive>
  );
}

export function DialogHeader(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div data-slot="dialog-header" {...props} class={cn("flex flex-col gap-1", props.class)} />
  );
}

export function DialogFooter(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="dialog-footer"
      {...props}
      class={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", props.class)}
    />
  );
}

export function DialogTitle(props: ComponentProps<typeof DialogTitlePrimitive>) {
  return <DialogTitlePrimitive {...props} class={partClass("text-sm font-medium", props.class)} />;
}

/** The 1.9 name for the title. */
export const DialogLabel = DialogTitle;

export function DialogDescription(props: ComponentProps<typeof DialogDescriptionPrimitive>) {
  return (
    <DialogDescriptionPrimitive
      {...props}
      class={partClass(
        "text-xs/relaxed text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        props.class,
      )}
    />
  );
}

export function DialogClose(
  props: ComponentProps<typeof DialogClosePrimitive> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
  },
) {
  const rest = omit(props, "variant", "size");
  return (
    <DialogClosePrimitive
      {...rest}
      class={partClass(
        () => buttonVariants({ variant: props.variant ?? "outline", size: props.size }),
        props.class,
      )}
    />
  );
}
