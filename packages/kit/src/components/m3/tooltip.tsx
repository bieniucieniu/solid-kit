import type { JSX } from "@solidjs/web";
import {
  Popover as PopoverPrimitive,
  PopoverContent as PopoverContentPrimitive,
  PopoverTrigger as PopoverTriggerPrimitive,
} from "@ui-sdk/solid/popover";
import {
  Tooltip as TooltipPrimitive,
  TooltipContent as TooltipContentPrimitive,
  TooltipTrigger as TooltipTriggerPrimitive,
} from "@ui-sdk/solid/tooltip";
import { type ComponentProps, omit } from "solid-js";
import { cn, partClass } from "#/lib/utils";

const motion =
  "origin-(--transform-origin) transition-[opacity,scale] duration-150 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0";

/**
 * Plain tooltip: a short label on hover or focus (ui-sdk tooltip). It opens after 500ms; moving
 * to a nearby trigger while one is open skips the delay.
 */
export function Tooltip(props: ComponentProps<typeof TooltipPrimitive>) {
  const rest = omit(props, "delay");
  return <TooltipPrimitive delay={props.delay ?? 500} {...rest} />;
}

export function TooltipTrigger(props: ComponentProps<typeof TooltipTriggerPrimitive>) {
  return <TooltipTriggerPrimitive {...props} />;
}

export function TooltipContent(props: ComponentProps<typeof TooltipContentPrimitive>) {
  const rest = omit(props, "class");
  return (
    <TooltipContentPrimitive
      sideOffset={4}
      class={partClass(
        [
          "z-50 flex min-h-6 max-w-50 items-center rounded-extra-small bg-inverse-surface px-2 py-1 typescale-body-small text-inverse-on-surface",
          motion,
        ],
        props.class,
      )}
      {...rest}
    />
  );
}

/**
 * Rich tooltip: a subhead, supporting text, and optional actions. It is a popover that opens on
 * hover after 500ms, so it can hold interactive content and its trigger can be any button.
 */
export function RichTooltip(props: ComponentProps<typeof PopoverPrimitive>) {
  const rest = omit(props, "delay", "openOnHover", "modal");
  return (
    <PopoverPrimitive
      openOnHover={props.openOnHover ?? true}
      delay={props.delay ?? 500}
      modal={props.modal ?? false}
      {...rest}
    />
  );
}

export function RichTooltipTrigger(props: ComponentProps<typeof PopoverTriggerPrimitive>) {
  return <PopoverTriggerPrimitive {...props} />;
}

export function RichTooltipContent(props: ComponentProps<typeof PopoverContentPrimitive>) {
  const rest = omit(props, "class");
  return (
    <PopoverContentPrimitive
      sideOffset={4}
      class={partClass(
        [
          "z-50 flex max-w-80 flex-col gap-1 rounded-medium bg-surface-container px-4 pt-3 pb-2 text-on-surface-variant shadow-level-2 outline-none",
          motion,
        ],
        props.class,
      )}
      {...rest}
    />
  );
}

export function RichTooltipSubhead(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const rest = omit(props, "class");
  return (
    <div
      data-slot="rich-tooltip-subhead"
      class={cn("typescale-title-small text-on-surface-variant", props.class)}
      {...rest}
    />
  );
}

export function RichTooltipSupportingText(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const rest = omit(props, "class");
  return (
    <div
      data-slot="rich-tooltip-supporting-text"
      class={cn("typescale-body-medium text-on-surface-variant", props.class)}
      {...rest}
    />
  );
}

/** Text buttons, aligned with the text's left edge. */
export function RichTooltipActions(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const rest = omit(props, "class");
  return (
    <div
      data-slot="rich-tooltip-actions"
      class={cn("-ml-3 flex items-center gap-2 pt-2", props.class)}
      {...rest}
    />
  );
}
