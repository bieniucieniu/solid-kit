import { MenuContextTrigger as MenuContextTriggerPrimitive } from "@ui-sdk/solid/menu";
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
import { partClass } from "#/lib/utils";

export { MenuSub as ContextMenuSub } from "@ui-sdk/solid/menu";

/** A menu that opens at the pointer on right-click or long-press inside `ContextMenuTrigger`. */
export const ContextMenu = Menu;

/** The area that opens the menu. It renders a `div`. */
export function ContextMenuTrigger(props: ComponentProps<typeof MenuContextTriggerPrimitive>) {
  const rest = omit(props, "class");
  return <MenuContextTriggerPrimitive class={partClass("select-none", props.class)} {...rest} />;
}

export const ContextMenuContent = MenuContent;
export const ContextMenuItem = MenuItem;
export const ContextMenuItemLabel = MenuItemLabel;
export const ContextMenuItemDescription = MenuItemDescription;
export const ContextMenuItemIndicator = createMenuItemIndicator("end");
export const ContextMenuCheckboxItem = createMenuCheckboxItem("end");
export const ContextMenuRadioGroup = MenuRadioGroup;
export const ContextMenuRadioItem = createMenuRadioItem("end");
export const ContextMenuGroup = MenuGroup;
export const ContextMenuGroupLabel = MenuGroupLabel;
export const ContextMenuIcon = MenuItemIcon;
export const ContextMenuSubTrigger = MenuSubTrigger;
export const ContextMenuSubContent = MenuSubContent;
export const ContextMenuSeparator = MenuSeparator;
export const ContextMenuShortcut = MenuShortcut;
