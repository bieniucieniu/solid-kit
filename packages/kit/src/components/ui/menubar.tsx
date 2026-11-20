import { Menubar as MenubarPrimitive } from "@ui-sdk/solid/menubar";
import { MenuTrigger as MenuTriggerPrimitive } from "@ui-sdk/solid/menu";
import { type ComponentProps, omit } from "solid-js";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuItemDescription,
  MenuItemIcon,
  MenuItemLabel,
  MenuRadioGroup,
  MenuSeparator,
  MenuShortcut,
  MenuSubContent,
  MenuSubTrigger,
  createMenuCheckboxItem,
  createMenuItemIndicator,
  createMenuRadioItem,
} from "./menu-parts";
import { partClass } from "#kit/lib/utils";

export { MenuSub as MenubarSub } from "@ui-sdk/solid/menu";

/** A bar of menus. Each `MenubarMenu` inside joins it. */
export function Menubar(props: ComponentProps<typeof MenubarPrimitive>) {
  const rest = omit(props, "class");
  return (
    <MenubarPrimitive
      class={partClass("flex h-9 items-center rounded-lg border p-1", props.class)}
      {...rest}
    />
  );
}

export const MenubarMenu = Menu;

export function MenubarTrigger(props: ComponentProps<typeof MenuTriggerPrimitive>) {
  const rest = omit(props, "class");
  return (
    <MenuTriggerPrimitive
      class={partClass(
        "flex items-center rounded-[calc(var(--radius-md)-2px)] px-2 py-[calc(--spacing(0.85))] text-xs/relaxed font-medium outline-hidden select-none hover:bg-muted focus-visible:bg-muted data-open:bg-muted data-disabled:opacity-50",
        props.class,
      )}
      {...rest}
    />
  );
}

export const MenubarContent = MenuContent;
export const MenubarItem = MenuItem;
export const MenubarItemLabel = MenuItemLabel;
export const MenubarItemDescription = MenuItemDescription;
export const MenubarItemIndicator = createMenuItemIndicator("start");
export const MenubarCheckboxItem = createMenuCheckboxItem("start");
export const MenubarRadioGroup = MenuRadioGroup;
export const MenubarRadioItem = createMenuRadioItem("start");
export const MenubarGroup = MenuGroup;
export const MenubarGroupLabel = MenuGroupLabel;
export const MenubarIcon = MenuItemIcon;
export const MenubarSubTrigger = MenuSubTrigger;
export const MenubarSubContent = MenuSubContent;
export const MenubarSeparator = MenuSeparator;
export const MenubarShortcut = MenuShortcut;
