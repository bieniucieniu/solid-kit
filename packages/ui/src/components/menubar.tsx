import { Menubar as MenubarPrimitive, useMenubarContext } from "@kobalte/core/menubar";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

const surfaceClass =
  "z-50 min-w-32 rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-none";
const itemClass =
  "flex min-h-7 cursor-default items-center gap-2 rounded-md px-2 py-1 text-xs/relaxed outline-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-50";

type MenubarRootProps = ComponentProps<typeof MenubarPrimitive>;
type MenubarTriggerProps = ComponentProps<typeof MenubarPrimitive.Trigger>;
type MenubarContentProps = ComponentProps<typeof MenubarPrimitive.Content>;
type MenubarItemProps = ComponentProps<typeof MenubarPrimitive.Item>;
type MenubarItemLabelProps = ComponentProps<typeof MenubarPrimitive.ItemLabel>;
type MenubarItemDescriptionProps = ComponentProps<typeof MenubarPrimitive.ItemDescription>;
type MenubarItemIndicatorProps = ComponentProps<typeof MenubarPrimitive.ItemIndicator>;
type MenubarCheckboxItemProps = ComponentProps<typeof MenubarPrimitive.CheckboxItem>;
type MenubarRadioGroupProps = ComponentProps<typeof MenubarPrimitive.RadioGroup>;
type MenubarRadioItemProps = ComponentProps<typeof MenubarPrimitive.RadioItem>;
type MenubarGroupProps = ComponentProps<typeof MenubarPrimitive.Group>;
type MenubarGroupLabelProps = ComponentProps<typeof MenubarPrimitive.GroupLabel>;
type MenubarIconProps = ComponentProps<typeof MenubarPrimitive.Icon>;
type MenubarSubTriggerProps = ComponentProps<typeof MenubarPrimitive.SubTrigger>;
type MenubarSubContentProps = ComponentProps<typeof MenubarPrimitive.SubContent>;
type MenubarSeparatorProps = ComponentProps<typeof MenubarPrimitive.Separator>;

function MenubarRoot(props: MenubarRootProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <MenubarPrimitive
      ref={props.ref}
      class={cn("flex h-9 items-center rounded-lg border p-1", props.class)}
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

export function MenubarTrigger(props: MenubarTriggerProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <MenubarPrimitive.Trigger
      ref={props.ref}
      class={cn(
        "rounded-[calc(var(--radius-md)-2px)] px-2 py-[calc(--spacing(0.85))] text-xs/relaxed font-medium hover:bg-muted data-highlighted:bg-muted data-expanded:bg-muted data-disabled:opacity-50 focus-visible:outline-none",
        props.class,
      )}
      {...rest}
    />
  );
}

export function MenubarContent(props: MenubarContentProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <MenubarPrimitive.Content ref={props.ref} class={cn(surfaceClass, props.class)} {...rest} />
  );
}

export function MenubarItem(props: MenubarItemProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return <MenubarPrimitive.Item ref={props.ref} class={cn(itemClass, props.class)} {...rest} />;
}

export function MenubarItemLabel(props: MenubarItemLabelProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <MenubarPrimitive.ItemLabel
      ref={props.ref}
      class={cn("text-xs text-foreground", props.class)}
      {...rest}
    />
  );
}

export function MenubarItemDescription(props: MenubarItemDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <MenubarPrimitive.ItemDescription
      ref={props.ref}
      class={cn("text-xs text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function MenubarItemIndicator(props: MenubarItemIndicatorProps) {
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  return (
    <MenubarPrimitive.ItemIndicator
      ref={props.ref}
      class={cn(
        "pointer-events-none flex size-3.5 shrink-0 items-center justify-center",
        props.class,
      )}
      {...rest}
    >
      {props.children ?? <CheckIcon />}
    </MenubarPrimitive.ItemIndicator>
  );
}

export function MenubarCheckboxItem(props: MenubarCheckboxItemProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <MenubarPrimitive.CheckboxItem
      ref={props.ref}
      class={cn(itemClass, "data-checked:text-foreground", props.class)}
      {...rest}
    />
  );
}

export function MenubarRadioGroup(props: MenubarRadioGroupProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <MenubarPrimitive.RadioGroup
      ref={props.ref}
      class={cn("flex flex-col", props.class)}
      {...rest}
    />
  );
}

export function MenubarRadioItem(props: MenubarRadioItemProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <MenubarPrimitive.RadioItem
      ref={props.ref}
      class={cn(itemClass, "data-checked:text-foreground", props.class)}
      {...rest}
    />
  );
}

export function MenubarGroup(props: MenubarGroupProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <MenubarPrimitive.Group ref={props.ref} class={cn("flex flex-col", props.class)} {...rest} />
  );
}

export function MenubarGroupLabel(props: MenubarGroupLabelProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <MenubarPrimitive.GroupLabel
      ref={props.ref}
      class={cn("px-2 py-1.5 text-xs text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function MenubarIcon(props: MenubarIconProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <MenubarPrimitive.Icon
      ref={props.ref}
      class={cn("size-3.5 shrink-0 text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function MenubarSubTrigger(props: MenubarSubTriggerProps) {
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  return (
    <MenubarPrimitive.SubTrigger
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
    </MenubarPrimitive.SubTrigger>
  );
}

export function MenubarSubContent(props: MenubarSubContentProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <MenubarPrimitive.SubContent ref={props.ref} class={cn(surfaceClass, props.class)} {...rest} />
  );
}

export function MenubarSeparator(props: MenubarSeparatorProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <MenubarPrimitive.Separator
      ref={props.ref}
      class={cn(
        "-mx-1 my-1 h-px bg-border/50 data-[orientation=vertical]:mx-0 data-[orientation=vertical]:my-0 data-[orientation=vertical]:h-auto data-[orientation=vertical]:w-px",
        props.class,
      )}
      {...rest}
    />
  );
}

export const MenubarMenu = MenubarPrimitive.Menu;
export const MenubarPortal = MenubarPrimitive.Portal;
export const MenubarArrow = MenubarPrimitive.Arrow;
export const MenubarSub = MenubarPrimitive.Sub;

export const Menubar = Object.assign(MenubarRoot, {
  Menu: MenubarMenu,
  Trigger: MenubarTrigger,
  Portal: MenubarPortal,
  Content: MenubarContent,
  Arrow: MenubarArrow,
  Item: MenubarItem,
  ItemLabel: MenubarItemLabel,
  ItemDescription: MenubarItemDescription,
  ItemIndicator: MenubarItemIndicator,
  CheckboxItem: MenubarCheckboxItem,
  RadioGroup: MenubarRadioGroup,
  RadioItem: MenubarRadioItem,
  Group: MenubarGroup,
  GroupLabel: MenubarGroupLabel,
  Icon: MenubarIcon,
  Sub: MenubarSub,
  SubTrigger: MenubarSubTrigger,
  SubContent: MenubarSubContent,
  Separator: MenubarSeparator,
  useContext: useMenubarContext,
});
