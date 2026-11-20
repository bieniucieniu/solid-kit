import type { JSX } from "@solidjs/web";
import {
  Popover as PopoverPrimitive,
  PopoverArrow as PopoverArrowPrimitive,
  PopoverClose as PopoverClosePrimitive,
  PopoverContent as PopoverContentPrimitive,
  PopoverDescription as PopoverDescriptionPrimitive,
  PopoverTitle as PopoverTitlePrimitive,
  PopoverTrigger as PopoverTriggerPrimitive,
} from "@ui-sdk/solid/popover";
import { type ComponentProps, omit } from "solid-js";
import { type ButtonSize, type ButtonVariant, buttonVariants } from "./button";
import { cn, partClass, popupMotion } from "#kit/lib/utils";

export { createPopoverController } from "@ui-sdk/solid/popover";

/** Floating panel anchored to its trigger. Flips and shifts to stay in view. */
export function Popover(props: ComponentProps<typeof PopoverPrimitive>) {
  return <PopoverPrimitive {...props} />;
}

export function PopoverTrigger(props: ComponentProps<typeof PopoverTriggerPrimitive>) {
  return <PopoverTriggerPrimitive {...props} />;
}

/** Sits 4px off the trigger. */
export function PopoverContent(props: ComponentProps<typeof PopoverContentPrimitive>) {
  const rest = omit(props, "class");
  return (
    <PopoverContentPrimitive
      sideOffset={4}
      class={partClass(
        [
          "z-50 flex w-72 flex-col gap-4 rounded-lg bg-popover p-2.5 text-xs text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-hidden",
          popupMotion,
        ],
        props.class,
      )}
      {...rest}
    />
  );
}

export function PopoverHeader(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const rest = omit(props, "class");
  return (
    <div
      data-slot="popover-header"
      class={cn("flex flex-col gap-1 text-xs", props.class)}
      {...rest}
    />
  );
}

export function PopoverTitle(props: ComponentProps<typeof PopoverTitlePrimitive>) {
  const rest = omit(props, "class");
  return <PopoverTitlePrimitive class={partClass("text-sm font-medium", props.class)} {...rest} />;
}

/** The 1.9 name for the title. */
export const PopoverLabel = PopoverTitle;

export function PopoverDescription(props: ComponentProps<typeof PopoverDescriptionPrimitive>) {
  const rest = omit(props, "class");
  return (
    <PopoverDescriptionPrimitive
      class={partClass("text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function PopoverClose(
  props: ComponentProps<typeof PopoverClosePrimitive> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
  },
) {
  const rest = omit(props, "class", "variant", "size");
  return (
    <PopoverClosePrimitive
      class={partClass(
        () => buttonVariants({ variant: props.variant ?? "outline", size: props.size }),
        props.class,
      )}
      {...rest}
    />
  );
}

export function PopoverArrow(props: ComponentProps<typeof PopoverArrowPrimitive>) {
  const rest = omit(props, "class");
  return (
    <PopoverArrowPrimitive
      class={partClass(
        "size-2.5 rotate-45 bg-popover ring-1 ring-foreground/10 [clip-path:polygon(0_0,100%_0,0_100%)] data-[side=bottom]:-top-1.25 data-[side=left]:-right-1.25 data-[side=left]:[clip-path:polygon(100%_0,100%_100%,0_100%)] data-[side=right]:-left-1.25 data-[side=top]:-bottom-1.25 data-[side=top]:[clip-path:polygon(100%_0,100%_100%,0_100%)]",
        props.class,
      )}
      {...rest}
    />
  );
}
