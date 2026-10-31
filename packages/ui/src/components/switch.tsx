import { Switch as SwitchPrimitive } from "@kobalte/core/switch";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type SwitchRootProps = ComponentProps<typeof SwitchPrimitive>;
type SwitchControlProps = ComponentProps<typeof SwitchPrimitive.Control>;
type SwitchThumbProps = ComponentProps<typeof SwitchPrimitive.Thumb>;
type SwitchLabelProps = ComponentProps<typeof SwitchPrimitive.Label>;
type SwitchDescriptionProps = ComponentProps<typeof SwitchPrimitive.Description>;
type SwitchErrorMessageProps = ComponentProps<typeof SwitchPrimitive.ErrorMessage>;

function SwitchRoot(props: SwitchRootProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SwitchPrimitive
      ref={props.ref}
      class={cn(
        "group inline-flex items-center gap-2 text-sm text-foreground data-disabled:opacity-50",
        props.class,
      )}
      {...rest}
    />
  );
}

export function SwitchControl(props: SwitchControlProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SwitchPrimitive.Control
      ref={props.ref}
      class={cn(
        "inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-lg border border-border bg-muted p-0.5 ring-ring group-focus-within:ring-2 data-checked:border-primary data-checked:bg-primary data-invalid:border-foreground",
        props.class,
      )}
      {...rest}
    />
  );
}

export function SwitchThumb(props: SwitchThumbProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SwitchPrimitive.Thumb
      ref={props.ref}
      class={cn(
        "pointer-events-none block size-4 rounded-lg bg-foreground data-checked:translate-x-3.5 data-checked:bg-primary-foreground",
        props.class,
      )}
      {...rest}
    />
  );
}

export function SwitchLabel(props: SwitchLabelProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SwitchPrimitive.Label
      ref={props.ref}
      class={cn("text-sm text-foreground", props.class)}
      {...rest}
    />
  );
}

export function SwitchDescription(props: SwitchDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SwitchPrimitive.Description
      ref={props.ref}
      class={cn("text-sm text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function SwitchErrorMessage(props: SwitchErrorMessageProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SwitchPrimitive.ErrorMessage
      ref={props.ref}
      class={cn("text-sm text-foreground", props.class)}
      {...rest}
    />
  );
}

export const SwitchInput = SwitchPrimitive.Input;

export const Switch = Object.assign(SwitchRoot, {
  Input: SwitchInput,
  Control: SwitchControl,
  Thumb: SwitchThumb,
  Label: SwitchLabel,
  Description: SwitchDescription,
  ErrorMessage: SwitchErrorMessage,
});
