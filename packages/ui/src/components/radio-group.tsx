import { RadioGroup as RadioGroupPrimitive } from "@kobalte/core/radio-group";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type RadioGroupRootProps = ComponentProps<typeof RadioGroupPrimitive>;
type RadioGroupLabelProps = ComponentProps<typeof RadioGroupPrimitive.Label>;
type RadioGroupDescriptionProps = ComponentProps<typeof RadioGroupPrimitive.Description>;
type RadioGroupErrorMessageProps = ComponentProps<typeof RadioGroupPrimitive.ErrorMessage>;
type RadioGroupItemProps = ComponentProps<typeof RadioGroupPrimitive.Item>;
type RadioGroupItemControlProps = ComponentProps<typeof RadioGroupPrimitive.ItemControl>;
type RadioGroupItemIndicatorProps = ComponentProps<typeof RadioGroupPrimitive.ItemIndicator>;
type RadioGroupItemLabelProps = ComponentProps<typeof RadioGroupPrimitive.ItemLabel>;
type RadioGroupItemDescriptionProps = ComponentProps<typeof RadioGroupPrimitive.ItemDescription>;

function RadioGroupRoot(props: RadioGroupRootProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <RadioGroupPrimitive
      ref={props.ref}
      class={cn("grid gap-3 text-xs text-foreground data-disabled:opacity-50", props.class)}
      {...rest}
    />
  );
}

export function RadioGroupLabel(props: RadioGroupLabelProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <RadioGroupPrimitive.Label
      ref={props.ref}
      class={cn("text-xs/relaxed font-medium text-foreground", props.class)}
      {...rest}
    />
  );
}

export function RadioGroupDescription(props: RadioGroupDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <RadioGroupPrimitive.Description
      ref={props.ref}
      class={cn("text-xs/relaxed text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function RadioGroupErrorMessage(props: RadioGroupErrorMessageProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <RadioGroupPrimitive.ErrorMessage
      ref={props.ref}
      class={cn("text-xs/relaxed text-destructive", props.class)}
      {...rest}
    />
  );
}

export function RadioGroupItem(props: RadioGroupItemProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <RadioGroupPrimitive.Item
      ref={props.ref}
      class={cn(
        "group inline-flex items-center gap-2 text-xs/relaxed text-foreground data-disabled:opacity-50",
        props.class,
      )}
      {...rest}
    />
  );
}

export function RadioGroupItemControl(props: RadioGroupItemControlProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <RadioGroupPrimitive.ItemControl
      ref={props.ref}
      class={cn(
        "flex size-4 shrink-0 items-center justify-center rounded-full border border-input group-focus-within:ring-3 group-focus-within:ring-ring/50 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-invalid:border-destructive dark:bg-input/30",
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
      class={cn("size-2 rounded-full bg-primary-foreground", props.class)}
      {...rest}
    />
  );
}

export function RadioGroupItemLabel(props: RadioGroupItemLabelProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <RadioGroupPrimitive.ItemLabel
      ref={props.ref}
      class={cn("text-xs/relaxed font-medium text-foreground", props.class)}
      {...rest}
    />
  );
}

export function RadioGroupItemDescription(props: RadioGroupItemDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <RadioGroupPrimitive.ItemDescription
      ref={props.ref}
      class={cn("text-xs/relaxed text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export const RadioGroupItemInput = RadioGroupPrimitive.ItemInput;

export const RadioGroup = Object.assign(RadioGroupRoot, {
  Label: RadioGroupLabel,
  Description: RadioGroupDescription,
  ErrorMessage: RadioGroupErrorMessage,
  Item: RadioGroupItem,
  ItemInput: RadioGroupItemInput,
  ItemControl: RadioGroupItemControl,
  ItemIndicator: RadioGroupItemIndicator,
  ItemLabel: RadioGroupItemLabel,
  ItemDescription: RadioGroupItemDescription,
});
