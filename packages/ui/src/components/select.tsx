import { Select as SelectPrimitive, useSelectContext } from "@kobalte/core/select";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type SelectRootProps = ComponentProps<typeof SelectPrimitive>;
type SelectTriggerProps = ComponentProps<typeof SelectPrimitive.Trigger>;
type SelectValueProps = ComponentProps<typeof SelectPrimitive.Value>;
type SelectIconProps = ComponentProps<typeof SelectPrimitive.Icon>;
type SelectContentProps = ComponentProps<typeof SelectPrimitive.Content>;
type SelectListboxProps = ComponentProps<typeof SelectPrimitive.Listbox>;
type SelectItemProps = ComponentProps<typeof SelectPrimitive.Item>;
type SelectItemLabelProps = ComponentProps<typeof SelectPrimitive.ItemLabel>;
type SelectItemDescriptionProps = ComponentProps<typeof SelectPrimitive.ItemDescription>;
type SelectItemIndicatorProps = ComponentProps<typeof SelectPrimitive.ItemIndicator>;
type SelectSectionProps = ComponentProps<typeof SelectPrimitive.Section>;
type SelectLabelProps = ComponentProps<typeof SelectPrimitive.Label>;
type SelectDescriptionProps = ComponentProps<typeof SelectPrimitive.Description>;
type SelectErrorMessageProps = ComponentProps<typeof SelectPrimitive.ErrorMessage>;

function SelectRoot(props: SelectRootProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SelectPrimitive
      ref={props.ref}
      class={cn(
        "flex flex-col gap-2 text-xs text-foreground data-disabled:opacity-50",
        props.class,
      )}
      {...rest}
    />
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      class="size-3.5"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function SelectTrigger(props: SelectTriggerProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SelectPrimitive.Trigger
      ref={props.ref}
      class={cn(
        "flex h-7 w-full items-center justify-between gap-1.5 rounded-md border border-input bg-input/20 px-2 py-1.5 text-left text-xs/relaxed transition-colors focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:outline-none data-invalid:border-destructive data-expanded:ring-2 dark:bg-input/30 dark:hover:bg-input/50",
        props.class,
      )}
      {...rest}
    />
  );
}

export function SelectValue(props: SelectValueProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SelectPrimitive.Value
      ref={props.ref}
      class={cn(
        "flex flex-1 truncate text-left data-placeholder-shown:text-muted-foreground",
        props.class,
      )}
      {...rest}
    />
  );
}

export function SelectIcon(props: SelectIconProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SelectPrimitive.Icon
      ref={props.ref}
      class={cn("size-3.5 shrink-0 text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function SelectContent(props: SelectContentProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SelectPrimitive.Content
      ref={props.ref}
      class={cn(
        "z-50 min-w-32 overflow-hidden rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-none",
        props.class,
      )}
      {...rest}
    />
  );
}

export function SelectListbox(props: SelectListboxProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SelectPrimitive.Listbox
      ref={props.ref}
      class={cn("max-h-72 overflow-y-auto p-1 outline-none", props.class)}
      {...rest}
    />
  );
}

export function SelectItem(props: SelectItemProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SelectPrimitive.Item
      ref={props.ref}
      class={cn(
        "flex min-h-7 cursor-default items-center gap-2 rounded-md px-2 py-1 text-xs/relaxed outline-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-50",
        props.class,
      )}
      {...rest}
    />
  );
}

export function SelectItemLabel(props: SelectItemLabelProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SelectPrimitive.ItemLabel
      ref={props.ref}
      class={cn("text-xs text-foreground", props.class)}
      {...rest}
    />
  );
}

export function SelectItemDescription(props: SelectItemDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SelectPrimitive.ItemDescription
      ref={props.ref}
      class={cn("text-xs text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function SelectItemIndicator(props: SelectItemIndicatorProps) {
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  return (
    <SelectPrimitive.ItemIndicator
      ref={props.ref}
      class={cn(
        "pointer-events-none flex size-3.5 shrink-0 items-center justify-center",
        props.class,
      )}
      {...rest}
    >
      {props.children ?? <CheckIcon />}
    </SelectPrimitive.ItemIndicator>
  );
}

export function SelectSection(props: SelectSectionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SelectPrimitive.Section
      ref={props.ref}
      class={cn("px-2 py-1.5 text-xs text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function SelectLabel(props: SelectLabelProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SelectPrimitive.Label
      ref={props.ref}
      class={cn("text-xs/relaxed font-medium text-foreground", props.class)}
      {...rest}
    />
  );
}

export function SelectDescription(props: SelectDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SelectPrimitive.Description
      ref={props.ref}
      class={cn("text-xs text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function SelectErrorMessage(props: SelectErrorMessageProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SelectPrimitive.ErrorMessage
      ref={props.ref}
      class={cn("text-xs/relaxed text-destructive", props.class)}
      {...rest}
    />
  );
}

export const SelectPortal = SelectPrimitive.Portal;
export const SelectArrow = SelectPrimitive.Arrow;
export const SelectHiddenSelect = SelectPrimitive.HiddenSelect;

export const Select = Object.assign(SelectRoot, {
  Trigger: SelectTrigger,
  Value: SelectValue,
  Icon: SelectIcon,
  Portal: SelectPortal,
  Content: SelectContent,
  Arrow: SelectArrow,
  Listbox: SelectListbox,
  Item: SelectItem,
  ItemLabel: SelectItemLabel,
  ItemDescription: SelectItemDescription,
  ItemIndicator: SelectItemIndicator,
  Section: SelectSection,
  Label: SelectLabel,
  Description: SelectDescription,
  ErrorMessage: SelectErrorMessage,
  HiddenSelect: SelectHiddenSelect,
  useContext: useSelectContext,
});
