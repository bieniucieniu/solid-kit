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
        "group inline-flex items-center gap-2 text-xs/relaxed text-foreground data-disabled:opacity-50",
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
        "inline-flex h-[16.6px] w-[28px] shrink-0 cursor-pointer items-center rounded-full border border-transparent p-px group-focus-within:ring-2 group-focus-within:ring-ring/30 data-checked:bg-primary data-unchecked:bg-input data-invalid:border-destructive dark:data-unchecked:bg-input/80",
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
        "pointer-events-none block size-3.5 rounded-full bg-background transition-transform data-checked:ml-auto dark:data-unchecked:bg-foreground dark:data-checked:bg-primary-foreground",
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
      class={cn("text-xs/relaxed font-medium text-foreground", props.class)}
      {...rest}
    />
  );
}

export function SwitchDescription(props: SwitchDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SwitchPrimitive.Description
      ref={props.ref}
      class={cn("text-xs/relaxed text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function SwitchErrorMessage(props: SwitchErrorMessageProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SwitchPrimitive.ErrorMessage
      ref={props.ref}
      class={cn("text-xs/relaxed text-destructive", props.class)}
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
