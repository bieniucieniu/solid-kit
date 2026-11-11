import { HoverCard as HoverCardPrimitive } from "@kobalte/core/hover-card";
import { Tooltip as TooltipPrimitive, useTooltipContext } from "@kobalte/core/tooltip";
import { type ComponentProps, type JSX, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type TooltipProps = ComponentProps<typeof TooltipPrimitive>;
type TooltipContentProps = ComponentProps<typeof TooltipPrimitive.Content>;
type RichTooltipProps = ComponentProps<typeof HoverCardPrimitive>;
type RichTooltipContentProps = ComponentProps<typeof HoverCardPrimitive.Content>;

/** Plain tooltip: a short label on hover or focus. */
export function Tooltip(props: TooltipProps) {
  return <TooltipPrimitive gutter={4} openDelay={500} {...props} />;
}

export function TooltipContent(props: TooltipContentProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <TooltipPrimitive.Content
      ref={props.ref}
      data-slot="tooltip-content"
      class={cn(
        "z-50 flex min-h-6 max-w-50 origin-(--kb-tooltip-content-transform-origin) items-center rounded-extra-small bg-inverse-surface px-2 py-1 typescale-body-small text-inverse-on-surface data-expanded:animate-in data-expanded:fade-in-0 data-expanded:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        props.class,
      )}
      {...rest}
    />
  );
}

/**
 * Rich tooltip: a subhead, supporting text, and optional actions. Opens on hover (Kobalte hover
 * card), so it can hold interactive content.
 */
export function RichTooltip(props: RichTooltipProps) {
  return <HoverCardPrimitive gutter={4} openDelay={500} {...props} />;
}

export function RichTooltipContent(props: RichTooltipContentProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <HoverCardPrimitive.Content
      ref={props.ref}
      data-slot="rich-tooltip-content"
      class={cn(
        "z-50 flex max-w-80 origin-(--kb-hovercard-content-transform-origin) flex-col gap-1 rounded-medium bg-surface-container px-4 pt-3 pb-2 text-on-surface-variant shadow-level-2 outline-none data-expanded:animate-in data-expanded:fade-in-0 data-expanded:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        props.class,
      )}
      {...rest}
    />
  );
}

export function RichTooltipSubhead(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      data-slot="rich-tooltip-subhead"
      class={cn("typescale-title-small text-on-surface-variant", props.class)}
      {...rest}
    />
  );
}

export function RichTooltipSupportingText(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      data-slot="rich-tooltip-supporting-text"
      class={cn("typescale-body-medium text-on-surface-variant", props.class)}
      {...rest}
    />
  );
}

/** Text buttons, aligned with the text's left edge. */
export function RichTooltipActions(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      data-slot="rich-tooltip-actions"
      class={cn("-ml-3 flex items-center gap-2 pt-2", props.class)}
      {...rest}
    />
  );
}

export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipPortal = TooltipPrimitive.Portal;
export const RichTooltipTrigger = HoverCardPrimitive.Trigger;
export const RichTooltipPortal = HoverCardPrimitive.Portal;
export { useTooltipContext };
