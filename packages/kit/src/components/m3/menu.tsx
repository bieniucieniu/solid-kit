import {
  Menu as MenuRootPrimitive,
  MenuCheckboxItem as MenuCheckboxItemPrimitive,
  MenuContent as MenuContentPrimitive,
  MenuGroup as MenuGroupPrimitive,
  MenuGroupLabel as MenuGroupLabelPrimitive,
  MenuItem as MenuItemPrimitive,
  MenuItemIndicator as MenuItemIndicatorPrimitive,
  MenuRadioGroup as MenuRadioGroupPrimitive,
  MenuRadioItem as MenuRadioItemPrimitive,
  MenuSeparator as MenuSeparatorPrimitive,
  MenuSub as MenuSubPrimitive,
  MenuSubContent as MenuSubContentPrimitive,
  MenuSubTrigger as MenuSubTriggerPrimitive,
  MenuTrigger as MenuTriggerPrimitive,
} from "@ui-sdk/solid/menu";
import { type JSX } from "@solidjs/web";
import { type ComponentProps, omit } from "solid-js";
import { cn, partClass } from "#kit/lib/utils";

const surfaceClass =
  "z-50 flex max-h-(--available-height) min-w-28 max-w-70 origin-(--transform-origin) flex-col gap-0.5 overflow-y-auto rounded-large bg-surface-container p-1 text-on-surface shadow-level-2 outline-none transition-[opacity,scale] duration-150 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0";

const itemClass =
  "group/menu-item relative flex min-h-11 cursor-pointer items-center gap-3 rounded-medium px-3 py-2 typescale-label-large text-on-surface outline-none select-none state-layer motion-fast data-disabled:pointer-events-none data-disabled:text-on-surface/38 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5";

/** Checked items fill with the tertiary container (M3 Expressive selected item). */
const selectableItemClass =
  "data-checked:bg-tertiary-container data-checked:text-on-tertiary-container data-checked:rounded-large";

type MenuProps = ComponentProps<typeof MenuRootPrimitive>;
type MenuContentProps = ComponentProps<typeof MenuContentPrimitive>;
type MenuItemProps = ComponentProps<typeof MenuItemPrimitive>;
type MenuItemLabelProps = JSX.HTMLAttributes<HTMLSpanElement>;
type MenuItemDescriptionProps = JSX.HTMLAttributes<HTMLSpanElement>;
type MenuItemIndicatorProps = ComponentProps<typeof MenuItemIndicatorPrimitive>;
type MenuCheckboxItemProps = ComponentProps<typeof MenuCheckboxItemPrimitive>;
type MenuRadioGroupProps = ComponentProps<typeof MenuRadioGroupPrimitive>;
type MenuRadioItemProps = ComponentProps<typeof MenuRadioItemPrimitive>;
type MenuGroupProps = ComponentProps<typeof MenuGroupPrimitive>;
type MenuGroupLabelProps = ComponentProps<typeof MenuGroupLabelPrimitive>;
type MenuSubTriggerProps = ComponentProps<typeof MenuSubTriggerPrimitive>;
type MenuSubContentProps = ComponentProps<typeof MenuSubContentPrimitive>;
type MenuSeparatorProps = ComponentProps<typeof MenuSeparatorPrimitive>;

export function Menu(props: MenuProps) {
  return <MenuRootPrimitive {...props} />;
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="ml-auto">
      <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    </svg>
  );
}

export function MenuContent(props: MenuContentProps) {
  const rest = omit(props, "class");
  return (
    <MenuContentPrimitive
      sideOffset={4}
      class={partClass(() => cn(surfaceClass), props.class)}
      {...rest}
    />
  );
}

export function MenuItem(props: MenuItemProps) {
  const rest = omit(props, "class");
  return <MenuItemPrimitive class={partClass(() => cn(itemClass), props.class)} {...rest} />;
}

/** Leading icon slot, in on-surface-variant. */
export function MenuItemIcon(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  const rest = omit(props, "class");
  return (
    <span
      ref={props.ref}
      data-slot="menu-item-icon"
      class={cn(
        "flex shrink-0 text-on-surface-variant group-data-checked/menu-item:text-on-tertiary-container group-data-disabled/menu-item:text-on-surface/38",
        props.class,
      )}
      {...rest}
    />
  );
}

