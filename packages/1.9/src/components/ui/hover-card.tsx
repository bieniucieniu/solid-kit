import { HoverCard as HoverCardPrimitive, useHoverCardContext } from "@kobalte/core/hover-card";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type HoverCardProps = ComponentProps<typeof HoverCardPrimitive>;
type HoverCardContentProps = ComponentProps<typeof HoverCardPrimitive.Content>;

export function HoverCard(props: HoverCardProps) {
  return <HoverCardPrimitive gutter={4} {...props} />;
}

export function HoverCardContent(props: HoverCardContentProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <HoverCardPrimitive.Content
      ref={props.ref}
      class={cn(
        "z-50 w-72 origin-(--kb-hovercard-content-transform-origin) rounded-lg bg-popover p-2.5 text-xs/relaxed text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 outline-hidden data-expanded:animate-in data-expanded:fade-in-0 data-expanded:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        props.class,
      )}
      {...rest}
    />
  );
}

export const HoverCardTrigger = HoverCardPrimitive.Trigger;
export const HoverCardPortal = HoverCardPrimitive.Portal;

export { useHoverCardContext };
