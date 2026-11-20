import { Slider as SliderPrimitive, useSliderContext } from "@kobalte/core/slider";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type SliderProps = ComponentProps<typeof SliderPrimitive>;
type SliderLabelProps = ComponentProps<typeof SliderPrimitive.Label>;
type SliderValueLabelProps = ComponentProps<typeof SliderPrimitive.ValueLabel>;
type SliderDescriptionProps = ComponentProps<typeof SliderPrimitive.Description>;
type SliderErrorMessageProps = ComponentProps<typeof SliderPrimitive.ErrorMessage>;
type SliderTrackProps = ComponentProps<typeof SliderPrimitive.Track>;
type SliderFillProps = ComponentProps<typeof SliderPrimitive.Fill>;
type SliderThumbProps = ComponentProps<typeof SliderPrimitive.Thumb>;

export function Slider(props: SliderProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SliderPrimitive
      ref={props.ref}
      data-slot="slider"
      class={cn(
        "group/slider flex w-full touch-none flex-col gap-2 select-none data-[orientation=vertical]:h-60 data-[orientation=vertical]:w-fit",
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
      data-slot="slider-label"
      class={cn("typescale-title-small text-on-surface", props.class)}
      {...rest}
    />
  );
}

export function SliderValueLabel(props: SliderValueLabelProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SliderPrimitive.ValueLabel
      ref={props.ref}
      data-slot="slider-value-label"
      class={cn("typescale-label-large text-on-surface-variant tabular-nums", props.class)}
      {...rest}
    />
  );
}

export function SliderDescription(props: SliderDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SliderPrimitive.Description
      ref={props.ref}
      data-slot="slider-description"
      class={cn("typescale-body-small text-on-surface-variant", props.class)}
      {...rest}
    />
  );
}

export function SliderErrorMessage(props: SliderErrorMessageProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SliderPrimitive.ErrorMessage
      ref={props.ref}
      data-slot="slider-error-message"
      class={cn("typescale-body-small text-error", props.class)}
      {...rest}
    />
  );
}

/**
 * The inactive track (16px, secondary-container) with a stop dot at the far end. The handle cuts a
 * 6px gap into both tracks with a surface-colored ring; set --slider-gap-color on a different
 * background.
 */
export function SliderTrack(props: SliderTrackProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  const context = useSliderContext();
  return (
    <SliderPrimitive.Track
      // Kobalte's Track registers itself through its own ref, and a passed ref replaces it.
      // Without the registration, pointer down on the track throws and the thumbs never drag.
      ref={(el: HTMLDivElement) => {
        context.registerTrack(el);
        (props.ref as ((el: HTMLDivElement) => void) | undefined)?.(el);
      }}
      data-slot="slider-track"
      class={cn(
        "relative my-3.5 grow cursor-pointer rounded-full bg-secondary-container after:absolute after:size-1 after:rounded-full after:bg-on-secondary-container data-[orientation=horizontal]:h-4 data-[orientation=horizontal]:w-full data-[orientation=horizontal]:after:top-1/2 data-[orientation=horizontal]:after:right-1.5 data-[orientation=horizontal]:after:-translate-y-1/2 data-[orientation=vertical]:mx-3.5 data-[orientation=vertical]:my-0 data-[orientation=vertical]:h-full data-[orientation=vertical]:w-4 data-[orientation=vertical]:after:top-1.5 data-[orientation=vertical]:after:left-1/2 data-[orientation=vertical]:after:-translate-x-1/2 group-data-disabled/slider:cursor-not-allowed group-data-disabled/slider:bg-on-surface/12 group-data-disabled/slider:after:bg-on-surface/38",
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
      data-slot="slider-fill"
      class={cn(
        "absolute rounded-full bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full group-data-disabled/slider:bg-on-surface/38",
        props.class,
      )}
      {...rest}
    />
  );
}

/** A 4x44 bar. It narrows to 2px while dragged. Put SliderInput inside. */
export function SliderThumb(props: SliderThumbProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SliderPrimitive.Thumb
      ref={props.ref}
      data-slot="slider-thumb"
      class={cn(
        "top-1/2 block h-11 w-1 -translate-y-1/2 cursor-grab rounded-full bg-primary shadow-[0_0_0_6px_var(--slider-gap-color,var(--md-sys-color-surface))] outline-none motion-fast focus-visible:outline-3 focus-visible:outline-offset-8 focus-visible:outline-secondary active:w-0.5 active:cursor-grabbing data-[orientation=vertical]:top-auto data-[orientation=vertical]:left-1/2 data-[orientation=vertical]:h-1 data-[orientation=vertical]:w-11 data-[orientation=vertical]:translate-y-0 data-[orientation=vertical]:-translate-x-1/2 group-data-disabled/slider:bg-on-surface/38",
        props.class,
      )}
      {...rest}
    />
  );
}

export const SliderInput = SliderPrimitive.Input;
