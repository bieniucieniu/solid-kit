import { Combobox as ComboboxPrimitive, useComboboxContext } from "@kobalte/core/combobox";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type ComboboxRootProps = ComponentProps<typeof ComboboxPrimitive>;
type ComboboxControlProps = ComponentProps<typeof ComboboxPrimitive.Control>;
type ComboboxInputProps = ComponentProps<typeof ComboboxPrimitive.Input>;
type ComboboxIconProps = ComponentProps<typeof ComboboxPrimitive.Icon>;
type ComboboxContentProps = ComponentProps<typeof ComboboxPrimitive.Content>;
type ComboboxListboxProps = ComponentProps<typeof ComboboxPrimitive.Listbox>;
type ComboboxItemProps = ComponentProps<typeof ComboboxPrimitive.Item>;
type ComboboxItemLabelProps = ComponentProps<typeof ComboboxPrimitive.ItemLabel>;
type ComboboxItemDescriptionProps = ComponentProps<typeof ComboboxPrimitive.ItemDescription>;
type ComboboxItemIndicatorProps = ComponentProps<typeof ComboboxPrimitive.ItemIndicator>;
type ComboboxSectionProps = ComponentProps<typeof ComboboxPrimitive.Section>;
type ComboboxLabelProps = ComponentProps<typeof ComboboxPrimitive.Label>;
type ComboboxDescriptionProps = ComponentProps<typeof ComboboxPrimitive.Description>;
type ComboboxErrorMessageProps = ComponentProps<typeof ComboboxPrimitive.ErrorMessage>;

function ComboboxRoot(props: ComboboxRootProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ComboboxPrimitive
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

export function ComboboxControl(props: ComboboxControlProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ComboboxPrimitive.Control
      ref={props.ref}
      class={cn(
        "flex h-7 w-full items-center rounded-md border border-input bg-input/20 text-xs/relaxed transition-colors focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/30 data-invalid:border-destructive data-expanded:ring-2 dark:bg-input/30",
        props.class,
      )}
      {...rest}
    />
  );
}

export function ComboboxInput(props: ComboboxInputProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ComboboxPrimitive.Input
      ref={props.ref}
      class={cn(
        "h-full min-w-0 flex-1 bg-transparent px-2 text-xs/relaxed outline-none placeholder:text-muted-foreground",
        props.class,
      )}
      {...rest}
    />
  );
}

export function ComboboxIcon(props: ComboboxIconProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ComboboxPrimitive.Icon
      ref={props.ref}
      class={cn("size-3.5 shrink-0 text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function ComboboxContent(props: ComboboxContentProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ComboboxPrimitive.Content
      ref={props.ref}
      class={cn(
        "z-50 min-w-32 overflow-hidden rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-none",
        props.class,
      )}
      {...rest}
    />
  );
}

export function ComboboxListbox(props: ComboboxListboxProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ComboboxPrimitive.Listbox
      ref={props.ref}
      class={cn("max-h-72 overflow-y-auto p-1 outline-none", props.class)}
      {...rest}
    />
  );
}

export function ComboboxItem(props: ComboboxItemProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ComboboxPrimitive.Item
      ref={props.ref}
      class={cn(
        "flex min-h-7 cursor-default items-center gap-2 rounded-md px-2 py-1 text-xs/relaxed outline-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-50",
        props.class,
      )}
      {...rest}
    />
  );
}

export function ComboboxItemLabel(props: ComboboxItemLabelProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ComboboxPrimitive.ItemLabel
      ref={props.ref}
      class={cn("text-xs text-foreground", props.class)}
      {...rest}
    />
  );
}

export function ComboboxItemDescription(props: ComboboxItemDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ComboboxPrimitive.ItemDescription
      ref={props.ref}
      class={cn("text-xs text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function ComboboxItemIndicator(props: ComboboxItemIndicatorProps) {
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  return (
    <ComboboxPrimitive.ItemIndicator
      ref={props.ref}
      class={cn(
        "pointer-events-none flex size-3.5 shrink-0 items-center justify-center",
        props.class,
      )}
      {...rest}
    >
      {props.children ?? <CheckIcon />}
    </ComboboxPrimitive.ItemIndicator>
  );
}

export function ComboboxSection(props: ComboboxSectionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ComboboxPrimitive.Section
      ref={props.ref}
      class={cn("px-2 py-1.5 text-xs text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function ComboboxLabel(props: ComboboxLabelProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ComboboxPrimitive.Label
      ref={props.ref}
      class={cn("text-xs/relaxed font-medium text-foreground", props.class)}
      {...rest}
    />
  );
}

export function ComboboxDescription(props: ComboboxDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ComboboxPrimitive.Description
      ref={props.ref}
      class={cn("text-xs text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function ComboboxErrorMessage(props: ComboboxErrorMessageProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ComboboxPrimitive.ErrorMessage
      ref={props.ref}
      class={cn("text-xs/relaxed text-destructive", props.class)}
      {...rest}
    />
  );
}

export const ComboboxTrigger = ComboboxPrimitive.Trigger;
export const ComboboxPortal = ComboboxPrimitive.Portal;
export const ComboboxArrow = ComboboxPrimitive.Arrow;
export const ComboboxHiddenSelect = ComboboxPrimitive.HiddenSelect;

export const Combobox = Object.assign(ComboboxRoot, {
  Control: ComboboxControl,
  Input: ComboboxInput,
  Trigger: ComboboxTrigger,
  Icon: ComboboxIcon,
  Portal: ComboboxPortal,
  Content: ComboboxContent,
  Arrow: ComboboxArrow,
  Listbox: ComboboxListbox,
  Item: ComboboxItem,
  ItemLabel: ComboboxItemLabel,
  ItemDescription: ComboboxItemDescription,
  ItemIndicator: ComboboxItemIndicator,
  Section: ComboboxSection,
  Label: ComboboxLabel,
  Description: ComboboxDescription,
  ErrorMessage: ComboboxErrorMessage,
  HiddenSelect: ComboboxHiddenSelect,
  useContext: useComboboxContext,
});
