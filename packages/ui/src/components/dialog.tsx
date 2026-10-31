import DialogPrimitive, {
  type CloseProps,
  type ContentProps,
  type DescriptionProps,
  type DynamicProps,
  type LabelProps,
  type OverlayProps,
  type RootProps,
} from "@corvu/dialog";
import { splitProps } from "solid-js";
import { cn } from "@/lib/utils";

function DialogRoot(props: RootProps) {
  return <DialogPrimitive {...props} />;
}

export function DialogOverlay(props: DynamicProps<"div", OverlayProps>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <DialogPrimitive.Overlay
      ref={props.ref}
      class={cn("fixed inset-0 z-50 bg-black/80", props.class)}
      {...rest}
    />
  );
}

export function DialogContent(props: DynamicProps<"div", ContentProps>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <DialogPrimitive.Content
      ref={props.ref}
      class={cn(
        "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-xs/relaxed text-popover-foreground ring-1 ring-foreground/10 outline-none sm:max-w-sm",
        props.class,
      )}
      {...rest}
    />
  );
}

export function DialogLabel(props: DynamicProps<"h2", LabelProps>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <DialogPrimitive.Label
      ref={props.ref}
      class={cn("text-sm font-medium", props.class)}
      {...rest}
    />
  );
}

export function DialogDescription(props: DynamicProps<"p", DescriptionProps>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <DialogPrimitive.Description
      ref={props.ref}
      class={cn("text-xs/relaxed text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function DialogClose(props: DynamicProps<"button", CloseProps>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <DialogPrimitive.Close
      ref={props.ref}
      class={cn(
        "inline-flex h-7 items-center justify-center rounded-md px-2 text-xs/relaxed text-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:outline-none",
        props.class,
      )}
      {...rest}
    />
  );
}

export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogPortal = DialogPrimitive.Portal;

export const Dialog = Object.assign(DialogRoot, {
  Trigger: DialogTrigger,
  Portal: DialogPortal,
  Overlay: DialogOverlay,
  Content: DialogContent,
  Label: DialogLabel,
  Description: DialogDescription,
  Close: DialogClose,
  useContext: DialogPrimitive.useContext,
});
