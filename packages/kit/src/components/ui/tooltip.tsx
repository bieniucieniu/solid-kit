import {
  Tooltip as TooltipPrimitive,
  TooltipArrow as TooltipArrowPrimitive,
  TooltipContent as TooltipContentPrimitive,
  TooltipTrigger as TooltipTriggerPrimitive,
} from "@ui-sdk/solid/tooltip";
import { type ComponentProps } from "solid-js";
import { partClass, popupMotion } from "#kit/lib/utils";

export { TooltipShortcut, createTooltipController } from "@ui-sdk/solid/tooltip";

export function Tooltip(props: ComponentProps<typeof TooltipPrimitive>) {
  return <TooltipPrimitive {...props} />;
}

export function TooltipTrigger(props: ComponentProps<typeof TooltipTriggerPrimitive>) {
  return <TooltipTriggerPrimitive {...props} />;
}

export function TooltipContent(props: ComponentProps<typeof TooltipContentPrimitive>) {
  return (
    <TooltipContentPrimitive
      sideOffset={4}
      {...props}
      class={partClass(
        [
          "z-50 inline-flex w-fit max-w-xs items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs text-background has-data-[slot=kbd]:pr-1.5 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm",
          popupMotion,
        ],
        props.class,
      )}
    />
  );
}

export function TooltipArrow(props: ComponentProps<typeof TooltipArrowPrimitive>) {
  return (
    <TooltipArrowPrimitive
      {...props}
      class={partClass(
        "size-2 rotate-45 bg-foreground data-[side=bottom]:-top-1 data-[side=left]:-right-1 data-[side=right]:-left-1 data-[side=top]:-bottom-1",
        props.class,
      )}
    />
  );
}
