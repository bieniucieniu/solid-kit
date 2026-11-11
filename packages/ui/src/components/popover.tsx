import PopoverPrimitive, {
  type CloseProps,
  type ContentProps,
  type DescriptionProps,
  type DynamicProps,
  type LabelProps,
  type RootProps,
} from "@corvu/popover";
import { type JSX, splitProps } from "solid-js";
import { type ButtonSize, type ButtonVariant, buttonVariants } from "./button";
import { cn } from "@/lib/utils";

/** Floating panel anchored to its trigger. Sits 4px off the anchor, flips and shifts to stay in view. */
export function Popover(props: RootProps) {
  return <PopoverPrimitive floatingOptions={{ offset: 4, flip: true, shift: true }} {...props} />;
}

export function PopoverContent(props: DynamicProps<"div", ContentProps>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <PopoverPrimitive.Content
      ref={props.ref}
      data-slot="popover-content"
      class={cn(
        "z-50 flex w-72 flex-col gap-4 rounded-lg bg-popover p-2.5 text-xs text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 outline-hidden data-[placement^=bottom]:slide-in-from-top-2 data-[placement^=left]:slide-in-from-right-2 data-[placement^=right]:slide-in-from-left-2 data-[placement^=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        props.class,
      )}
      {...rest}
    />
  );
}

export function PopoverHeader(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      data-slot="popover-header"
      class={cn("flex flex-col gap-1 text-xs", props.class)}
      {...rest}
    />
  );
}

export function PopoverLabel(props: DynamicProps<"h2", LabelProps>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <PopoverPrimitive.Label
      ref={props.ref}
      data-slot="popover-title"
      class={cn("text-sm font-medium", props.class)}
      {...rest}
    />
  );
}

export function PopoverDescription(props: DynamicProps<"p", DescriptionProps>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <PopoverPrimitive.Description
      ref={props.ref}
      data-slot="popover-description"
      class={cn("text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function PopoverClose(
  props: DynamicProps<"button", CloseProps> & { variant?: ButtonVariant; size?: ButtonSize },
) {
  const [, rest] = splitProps(props, ["class", "ref", "variant", "size"]);
  return (
    <PopoverPrimitive.Close
      ref={props.ref}
      data-slot="popover-close"
      class={buttonVariants({
        variant: props.variant ?? "outline",
        size: props.size,
        class: props.class,
      })}
      {...rest}
    />
  );
}

export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverAnchor = PopoverPrimitive.Anchor;
export const PopoverPortal = PopoverPrimitive.Portal;
export const PopoverArrow = PopoverPrimitive.Arrow;

export const usePopoverContext = PopoverPrimitive.useContext;
