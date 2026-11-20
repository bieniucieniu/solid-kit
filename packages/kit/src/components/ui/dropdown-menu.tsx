import { MenuTrigger as MenuTriggerPrimitive } from "@ui-sdk/solid/menu";
import type { ComponentProps } from "solid-js";
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

export { MenuSub as DropdownMenuSub, createMenuController } from "@ui-sdk/solid/menu";

/** A menu of commands from a button. Handle `onAction(value)` here, or `onSelect` on an item. */
export const DropdownMenu = Menu;

export function DropdownMenuTrigger(props: ComponentProps<typeof MenuTriggerPrimitive>) {
  return <MenuTriggerPrimitive {...props} />;
}

export const DropdownMenuContent = MenuContent;
export const DropdownMenuItem = MenuItem;
export const DropdownMenuItemLabel = MenuItemLabel;
export const DropdownMenuItemDescription = MenuItemDescription;
export const DropdownMenuItemIndicator = createMenuItemIndicator("end");
export const DropdownMenuCheckboxItem = createMenuCheckboxItem("end");
export const DropdownMenuRadioGroup = MenuRadioGroup;
export const DropdownMenuRadioItem = createMenuRadioItem("end");
export const DropdownMenuGroup = MenuGroup;
export const DropdownMenuGroupLabel = MenuGroupLabel;
export const DropdownMenuIcon = MenuItemIcon;
export const DropdownMenuSubTrigger = MenuSubTrigger;
export const DropdownMenuSubContent = MenuSubContent;
export const DropdownMenuSeparator = MenuSeparator;
export const DropdownMenuShortcut = MenuShortcut;
