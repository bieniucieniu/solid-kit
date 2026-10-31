import { Slider as SliderPrimitive } from "@kobalte/core/slider";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type SliderRootProps = ComponentProps<typeof SliderPrimitive>;
type SliderLabelProps = ComponentProps<typeof SliderPrimitive.Label>;
type SliderValueLabelProps = ComponentProps<typeof SliderPrimitive.ValueLabel>;
type SliderDescriptionProps = ComponentProps<typeof SliderPrimitive.Description>;
type SliderErrorMessageProps = ComponentProps<typeof SliderPrimitive.ErrorMessage>;
type SliderTrackProps = ComponentProps<typeof SliderPrimitive.Track>;
type SliderFillProps = ComponentProps<typeof SliderPrimitive.Fill>;
type SliderThumbProps = ComponentProps<typeof SliderPrimitive.Thumb>;

function SliderRoot(props: SliderRootProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SliderPrimitive
      ref={props.ref}
      class={cn(
        "flex w-full touch-none flex-col gap-2 data-disabled:opacity-50 data-[orientation=vertical]:h-40 data-[orientation=vertical]:w-fit",
        props.class,
      )}
      {...rest}
    />
  );
}

export function SliderLabel(props: SliderLabelProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SliderPrimitive.Label
      ref={props.ref}
      class={cn("text-xs/relaxed font-medium text-foreground", props.class)}
      {...rest}
    />
  );
}

export function SliderValueLabel(props: SliderValueLabelProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SliderPrimitive.ValueLabel
      ref={props.ref}
      class={cn("text-xs/relaxed text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function SliderDescription(props: SliderDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SliderPrimitive.Description
      ref={props.ref}
      class={cn("text-xs/relaxed text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function SliderErrorMessage(props: SliderErrorMessageProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SliderPrimitive.ErrorMessage
      ref={props.ref}
      class={cn("text-xs/relaxed text-destructive", props.class)}
      {...rest}
    />
  );
}

export function SliderTrack(props: SliderTrackProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SliderPrimitive.Track
      ref={props.ref}
      class={cn(
        "relative rounded-md bg-muted data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1",
        props.class,
      )}
      {...rest}
    />
  );
}

export function SliderFill(props: SliderFillProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SliderPrimitive.Fill
      ref={props.ref}
      class={cn(
        "absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
        props.class,
      )}
      {...rest}
    />
  );
}

export function SliderThumb(props: SliderThumbProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SliderPrimitive.Thumb
      ref={props.ref}
      class={cn(
        "relative block size-3 rounded-md border border-ring bg-white ring-ring/30 hover:ring-2 focus-visible:ring-2 focus-visible:outline-none",
        props.class,
      )}
      {...rest}
    />
  );
}

export const SliderInput = SliderPrimitive.Input;

export const Slider = Object.assign(SliderRoot, {
  Label: SliderLabel,
  ValueLabel: SliderValueLabel,
  Description: SliderDescription,
  ErrorMessage: SliderErrorMessage,
  Track: SliderTrack,
  Fill: SliderFill,
  Thumb: SliderThumb,
  Input: SliderInput,
});