/** Labels a MenuItem, MenuCheckboxItem, or MenuRadioItem. In MenuSubTrigger use a plain span. */
export function MenuItemLabel(props: MenuItemLabelProps) {
  const rest = omit(props, "class");
  return (
    <span
      ref={props.ref}
      data-slot="menu-item-label"
      class={cn("flex-1 truncate", props.class)}
      {...rest}
    />
  );
}

export function MenuItemDescription(props: MenuItemDescriptionProps) {
  const rest = omit(props, "class");
  return (
    <span
      ref={props.ref}
      data-slot="menu-item-description"
      class={cn("typescale-body-small text-on-surface-variant", props.class)}
      {...rest}
    />
  );
}

export function MenuItemIndicator(props: MenuItemIndicatorProps) {
  const rest = omit(props, "class", "children");
  return (
    <MenuItemIndicatorPrimitive
      class={partClass(() => cn("ml-auto flex shrink-0"), props.class)}
      {...rest}
    >
      {props.children ?? <CheckIcon />}
    </MenuItemIndicatorPrimitive>
  );
}

/** Trailing text such as a keyboard shortcut. */
export function MenuShortcut(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  const rest = omit(props, "class");
  return (
    <span
      ref={props.ref}
      data-slot="menu-shortcut"
      class={cn("ml-auto typescale-label-large text-on-surface-variant", props.class)}
      {...rest}
    />
  );
}

export function MenuCheckboxItem(props: MenuCheckboxItemProps) {
  const rest = omit(props, "class");
  return (
    <MenuCheckboxItemPrimitive
      class={partClass(() => cn(itemClass, selectableItemClass), props.class)}
      {...rest}
    />
  );
}

export function MenuRadioGroup(props: MenuRadioGroupProps) {
  const rest = omit(props, "class");
  return (
    <MenuRadioGroupPrimitive
      class={partClass(() => cn("flex flex-col gap-0.5"), props.class)}
      {...rest}
    />
  );
}

export function MenuRadioItem(props: MenuRadioItemProps) {
  const rest = omit(props, "class");
  return (
    <MenuRadioItemPrimitive
      class={partClass(() => cn(itemClass, selectableItemClass), props.class)}
      {...rest}
    />
  );
}

export function MenuGroup(props: MenuGroupProps) {
  const rest = omit(props, "class");
  return (
    <MenuGroupPrimitive
      class={partClass(() => cn("flex flex-col gap-0.5"), props.class)}
      {...rest}
    />
  );
}

export function MenuGroupLabel(props: MenuGroupLabelProps) {
  const rest = omit(props, "class");
  return (
    <MenuGroupLabelPrimitive
      class={partClass(
        () => cn("px-3 pt-2 pb-1 typescale-label-medium text-on-surface-variant"),
        props.class,
      )}
      {...rest}
    />
  );
}

export function MenuSubTrigger(props: MenuSubTriggerProps) {
  const rest = omit(props, "class", "children");
  return (
    <MenuSubTriggerPrimitive
      class={partClass(() => cn(itemClass, "data-open:bg-on-surface/8"), props.class)}
      {...rest}
    >
      {props.children}
      <ChevronRightIcon />
    </MenuSubTriggerPrimitive>
  );
}

export function MenuSubContent(props: MenuSubContentProps) {
  const rest = omit(props, "class");
  return (
    <MenuSubContentPrimitive class={partClass(() => cn(surfaceClass), props.class)} {...rest} />
  );
}

export function MenuSeparator(props: MenuSeparatorProps) {
  const rest = omit(props, "class");
  return (
    <MenuSeparatorPrimitive
      class={partClass(() => cn("mx-3 my-1 h-px border-none bg-outline-variant"), props.class)}
      {...rest}
    />
  );
}

export const MenuTrigger = MenuTriggerPrimitive;
export const MenuSub = MenuSubPrimitive;
