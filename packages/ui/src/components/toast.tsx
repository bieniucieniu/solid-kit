import { Toast as ToastPrimitive, toaster, useToastContext } from "@kobalte/core/toast";
import { type ComponentProps, splitProps } from "solid-js";
import { type ButtonSize, type ButtonVariant, buttonVariants } from "./button";
import { cn } from "@/lib/utils";

type ToastRootProps = ComponentProps<typeof ToastPrimitive>;
type ToastRegionProps = ComponentProps<typeof ToastPrimitive.Region>;
type ToastListProps = ComponentProps<typeof ToastPrimitive.List>;
type ToastTitleProps = ComponentProps<typeof ToastPrimitive.Title>;
type ToastDescriptionProps = ComponentProps<typeof ToastPrimitive.Description>;
type ToastCloseButtonProps = ComponentProps<typeof ToastPrimitive.CloseButton> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};
type ToastProgressTrackProps = ComponentProps<typeof ToastPrimitive.ProgressTrack>;
type ToastProgressFillProps = ComponentProps<typeof ToastPrimitive.ProgressFill>;

function ToastRoot(props: ToastRootProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ToastPrimitive
      ref={props.ref}
      class={cn(
        "group/toast pointer-events-auto relative z-50 flex w-full flex-col gap-1.5 rounded-lg border border-border bg-popover p-4 text-xs/relaxed text-popover-foreground shadow-lg duration-200 data-opened:animate-in data-opened:fade-in-0 data-opened:slide-in-from-bottom-full data-closed:animate-out data-closed:fade-out-80 data-closed:slide-out-to-right-full data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-transform data-[swipe=end]:animate-out data-[swipe=end]:slide-out-to-right-full data-[swipe=move]:translate-x-(--kb-toast-swipe-move-x) data-[swipe=move]:transition-none",
        props.class,
      )}
      {...rest}
    />
  );
}

export function ToastRegion(props: ToastRegionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ToastPrimitive.Region
      ref={props.ref}
      class={cn(
        "fixed right-0 bottom-0 z-50 flex max-h-screen w-full flex-col gap-2 p-4 outline-none sm:max-w-[356px]",
        props.class,
      )}
      {...rest}
    />
  );
}

export function ToastList(props: ToastListProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ToastPrimitive.List
      ref={props.ref}
      class={cn("flex w-full flex-col gap-2 outline-none", props.class)}
      {...rest}
    />
  );
}

export function ToastTitle(props: ToastTitleProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ToastPrimitive.Title
      ref={props.ref}
      class={cn("text-xs font-medium", props.class)}
      {...rest}
    />
  );
}

export function ToastDescription(props: ToastDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ToastPrimitive.Description
      ref={props.ref}
      class={cn("text-xs/relaxed text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function ToastCloseButton(props: ToastCloseButtonProps) {
  const [, rest] = splitProps(props, ["class", "ref", "variant", "size"]);
  return (
    <ToastPrimitive.CloseButton
      ref={props.ref}
      class={buttonVariants({
        variant: props.variant ?? "outline",
        size: props.size ?? "sm",
        class: props.class,
      })}
      {...rest}
    />
  );
}

export function ToastProgressTrack(props: ToastProgressTrackProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ToastPrimitive.ProgressTrack
      ref={props.ref}
      class={cn("mt-2 h-1 w-full overflow-hidden rounded-full bg-muted", props.class)}
      {...rest}
    />
  );
}

export function ToastProgressFill(props: ToastProgressFillProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ToastPrimitive.ProgressFill
      ref={props.ref}
      class={cn("h-full w-(--kb-toast-progress-fill-width) bg-primary", props.class)}
      {...rest}
    />
  );
}

export { toaster };

export const Toast = Object.assign(ToastRoot, {
  Root: ToastRoot,
  Region: ToastRegion,
  List: ToastList,
  Title: ToastTitle,
  Description: ToastDescription,
  CloseButton: ToastCloseButton,
  ProgressTrack: ToastProgressTrack,
  ProgressFill: ToastProgressFill,
  useContext: useToastContext,
});
