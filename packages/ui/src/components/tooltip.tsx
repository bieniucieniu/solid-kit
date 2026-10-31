import TooltipPrimitive, {
  type ArrowProps,
  type ContentProps,
  type DynamicProps,
  type RootProps,
} from "@corvu/tooltip";
import { splitProps } from "solid-js";
import { cn } from "@/lib/utils";

function TooltipRoot(props: RootProps) {
  return <TooltipPrimitive {...props} />;
}

export function TooltipContent(props: DynamicProps<"div", ContentProps>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <TooltipPrimitive.Content
      ref={props.ref}
      class={cn(
        "z-50 inline-flex items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs text-background",
        props.class,
      )}
      {...rest}
    />
  );
}

export function TooltipArrow(props: DynamicProps<"div", ArrowProps>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <TooltipPrimitive.Arrow ref={props.ref} class={cn("text-foreground", props.class)} {...rest} />
  );
}

export const TooltipAnchor = TooltipPrimitive.Anchor;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipPortal = TooltipPrimitive.Portal;

export const Tooltip = Object.assign(TooltipRoot, {
  Anchor: TooltipAnchor,
  Trigger: TooltipTrigger,
  Portal: TooltipPortal,
  Content: TooltipContent,
  Arrow: TooltipArrow,
  useContext: TooltipPrimitive.useContext,
});
