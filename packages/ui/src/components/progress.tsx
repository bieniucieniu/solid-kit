import { Progress as ProgressPrimitive } from "@kobalte/core/progress";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type ProgressRootProps = ComponentProps<typeof ProgressPrimitive>;
type ProgressLabelProps = ComponentProps<typeof ProgressPrimitive.Label>;
type ProgressValueLabelProps = ComponentProps<typeof ProgressPrimitive.ValueLabel>;
type ProgressTrackProps = ComponentProps<typeof ProgressPrimitive.Track>;
type ProgressFillProps = ComponentProps<typeof ProgressPrimitive.Fill>;

function ProgressRoot(props: ProgressRootProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ProgressPrimitive
      ref={props.ref}
      class={cn("flex w-full flex-col gap-2", props.class)}
      {...rest}
    />
  );
}

export function ProgressLabel(props: ProgressLabelProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ProgressPrimitive.Label
      ref={props.ref}
      class={cn("text-sm text-foreground", props.class)}
      {...rest}
    />
  );
}

export function ProgressValueLabel(props: ProgressValueLabelProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ProgressPrimitive.ValueLabel
      ref={props.ref}
      class={cn("text-sm text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function ProgressTrack(props: ProgressTrackProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ProgressPrimitive.Track
      ref={props.ref}
      class={cn("h-2 w-full overflow-hidden rounded-lg bg-muted", props.class)}
      {...rest}
    />
  );
}

export function ProgressFill(props: ProgressFillProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ProgressPrimitive.Fill
      ref={props.ref}
      class={cn(
        "h-full w-[var(--kb-progress-fill-width)] bg-primary data-indeterminate:w-full data-indeterminate:animate-pulse",
        props.class,
      )}
      {...rest}
    />
  );
}

export const Progress = Object.assign(ProgressRoot, {
  Label: ProgressLabel,
  ValueLabel: ProgressValueLabel,
  Track: ProgressTrack,
  Fill: ProgressFill,
});
