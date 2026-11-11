import { RadioGroup as RadioGroupPrimitive } from "@kobalte/core/radio-group";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type RadioGroupProps = ComponentProps<typeof RadioGroupPrimitive>;
type RadioGroupLabelProps = ComponentProps<typeof RadioGroupPrimitive.Label>;
type RadioGroupDescriptionProps = ComponentProps<typeof RadioGroupPrimitive.Description>;
type RadioGroupErrorMessageProps = ComponentProps<typeof RadioGroupPrimitive.ErrorMessage>;
type RadioGroupItemProps = ComponentProps<typeof RadioGroupPrimitive.Item>;
type RadioGroupItemControlProps = ComponentProps<typeof RadioGroupPrimitive.ItemControl>;
type RadioGroupItemIndicatorProps = ComponentProps<typeof RadioGroupPrimitive.ItemIndicator>;
type RadioGroupItemLabelProps = ComponentProps<typeof RadioGroupPrimitive.ItemLabel>;
type RadioGroupItemDescriptionProps = ComponentProps<typeof RadioGroupPrimitive.ItemDescription>;
type RadioGroupItemInputProps = ComponentProps<typeof RadioGroupPrimitive.ItemInput>;

export function RadioGroup(props: RadioGroupProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <RadioGroupPrimitive
      ref={props.ref}
      data-slot="radio-group"
      class={cn("flex flex-col gap-1 text-on-surface", props.class)}
      {...rest}
    />
  );
}

export function RadioGroupLabel(props: RadioGroupLabelProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <RadioGroupPrimitive.Label
      ref={props.ref}
      data-slot="radio-group-label"
      class={cn("typescale-title-small text-on-surface", props.class)}
      {...rest}
    />
  );
}

export function RadioGroupDescription(props: RadioGroupDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <RadioGroupPrimitive.Description
      ref={props.ref}
      data-slot="radio-group-description"
      class={cn("typescale-body-small text-on-surface-variant", props.class)}
      {...rest}
    />
  );
}

export function RadioGroupErrorMessage(props: RadioGroupErrorMessageProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <RadioGroupPrimitive.ErrorMessage
      ref={props.ref}
      data-slot="radio-group-error-message"
      class={cn("typescale-body-small text-error", props.class)}
      {...rest}
    />
  );
}

export function RadioGroupItem(props: RadioGroupItemProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <RadioGroupPrimitive.Item
      ref={props.ref}
      data-slot="radio-group-item"
      class={cn(
        "group/radio flex items-center gap-4 data-disabled:cursor-not-allowed",
        props.class,
      )}
      {...rest}
    />
  );
}

/** The 20px ring. Its state layer is a 40px circle. */
export function RadioGroupItemControl(props: RadioGroupItemControlProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <RadioGroupPrimitive.ItemControl
      ref={props.ref}
      data-slot="radio-group-item-control"
      class={cn(
        "relative m-2.5 flex size-5 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-on-surface-variant state-layer motion-fast [--state-layer-color:var(--md-sys-color-on-surface)] [--state-layer-inset:-12px] peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-secondary peer-focus-visible:before:opacity-10 data-checked:border-primary data-checked:[--state-layer-color:var(--md-sys-color-primary)] data-invalid:border-error data-disabled:border-on-surface/38",
        props.class,
      )}
      {...rest}
    />
  );
}

export function RadioGroupItemIndicator(props: RadioGroupItemIndicatorProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <RadioGroupPrimitive.ItemIndicator
      ref={props.ref}
      data-slot="radio-group-item-indicator"
      class={cn(
        "size-2.5 rounded-full bg-primary data-checked:animate-in data-checked:zoom-in-0 group-data-invalid/radio:bg-error group-data-disabled/radio:bg-on-surface/38",
        props.class,
      )}
      {...rest}
    />
  );
}

export function RadioGroupItemLabel(props: RadioGroupItemLabelProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <RadioGroupPrimitive.ItemLabel
      ref={props.ref}
      data-slot="radio-group-item-label"
      class={cn(
        "typescale-body-large text-on-surface select-none data-disabled:text-on-surface/38",
        props.class,
      )}
      {...rest}
    />
  );
}

export function RadioGroupItemDescription(props: RadioGroupItemDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <RadioGroupPrimitive.ItemDescription
      ref={props.ref}
      data-slot="radio-group-item-description"
      class={cn("typescale-body-small text-on-surface-variant", props.class)}
      {...rest}
    />
  );
}

export function RadioGroupItemInput(props: RadioGroupItemInputProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <RadioGroupPrimitive.ItemInput ref={props.ref} class={cn("peer", props.class)} {...rest} />
  );
}
