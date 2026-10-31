import {
  ContextMenu as ContextMenuPrimitive,
  useContextMenuContext,
} from "@kobalte/core/context-menu";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

const surfaceClass =
  "z-50 min-w-32 rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-none";
const itemClass =
  "flex min-h-7 cursor-default items-center gap-2 rounded-md px-2 py-1 text-xs/relaxed outline-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-50";

type ContextMenuRootProps = ComponentProps<typeof ContextMenuPrimitive>;
type ContextMenuContentProps = ComponentProps<typeof ContextMenuPrimitive.Content>;
type ContextMenuItemProps = ComponentProps<typeof ContextMenuPrimitive.Item>;
type ContextMenuItemLabelProps = ComponentProps<typeof ContextMenuPrimitive.ItemLabel>;
type ContextMenuItemDescriptionProps = ComponentProps<typeof ContextMenuPrimitive.ItemDescription>;
type ContextMenuItemIndicatorProps = ComponentProps<typeof ContextMenuPrimitive.ItemIndicator>;
type ContextMenuCheckboxItemProps = ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>;
type ContextMenuRadioGroupProps = ComponentProps<typeof ContextMenuPrimitive.RadioGroup>;
type ContextMenuRadioItemProps = ComponentProps<typeof ContextMenuPrimitive.RadioItem>;
type ContextMenuGroupProps = ComponentProps<typeof ContextMenuPrimitive.Group>;
type ContextMenuGroupLabelProps = ComponentProps<typeof ContextMenuPrimitive.GroupLabel>;
type ContextMenuIconProps = ComponentProps<typeof ContextMenuPrimitive.Icon>;
type ContextMenuSubTriggerProps = ComponentProps<typeof ContextMenuPrimitive.SubTrigger>;
type ContextMenuSubContentProps = ComponentProps<typeof ContextMenuPrimitive.SubContent>;
type ContextMenuSeparatorProps = ComponentProps<typeof ContextMenuPrimitive.Separator>;

function ContextMenuRoot(props: ContextMenuRootProps) {
  return <ContextMenuPrimitive {...props} />;
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

export function ContextMenuContent(props: ContextMenuContentProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ContextMenuPrimitive.Content ref={props.ref} class={cn(surfaceClass, props.class)} {...rest} />
  );
}

export function ContextMenuItem(props: ContextMenuItemProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return <ContextMenuPrimitive.Item ref={props.ref} class={cn(itemClass, props.class)} {...rest} />;
}

export function ContextMenuItemLabel(props: ContextMenuItemLabelProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ContextMenuPrimitive.ItemLabel
      ref={props.ref}
      class={cn("text-xs text-foreground", props.class)}
      {...rest}
    />
  );
}

export function ContextMenuItemDescription(props: ContextMenuItemDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ContextMenuPrimitive.ItemDescription
      ref={props.ref}
      class={cn("text-xs text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function ContextMenuItemIndicator(props: ContextMenuItemIndicatorProps) {
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  return (
    <ContextMenuPrimitive.ItemIndicator
      ref={props.ref}
      class={cn(
        "pointer-events-none flex size-3.5 shrink-0 items-center justify-center",
        props.class,
      )}
      {...rest}
    >
      {props.children ?? <CheckIcon />}
    </ContextMenuPrimitive.ItemIndicator>
  );
}

export function ContextMenuCheckboxItem(props: ContextMenuCheckboxItemProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ContextMenuPrimitive.CheckboxItem
      ref={props.ref}
      class={cn(itemClass, "data-checked:text-foreground", props.class)}
      {...rest}
    />
  );
}

export function ContextMenuRadioGroup(props: ContextMenuRadioGroupProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ContextMenuPrimitive.RadioGroup
      ref={props.ref}
      class={cn("flex flex-col", props.class)}
      {...rest}
    />
  );
}

export function ContextMenuRadioItem(props: ContextMenuRadioItemProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ContextMenuPrimitive.RadioItem
      ref={props.ref}
      class={cn(itemClass, "data-checked:text-foreground", props.class)}
      {...rest}
    />
  );
}

export function ContextMenuGroup(props: ContextMenuGroupProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ContextMenuPrimitive.Group
      ref={props.ref}
      class={cn("flex flex-col", props.class)}
      {...rest}
    />
  );
}

export function ContextMenuGroupLabel(props: ContextMenuGroupLabelProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ContextMenuPrimitive.GroupLabel
      ref={props.ref}
      class={cn("px-2 py-1.5 text-xs text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function ContextMenuIcon(props: ContextMenuIconProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ContextMenuPrimitive.Icon
      ref={props.ref}
      class={cn("size-3.5 shrink-0 text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function ContextMenuSubTrigger(props: ContextMenuSubTriggerProps) {
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  return (
    <ContextMenuPrimitive.SubTrigger
      ref={props.ref}
      class={cn(
        itemClass,
        "data-expanded:bg-accent data-expanded:text-accent-foreground",
        props.class,
      )}
      {...rest}
    >
      {props.children}
      <svg
        viewBox="0 0 24 24"
        class="ml-auto size-3.5 shrink-0"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </ContextMenuPrimitive.SubTrigger>
  );
}

export function ContextMenuSubContent(props: ContextMenuSubContentProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ContextMenuPrimitive.SubContent
      ref={props.ref}
      class={cn(surfaceClass, props.class)}
      {...rest}
    />
  );
}

export function ContextMenuSeparator(props: ContextMenuSeparatorProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ContextMenuPrimitive.Separator
      ref={props.ref}
      class={cn(
        "-mx-1 my-1 h-px bg-border/50 data-[orientation=vertical]:mx-0 data-[orientation=vertical]:my-0 data-[orientation=vertical]:h-auto data-[orientation=vertical]:w-px",
        props.class,
      )}
      {...rest}
    />
  );
}

export const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
export const ContextMenuPortal = ContextMenuPrimitive.Portal;
export const ContextMenuArrow = ContextMenuPrimitive.Arrow;
export const ContextMenuSub = ContextMenuPrimitive.Sub;

export const ContextMenu = Object.assign(ContextMenuRoot, {
  Trigger: ContextMenuTrigger,
  Portal: ContextMenuPortal,
  Content: ContextMenuContent,
  Arrow: ContextMenuArrow,
  Item: ContextMenuItem,
  ItemLabel: ContextMenuItemLabel,
  ItemDescription: ContextMenuItemDescription,
  ItemIndicator: ContextMenuItemIndicator,
  CheckboxItem: ContextMenuCheckboxItem,
  RadioGroup: ContextMenuRadioGroup,
  RadioItem: ContextMenuRadioItem,
  Group: ContextMenuGroup,
  GroupLabel: ContextMenuGroupLabel,
  Icon: ContextMenuIcon,
  Sub: ContextMenuSub,
  SubTrigger: ContextMenuSubTrigger,
  SubContent: ContextMenuSubContent,
  Separator: ContextMenuSeparator,
  useContext: useContextMenuContext,
});
