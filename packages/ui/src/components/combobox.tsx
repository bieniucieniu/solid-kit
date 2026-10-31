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
        "flex flex-col gap-2 text-sm text-foreground data-disabled:opacity-50",
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
      class="size-3"
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
        "flex items-center rounded-lg border border-border bg-background text-foreground ring-ring data-invalid:border-foreground data-expanded:ring-2 focus-within:ring-2",
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
        "min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:outline-none",
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
      class={cn("size-4 shrink-0 text-muted-foreground", props.class)}
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
        "z-50 min-w-48 overflow-hidden rounded-lg border border-border bg-background text-foreground shadow-lg outline-none",
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
      class={cn("max-h-60 overflow-auto p-1 outline-none", props.class)}
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
        "flex cursor-default items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-foreground outline-none data-highlighted:bg-muted data-selected:bg-muted data-disabled:opacity-50",
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
      class={cn("text-sm text-foreground", props.class)}
      {...rest}
    />
  );
}

export function ComboboxItemDescription(props: ComboboxItemDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ComboboxPrimitive.ItemDescription
      ref={props.ref}
      class={cn("text-sm text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function ComboboxItemIndicator(props: ComboboxItemIndicatorProps) {
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  return (
    <ComboboxPrimitive.ItemIndicator
      ref={props.ref}
      class={cn("flex size-4 shrink-0 items-center justify-center", props.class)}
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
      class={cn("px-2 py-1.5 text-sm text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function ComboboxLabel(props: ComboboxLabelProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ComboboxPrimitive.Label
      ref={props.ref}
      class={cn("text-sm text-foreground", props.class)}
      {...rest}
    />
  );
}

export function ComboboxDescription(props: ComboboxDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ComboboxPrimitive.Description
      ref={props.ref}
      class={cn("text-sm text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function ComboboxErrorMessage(props: ComboboxErrorMessageProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ComboboxPrimitive.ErrorMessage
      ref={props.ref}
      class={cn("text-sm text-foreground", props.class)}
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
