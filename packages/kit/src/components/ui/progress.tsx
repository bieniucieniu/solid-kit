import {
  Progress as ProgressPrimitive,
  ProgressIndicator as ProgressIndicatorPrimitive,
  ProgressLabel as ProgressLabelPrimitive,
  ProgressTrack as ProgressTrackPrimitive,
  ProgressValue as ProgressValuePrimitive,
} from "@ui-sdk/solid/progress";
import { type ComponentProps, omit } from "solid-js";
import { partClass } from "#/lib/utils";

export function Progress(props: ComponentProps<typeof ProgressPrimitive>) {
  const rest = omit(props, "class");
  return (
    <ProgressPrimitive class={partClass("flex w-full flex-col gap-2", props.class)} {...rest} />
  );
}

export function ProgressLabel(props: ComponentProps<typeof ProgressLabelPrimitive>) {
  const rest = omit(props, "class");
  return (
    <ProgressLabelPrimitive
      class={partClass("text-xs/relaxed font-medium text-foreground", props.class)}
      {...rest}
    />
  );
}

export function ProgressValue(props: ComponentProps<typeof ProgressValuePrimitive>) {
  const rest = omit(props, "class");
  return (
    <ProgressValuePrimitive
      class={partClass("text-xs/relaxed text-muted-foreground tabular-nums", props.class)}
      {...rest}
    />
  );
}

/** The 1.9 name for the value. */
export const ProgressValueLabel = ProgressValue;

export function ProgressTrack(props: ComponentProps<typeof ProgressTrackPrimitive>) {
  const rest = omit(props, "class");
  return (
    <ProgressTrackPrimitive
      class={partClass(
        "relative flex h-1 w-full items-center overflow-x-hidden rounded-md bg-muted",
        props.class,
      )}
      {...rest}
    />
  );
}

/** Fills the track. ui-sdk sets its width from the value. */
export function ProgressIndicator(props: ComponentProps<typeof ProgressIndicatorPrimitive>) {
  const rest = omit(props, "class");
  return (
    <ProgressIndicatorPrimitive
      class={partClass(
        "h-full bg-primary transition-all data-indeterminate:w-full data-indeterminate:animate-pulse",
        props.class,
      )}
      {...rest}
    />
  );
}

/** The 1.9 name for the indicator. */
export const ProgressFill = ProgressIndicator;
