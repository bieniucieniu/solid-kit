import type { JSX } from "@solidjs/web";
import {
  Toast as ToastPrimitive,
  ToastAction as ToastActionPrimitive,
  ToastClose as ToastClosePrimitive,
  ToastDescription as ToastDescriptionPrimitive,
  ToastRegion as ToastRegionPrimitive,
  ToastTitle as ToastTitlePrimitive,
} from "@ui-sdk/solid/toast";
import { type ComponentProps, omit } from "solid-js";
import { type ButtonSize, type ButtonVariant, buttonVariants } from "./button";
import { partClass } from "#kit/lib/utils";

/**
 * `toast("Saved", { description, action })` queues a toast from anywhere; `toast.success`,
 * `toast.error` and `toast.promise` set its type. `createToaster()` makes a separate queue for a
 * region's `toaster` prop.
 */
export { createToaster, toast } from "@ui-sdk/solid/toast";

/**
 * Where toasts stack, bottom right. Place one near the app root. Without children it renders a
 * `Toast` with the title, description, action and close button of each queued toast.
 *
 * The stack uses ui-sdk's variables: collapsed, the toasts behind the newest peek out by their
 * index; hovered or focused, they spread out by their offset.
 */
export function ToastRegion(props: ComponentProps<typeof ToastRegionPrimitive>) {
  return (
    <ToastRegionPrimitive
      side="bottom"
      align="end"
      {...props}
      class={partClass(
        "fixed right-4 bottom-4 z-50 h-(--toast-front-height) w-[356px] max-w-[calc(100vw-2rem)] outline-none data-expanded:h-[calc(var(--toast-stack-height)+(var(--toast-count)-1)*12px)]",
        props.class,
      )}
    >
      {props.children ??
        (() => (
          <Toast>
            <ToastTitle />
            <ToastDescription />
            <div class="mt-1 flex gap-2 empty:hidden">
              <ToastAction size="sm" />
            </div>
            <ToastClose />
          </Toast>
        ))}
    </ToastRegionPrimitive>
  );
}

export function Toast(props: ComponentProps<typeof ToastPrimitive>) {
  return (
    <ToastPrimitive
      {...props}
      class={partClass(
        [
          "group/toast absolute inset-x-0 bottom-0 z-[calc(100-var(--toast-index))] flex h-(--toast-height) flex-col gap-1.5 overflow-hidden rounded-lg border border-border bg-popover p-4 text-xs/relaxed text-popover-foreground shadow-lg select-none",
          "[--y:calc(var(--toast-index)*-12px)] [translate:var(--toast-swipe-x,0px)_calc(var(--y)+var(--toast-swipe-y,0px))] [scale:calc(1-var(--toast-index)*0.05)] transition-[translate,scale,opacity,height] duration-400",
          "not-data-front:not-data-expanded:h-(--toast-front-height) data-expanded:[--y:calc(-1*(var(--toast-offset)+var(--toast-index)*12px))] data-expanded:[scale:1]",
          "data-starting-style:transition-none data-starting-style:data-front:[--y:100%] data-starting-style:not-data-front:opacity-0 data-ending-style:opacity-0 data-swiping:transition-none motion-reduce:transition-opacity",
        ],
        props.class,
      )}
    />
  );
}

export function ToastTitle(props: ComponentProps<typeof ToastTitlePrimitive>) {
  return (
    <ToastTitlePrimitive
      {...props}
      class={partClass("text-xs font-medium empty:hidden", props.class)}
    />
  );
}

export function ToastDescription(props: ComponentProps<typeof ToastDescriptionPrimitive>) {
  return (
    <ToastDescriptionPrimitive
      {...props}
      class={partClass("text-xs/relaxed text-muted-foreground empty:hidden", props.class)}
    />
  );
}

export function ToastAction(
  props: ComponentProps<typeof ToastActionPrimitive> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
  },
) {
  const rest = omit(props, "variant", "size");
  return (
    <ToastActionPrimitive
      {...rest}
      class={partClass(
        () => buttonVariants({ variant: props.variant ?? "default", size: props.size ?? "sm" }),
        props.class,
      )}
    />
  );
}

/** An × in the corner. Pass children for a labeled button instead. */
export function ToastClose(
  props: ComponentProps<typeof ToastClosePrimitive> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
  },
) {
  const rest = omit(props, "variant", "size");
  return (
    <ToastClosePrimitive
      aria-label={props.children ? undefined : "Close"}
      {...rest}
      class={partClass(
        () =>
          props.children
            ? buttonVariants({ variant: props.variant ?? "outline", size: props.size ?? "sm" })
            : buttonVariants({
                variant: "ghost",
                size: "icon-xs",
                class:
                  "absolute top-2 right-2 opacity-0 group-hover/toast:opacity-100 focus-visible:opacity-100",
              }),
        props.class,
      )}
    >
      {(props.children as JSX.Element) ?? (
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
      )}
    </ToastClosePrimitive>
  );
}

/** The 1.9 name for the close button. */
export const ToastCloseButton = ToastClose;
