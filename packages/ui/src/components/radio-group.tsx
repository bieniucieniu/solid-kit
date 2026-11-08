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

export function RadioGroup(props: RadioGroupProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <RadioGroupPrimitive
      ref={props.ref}
      class={cn("grid w-full gap-3 text-xs text-foreground data-disabled:opacity-50", props.class)}
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
        "group/radio-group-item inline-flex items-center gap-2 text-xs/relaxed text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50",
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
        "relative flex aspect-square size-4 shrink-0 items-center justify-center rounded-full border border-input outline-none peer-focus-visible:border-ring peer-focus-visible:ring-3 peer-focus-visible:ring-ring/50 data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 dark:bg-input/30 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
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
      class={cn(
        "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground",
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

export function RadioGroupItemInput(props: ComponentProps<typeof RadioGroupPrimitive.ItemInput>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <RadioGroupPrimitive.ItemInput ref={props.ref} class={cn("peer", props.class)} {...rest} />
  );
}
