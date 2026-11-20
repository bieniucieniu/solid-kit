import type { JSX } from "@solidjs/web";
import {
  Slider as SliderPrimitive,
  SliderControl as SliderControlPrimitive,
  SliderIndicator as SliderIndicatorPrimitive,
  SliderThumb as SliderThumbPrimitive,
  SliderTrack as SliderTrackPrimitive,
  SliderValue as SliderValuePrimitive,
} from "@ui-sdk/solid/slider";
import { type ComponentProps, omit } from "solid-js";
import { cn, partClass } from "#kit/lib/utils";

/**
 * Compose it as `Slider > SliderControl > SliderTrack > (SliderFill, SliderThumb)`. Name a single
 * thumb with `aria-label`, or each thumb of a range with its own.
 */
export function Slider(props: ComponentProps<typeof SliderPrimitive>) {
  const rest = omit(props, "class");
  return (
    <SliderPrimitive
      class={partClass(
        "group/slider flex w-full touch-none flex-col gap-2 select-none data-[orientation=vertical]:h-60 data-[orientation=vertical]:w-fit",
        props.class,
      )}
      {...rest}
    />
  );
}

export function SliderLabel(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  const rest = omit(props, "class");
  return (
    <span
      data-slot="slider-label"
      class={cn("typescale-title-small text-on-surface", props.class)}
      {...rest}
    />
  );
}

export function SliderValueLabel(props: ComponentProps<typeof SliderValuePrimitive>) {
  const rest = omit(props, "class");
  return (
    <SliderValuePrimitive
      class={partClass("typescale-label-large text-on-surface-variant tabular-nums", props.class)}
      {...rest}
    />
  );
}

export function SliderDescription(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  const rest = omit(props, "class");
  return (
    <span
      data-slot="slider-description"
      class={cn("typescale-body-small text-on-surface-variant", props.class)}
      {...rest}
    />
  );
}

export function SliderErrorMessage(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  const rest = omit(props, "class");
  return (
    <span
      data-slot="slider-error-message"
      class={cn("typescale-body-small text-error", props.class)}
      {...rest}
    />
  );
}

/** Where presses land: the full 44px height around the 16px track. */
export function SliderControl(props: ComponentProps<typeof SliderControlPrimitive>) {
  const rest = omit(props, "class");
  return (
    <SliderControlPrimitive
      class={partClass(
        "flex w-full items-center data-[orientation=horizontal]:h-11 data-[orientation=vertical]:h-full data-[orientation=vertical]:w-11 data-[orientation=vertical]:justify-center",
        props.class,
      )}
      {...rest}
    />
  );
}

/**
 * The inactive track (16px, secondary-container) with a stop dot at the far end. The handle cuts a
 * 6px gap into both tracks with a surface-colored ring; set --slider-gap-color on a different
 * background.
 */
export function SliderTrack(props: ComponentProps<typeof SliderTrackPrimitive>) {
  const rest = omit(props, "class");
  return (
    <SliderTrackPrimitive
      class={partClass(
        "relative grow cursor-pointer rounded-full bg-secondary-container after:absolute after:size-1 after:rounded-full after:bg-on-secondary-container data-[orientation=horizontal]:h-4 data-[orientation=horizontal]:w-full data-[orientation=horizontal]:after:top-1/2 data-[orientation=horizontal]:after:right-1.5 data-[orientation=horizontal]:after:-translate-y-1/2 data-[orientation=vertical]:h-full data-[orientation=vertical]:w-4 data-[orientation=vertical]:after:top-1.5 data-[orientation=vertical]:after:left-1/2 data-[orientation=vertical]:after:-translate-x-1/2 group-data-disabled/slider:cursor-not-allowed group-data-disabled/slider:bg-on-surface/12 group-data-disabled/slider:after:bg-on-surface/38",
        props.class,
      )}
      {...rest}
    />
  );
}

export function SliderFill(props: ComponentProps<typeof SliderIndicatorPrimitive>) {
  const rest = omit(props, "class");
  return (
    <SliderIndicatorPrimitive
      class={partClass(
        "rounded-full bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full group-data-disabled/slider:bg-on-surface/38",
        props.class,
      )}
      {...rest}
    />
  );
}

/** Alias for the ui-sdk part name. */
export const SliderIndicator = SliderFill;

/** A 4x44 bar. It narrows to 2px while dragged. Its hidden range input takes focus. */
export function SliderThumb(props: ComponentProps<typeof SliderThumbPrimitive>) {
  const rest = omit(props, "class");
  return (
    <SliderThumbPrimitive
      class={partClass(
        "block h-11 w-1 cursor-grab rounded-full bg-primary shadow-[0_0_0_6px_var(--slider-gap-color,var(--md-sys-color-surface))] outline-none motion-fast has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-8 has-[:focus-visible]:outline-secondary active:w-0.5 active:cursor-grabbing data-dragging:w-0.5 data-[orientation=vertical]:h-1 data-[orientation=vertical]:w-11 group-data-disabled/slider:bg-on-surface/38",
        props.class,
      )}
      {...rest}
    />
  );
}
