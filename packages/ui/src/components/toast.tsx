import { Toast as ToastPrimitive, toaster, useToastContext } from "@kobalte/core/toast";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type ToastRootProps = ComponentProps<typeof ToastPrimitive>;
type ToastRegionProps = ComponentProps<typeof ToastPrimitive.Region>;
type ToastListProps = ComponentProps<typeof ToastPrimitive.List>;
type ToastTitleProps = ComponentProps<typeof ToastPrimitive.Title>;
type ToastDescriptionProps = ComponentProps<typeof ToastPrimitive.Description>;
type ToastCloseButtonProps = ComponentProps<typeof ToastPrimitive.CloseButton>;
type ToastProgressTrackProps = ComponentProps<typeof ToastPrimitive.ProgressTrack>;
type ToastProgressFillProps = ComponentProps<typeof ToastPrimitive.ProgressFill>;

function ToastRoot(props: ToastRootProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ToastPrimitive
      ref={props.ref}
      class={cn(
        "z-50 flex w-full flex-col gap-1 rounded-lg border border-border bg-background p-4 text-foreground shadow-lg",
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
        "fixed right-0 bottom-0 z-50 flex max-h-screen w-full max-w-sm flex-col gap-2 p-4 outline-none",
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
      class={cn("text-sm font-medium text-foreground", props.class)}
      {...rest}
    />
  );
}

export function ToastDescription(props: ToastDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ToastPrimitive.Description
      ref={props.ref}
      class={cn("text-sm text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function ToastCloseButton(props: ToastCloseButtonProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ToastPrimitive.CloseButton
      ref={props.ref}
      class={cn(
        "inline-flex items-center justify-center rounded-lg px-3 py-1.5 text-sm text-foreground ring-ring hover:bg-muted focus-visible:ring-2 focus-visible:outline-none data-disabled:opacity-50",
        props.class,
      )}
      {...rest}
    />
  );
}

export function ToastProgressTrack(props: ToastProgressTrackProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ToastPrimitive.ProgressTrack
      ref={props.ref}
      class={cn("mt-2 h-1 w-full overflow-hidden rounded-lg bg-muted", props.class)}
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
