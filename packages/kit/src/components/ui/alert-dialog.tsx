import type { JSX } from "@solidjs/web";
import {
  AlertDialog as AlertDialogPrimitive,
  AlertDialogBackdrop as AlertDialogBackdropPrimitive,
  AlertDialogClose as AlertDialogClosePrimitive,
  AlertDialogContent as AlertDialogContentPrimitive,
  AlertDialogDescription as AlertDialogDescriptionPrimitive,
  AlertDialogTitle as AlertDialogTitlePrimitive,
  AlertDialogTrigger as AlertDialogTriggerPrimitive,
} from "@ui-sdk/solid/alert-dialog";
import { type ComponentProps, omit } from "solid-js";
import { type ButtonSize, type ButtonVariant, buttonVariants } from "./button";
import { cn, partClass } from "#kit/lib/utils";

export { createConfirm } from "@ui-sdk/solid/alert-dialog";

/** A dialog that needs an answer: `role="alertdialog"`, and an outside press does not close it. */
export function AlertDialog(props: ComponentProps<typeof AlertDialogPrimitive>) {
  return <AlertDialogPrimitive {...props} />;
}

export function AlertDialogTrigger(props: ComponentProps<typeof AlertDialogTriggerPrimitive>) {
  return <AlertDialogTriggerPrimitive {...props} />;
}

export function AlertDialogOverlay(props: ComponentProps<typeof AlertDialogBackdropPrimitive>) {
  return (
    <AlertDialogBackdropPrimitive
      {...props}
      class={partClass(
        "fixed inset-0 z-50 bg-black/80 transition-opacity duration-100 supports-backdrop-filter:backdrop-blur-xs data-starting-style:opacity-0 data-ending-style:opacity-0",
        props.class,
      )}
    />
  );
}

/** Alias for the ui-sdk part name. */
export const AlertDialogBackdrop = AlertDialogOverlay;

export function AlertDialogContent(
  props: ComponentProps<typeof AlertDialogContentPrimitive> & { size?: "default" | "sm" },
) {
  const rest = omit(props, "size");
  return (
    <AlertDialogContentPrimitive
      data-size={props.size ?? "default"}
      {...rest}
      class={partClass(
        "group/alert-dialog-content fixed top-1/2 left-1/2 z-50 m-0 grid w-full -translate-x-1/2 -translate-y-1/2 gap-3 rounded-xl bg-popover p-4 text-popover-foreground ring-1 ring-foreground/10 transition-[opacity,scale] duration-100 outline-none data-[size=default]:max-w-xs data-[size=sm]:max-w-64 data-[size=default]:sm:max-w-sm data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0",
        props.class,
      )}
    />
  );
}

export function AlertDialogHeader(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="alert-dialog-header"
      {...props}
      class={cn(
        "grid grid-rows-[auto_1fr] place-items-center gap-1 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-4 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]",
        props.class,
      )}
    />
  );
}

export function AlertDialogFooter(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="alert-dialog-footer"
      {...props}
      class={cn(
        "flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end",
        props.class,
      )}
    />
  );
}

export function AlertDialogMedia(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="alert-dialog-media"
      {...props}
      class={cn(
        "mb-2 inline-flex size-8 items-center justify-center rounded-md bg-muted sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-4",
        props.class,
      )}
    />
  );
}

export function AlertDialogTitle(props: ComponentProps<typeof AlertDialogTitlePrimitive>) {
  return (
    <AlertDialogTitlePrimitive
      {...props}
      class={partClass(
        "text-sm font-medium sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2",
        props.class,
      )}
    />
  );
}

/** The 1.9 name for the title. */
export const AlertDialogLabel = AlertDialogTitle;

export function AlertDialogDescription(
  props: ComponentProps<typeof AlertDialogDescriptionPrimitive>,
) {
  return (
    <AlertDialogDescriptionPrimitive
      {...props}
      class={partClass(
        "text-xs/relaxed text-balance text-muted-foreground md:text-pretty *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        props.class,
      )}
    />
  );
}

/** One answer. `value="confirm"` is the agreeing answer; an async `action` keeps the dialog open while it runs. */
export function AlertDialogClose(
  props: ComponentProps<typeof AlertDialogClosePrimitive> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
  },
) {
  const rest = omit(props, "variant", "size");
  return (
    <AlertDialogClosePrimitive
      {...rest}
      class={partClass(
        () => buttonVariants({ variant: props.variant ?? "outline", size: props.size }),
        props.class,
      )}
    />
  );
}
