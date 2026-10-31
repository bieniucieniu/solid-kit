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
        "z-50 w-72 rounded-lg border border-border bg-background p-4 text-foreground shadow-lg outline-none",
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
