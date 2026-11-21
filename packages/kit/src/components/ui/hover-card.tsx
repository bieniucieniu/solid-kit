import {
  HoverCard as HoverCardPrimitive,
  HoverCardArrow as HoverCardArrowPrimitive,
  HoverCardContent as HoverCardContentPrimitive,
  HoverCardTrigger as HoverCardTriggerPrimitive,
} from "@ui-sdk/solid/hover-card";
import { type ComponentProps } from "solid-js";
import { partClass, popupMotion } from "#kit/lib/utils";

export function HoverCard(props: ComponentProps<typeof HoverCardPrimitive>) {
  return <HoverCardPrimitive {...props} />;
}

/** A link (`<a>`): give it an `href`. Pressing it follows the link. */
export function HoverCardTrigger(props: ComponentProps<typeof HoverCardTriggerPrimitive>) {
  return <HoverCardTriggerPrimitive {...props} />;
}

export function HoverCardContent(props: ComponentProps<typeof HoverCardContentPrimitive>) {
  return (
    <HoverCardContentPrimitive
      sideOffset={4}
      {...props}
      class={partClass(
        [
          "z-50 w-72 rounded-lg bg-popover p-2.5 text-xs/relaxed text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-hidden",
          popupMotion,
        ],
        props.class,
      )}
    />
  );
}

export function HoverCardArrow(props: ComponentProps<typeof HoverCardArrowPrimitive>) {
  return (
    <HoverCardArrowPrimitive
      {...props}
      class={partClass(
        "size-2.5 rotate-45 bg-popover data-[side=bottom]:-top-1.25 data-[side=left]:-right-1.25 data-[side=right]:-left-1.25 data-[side=top]:-bottom-1.25",
        props.class,
      )}
    />
  );
}
