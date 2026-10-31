import { HoverCard as HoverCardPrimitive, useHoverCardContext } from "@kobalte/core/hover-card";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type HoverCardRootProps = ComponentProps<typeof HoverCardPrimitive>;
type HoverCardContentProps = ComponentProps<typeof HoverCardPrimitive.Content>;

function HoverCardRoot(props: HoverCardRootProps) {
  return <HoverCardPrimitive {...props} />;
}

export function HoverCardContent(props: HoverCardContentProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <HoverCardPrimitive.Content
      ref={props.ref}
      class={cn(
        "z-50 w-72 rounded-lg bg-popover p-2.5 text-xs/relaxed text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-none",
        props.class,
      )}
      {...rest}
    />
  );
}

export const HoverCardTrigger = HoverCardPrimitive.Trigger;
export const HoverCardPortal = HoverCardPrimitive.Portal;
export const HoverCardArrow = HoverCardPrimitive.Arrow;

export const HoverCard = Object.assign(HoverCardRoot, {
  Trigger: HoverCardTrigger,
  Portal: HoverCardPortal,
  Content: HoverCardContent,
  Arrow: HoverCardArrow,
  useContext: useHoverCardContext,
});
