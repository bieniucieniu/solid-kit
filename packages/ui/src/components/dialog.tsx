import DialogPrimitive, {
  type CloseProps,
  type ContentProps,
  type DescriptionProps,
  type DynamicProps,
  type LabelProps,
  type OverlayProps,
  type RootProps,
} from "@corvu/dialog";
import { type JSX, Show, splitProps } from "solid-js";
import { type ButtonSize, type ButtonVariant, buttonVariants } from "./button";
import { cn } from "@/lib/utils";

function DialogRoot(props: RootProps) {
  return <DialogPrimitive {...props} />;
}

export function DialogOverlay(props: DynamicProps<"div", OverlayProps>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <DialogPrimitive.Overlay
      ref={props.ref}
      data-slot="dialog-overlay"
      class={cn(
        "fixed inset-0 isolate z-50 bg-black/80 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        props.class,
      )}
      {...rest}
    />
  );
}

export function DialogContent(
  props: DynamicProps<"div", ContentProps> & { showCloseButton?: boolean },
) {
  const [, rest] = splitProps(props, ["class", "ref", "children", "showCloseButton"]);
  return (
    <DialogPrimitive.Content
      ref={props.ref}
      data-slot="dialog-content"
      class={cn(
        "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-xs/relaxed text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        props.class,
      )}
      {...rest}
    >
      {props.children}
      <Show when={props.showCloseButton ?? true}>
        <DialogPrimitive.Close
          data-slot="dialog-close"
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
          <span class="sr-only">Close</span>
        </DialogPrimitive.Close>
      </Show>
    </DialogPrimitive.Content>
  );
}

export function DialogHeader(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      data-slot="dialog-header"
      class={cn("flex flex-col gap-1", props.class)}
      {...rest}
    />
  );
}

export function DialogFooter(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      data-slot="dialog-footer"
      class={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", props.class)}
      {...rest}
    />
  );
}

export function DialogLabel(props: DynamicProps<"h2", LabelProps>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <DialogPrimitive.Label
      ref={props.ref}
      data-slot="dialog-title"
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
      data-slot="dialog-description"
      class={cn(
        "text-xs/relaxed text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        props.class,
      )}
      {...rest}
    />
  );
}

export function DialogClose(
  props: DynamicProps<"button", CloseProps> & { variant?: ButtonVariant; size?: ButtonSize },
) {
  const [, rest] = splitProps(props, ["class", "ref", "variant", "size"]);
  return (
    <DialogPrimitive.Close
      ref={props.ref}
      data-slot="dialog-close"
      class={buttonVariants({
        variant: props.variant ?? "outline",
        size: props.size,
        class: props.class,
      })}
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
  Header: DialogHeader,
  Footer: DialogFooter,
  Label: DialogLabel,
  Description: DialogDescription,
  Close: DialogClose,
  useContext: DialogPrimitive.useContext,
});
