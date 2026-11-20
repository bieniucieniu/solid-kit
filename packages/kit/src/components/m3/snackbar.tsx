import type { JSX } from "@solidjs/web";
import {
  Toast as ToastPrimitive,
  ToastAction as ToastActionPrimitive,
  ToastClose as ToastClosePrimitive,
  ToastTitle as ToastTitlePrimitive,
  ToastRegion as ToastRegionPrimitive,
  createToaster,
} from "@ui-sdk/solid/toast";
import { type ComponentProps, omit } from "solid-js";
import { partClass } from "#/lib/utils";

/**
 * Snackbars have their own ui-sdk toaster, apart from any other toasts on the page.
 * `snackbar("Photo saved", { action: { label: "Undo", onAction } })` shows one; it returns an id
 * for `snackbar.update` and `snackbar.dismiss`.
 */
export const snackbar = createToaster();

/**
 * Mount once. Snackbars stack bottom-center, one at a time. Without children it renders each
 * queued snackbar with its message, action and close button.
 */
export function SnackbarRegion(props: ComponentProps<typeof ToastRegionPrimitive>) {
  const rest = omit(props, "class", "children");
  return (
    <ToastRegionPrimitive
      toaster={snackbar}
      side="bottom"
      align="center"
      maxVisible={1}
      class={partClass(
        "fixed bottom-4 left-1/2 z-50 h-(--toast-front-height) w-[calc(100%-2rem)] max-w-150 -translate-x-1/2 outline-none",
        props.class,
      )}
      {...rest}
    >
      {props.children ??
        (() => (
          <Snackbar>
            <SnackbarMessage />
            <SnackbarAction />
            <SnackbarClose />
          </Snackbar>
        ))}
    </ToastRegionPrimitive>
  );
}

/** One snackbar: inverse surface, a message, and an optional action and close button. */
export function Snackbar(props: ComponentProps<typeof ToastPrimitive>) {
  const rest = omit(props, "class");
  return (
    <ToastPrimitive
      class={partClass(
        "absolute inset-x-0 bottom-0 flex min-h-12 w-full items-center gap-1 rounded-extra-small bg-inverse-surface py-1 pr-2 pl-4 text-inverse-on-surface shadow-level-3 select-none [translate:var(--toast-swipe-x,0px)_var(--toast-swipe-y,0px)] transition-[opacity,translate] duration-300 ease-default-spatial data-starting-style:translate-y-4 data-starting-style:opacity-0 data-ending-style:opacity-0 data-ending-style:duration-150 data-swiping:transition-none",
        props.class,
      )}
      {...rest}
    />
  );
}

/** The message: the queued snackbar's text (its title). */
export function SnackbarMessage(props: ComponentProps<typeof ToastTitlePrimitive>) {
  const rest = omit(props, "class");
  return (
    <ToastTitlePrimitive
      class={partClass("flex-1 py-2.5 typescale-body-medium text-inverse-on-surface", props.class)}
      {...rest}
    />
  );
}

/** Text action in inverse-primary. Empty, it shows the queued snackbar's action. */
export function SnackbarAction(props: ComponentProps<typeof ToastActionPrimitive>) {
  const rest = omit(props, "class");
  return (
    <ToastActionPrimitive
      class={partClass(
        "relative inline-flex h-10 shrink-0 cursor-pointer items-center rounded-full px-3 typescale-label-large text-inverse-primary state-layer focus-ring empty:hidden",
        props.class,
      )}
      {...rest}
    />
  );
}

export function SnackbarClose(props: ComponentProps<typeof ToastClosePrimitive>) {
  const rest = omit(props, "class", "children");
  return (
    <ToastClosePrimitive
      aria-label="Dismiss"
      class={partClass(
        "relative flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-inverse-on-surface state-layer focus-ring [&_svg]:size-6",
        props.class,
      )}
      {...rest}
    >
      {(props.children as JSX.Element) ?? (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      )}
    </ToastClosePrimitive>
  );
}
