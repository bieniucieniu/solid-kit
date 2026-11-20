import {
  Slider as SliderPrimitive,
  SliderControl as SliderControlPrimitive,
  SliderIndicator as SliderIndicatorPrimitive,
  SliderThumb as SliderThumbPrimitive,
  SliderTrack as SliderTrackPrimitive,
  SliderValue as SliderValuePrimitive,
} from "@ui-sdk/solid/slider";
import { type ComponentProps, omit } from "solid-js";
import { partClass } from "#kit/lib/utils";

/**
 * Compose it as `Slider > SliderControl > SliderTrack > (SliderIndicator, SliderThumb)`. Name a
 * single thumb with `aria-label`, or each thumb of a range with its own.
 */
export function Slider(props: ComponentProps<typeof SliderPrimitive>) {
  const rest = omit(props, "class");
  return (
    <SliderPrimitive
      class={partClass(
        "flex w-full touch-none flex-col gap-2 data-disabled:opacity-50 data-[orientation=vertical]:h-40 data-[orientation=vertical]:w-fit",
        props.class,
      )}
      {...rest}
    />
  );
}

/** Where presses land: a taller box around the thin track. */
export function SliderControl(props: ComponentProps<typeof SliderControlPrimitive>) {
  const rest = omit(props, "class");
  return (
    <SliderControlPrimitive
      class={partClass(
        "flex w-full items-center select-none data-[orientation=horizontal]:h-4 data-[orientation=vertical]:h-full data-[orientation=vertical]:w-4 data-[orientation=vertical]:justify-center",
        props.class,
      )}
      {...rest}
    />
  );
}

export function SliderTrack(props: ComponentProps<typeof SliderTrackPrimitive>) {
  const rest = omit(props, "class");
  return (
    <SliderTrackPrimitive
      class={partClass(
        "relative grow rounded-md bg-muted select-none data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1",
        props.class,
      )}
      {...rest}
    />
  );
}

/** Fills the track up to the thumb, or between a range's thumbs. */
export function SliderIndicator(props: ComponentProps<typeof SliderIndicatorPrimitive>) {
  const rest = omit(props, "class");
  return (
    <SliderIndicatorPrimitive
      class={partClass(
        "rounded-md bg-primary select-none data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full data-disabled:bg-muted-foreground",
        props.class,
      )}
      {...rest}
    />
  );
}

/** The 1.9 name for the indicator. */
export const SliderFill = SliderIndicator;

export function SliderThumb(props: ComponentProps<typeof SliderThumbPrimitive>) {
  const rest = omit(props, "class");
  return (
    <SliderThumbPrimitive
      class={partClass(
        "block size-3 shrink-0 rounded-md border border-ring bg-white ring-ring/30 transition-[color,box-shadow] select-none after:absolute after:-inset-2 hover:ring-2 has-[:focus-visible]:ring-2 data-dragging:ring-2 data-disabled:pointer-events-none data-disabled:opacity-50",
        props.class,
      )}
      {...rest}
    />
  );
}

export function SliderValue(props: ComponentProps<typeof SliderValuePrimitive>) {
  const rest = omit(props, "class");
  return (
    <SliderValuePrimitive
      class={partClass("text-xs/relaxed text-muted-foreground tabular-nums", props.class)}
      {...rest}
    />
  );
}

/** The 1.9 name for the value. */
export const SliderValueLabel = SliderValue;
