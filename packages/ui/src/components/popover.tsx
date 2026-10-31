import { Popover as PopoverPrimitive, usePopoverContext } from "@kobalte/core/popover";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type PopoverRootProps = ComponentProps<typeof PopoverPrimitive>;
type PopoverContentProps = ComponentProps<typeof PopoverPrimitive.Content>;
type PopoverTitleProps = ComponentProps<typeof PopoverPrimitive.Title>;
type PopoverDescriptionProps = ComponentProps<typeof PopoverPrimitive.Description>;
type PopoverCloseButtonProps = ComponentProps<typeof PopoverPrimitive.CloseButton>;

function PopoverRoot(props: PopoverRootProps) {
  return <PopoverPrimitive {...props} />;
}

export function PopoverContent(props: PopoverContentProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <PopoverPrimitive.Content
      ref={props.ref}
      class={cn(
        "z-50 w-72 rounded-lg border border-border bg-background p-4 text-foreground shadow-lg outline-none",
        props.class,
      )}
      {...rest}
    />
  );
}

export function PopoverTitle(props: PopoverTitleProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <PopoverPrimitive.Title
      ref={props.ref}
      class={cn("text-lg font-medium text-foreground", props.class)}
      {...rest}
    />
  );
}

export function PopoverDescription(props: PopoverDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <PopoverPrimitive.Description
      ref={props.ref}
      class={cn("text-sm text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function PopoverCloseButton(props: PopoverCloseButtonProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <PopoverPrimitive.CloseButton
      ref={props.ref}
      class={cn(
        "inline-flex items-center justify-center rounded-lg px-3 py-1.5 text-sm text-foreground ring-ring hover:bg-muted focus-visible:ring-2 focus-visible:outline-none data-disabled:opacity-50",
        props.class,
      )}
      {...rest}
    />
  );
}

export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverAnchor = PopoverPrimitive.Anchor;
export const PopoverPortal = PopoverPrimitive.Portal;
export const PopoverArrow = PopoverPrimitive.Arrow;

export const Popover = Object.assign(PopoverRoot, {
  Trigger: PopoverTrigger,
  Anchor: PopoverAnchor,
  Portal: PopoverPortal,
  Content: PopoverContent,
  Arrow: PopoverArrow,
  Title: PopoverTitle,
  Description: PopoverDescription,
  CloseButton: PopoverCloseButton,
  useContext: usePopoverContext,
});
