import type { JSX } from "@solidjs/web";
import {
  Menu as MenuPrimitive,
  MenuCheckboxItem as MenuCheckboxItemPrimitive,
  MenuContent as MenuContentPrimitive,
  MenuGroup as MenuGroupPrimitive,
  MenuGroupLabel as MenuGroupLabelPrimitive,
  MenuItem as MenuItemPrimitive,
  MenuItemIcon as MenuItemIconPrimitive,
  MenuItemIndicator as MenuItemIndicatorPrimitive,
  MenuRadioGroup as MenuRadioGroupPrimitive,
  MenuRadioItem as MenuRadioItemPrimitive,
  MenuSeparator as MenuSeparatorPrimitive,
  MenuShortcut as MenuShortcutPrimitive,
  MenuSubContent as MenuSubContentPrimitive,
  MenuSubTrigger as MenuSubTriggerPrimitive,
} from "@ui-sdk/solid/menu";
import { type ComponentProps, omit } from "solid-js";
import { cn, partClass, popupMotion } from "#kit/lib/utils";

// Styled ui-sdk Menu parts, shared by DropdownMenu, ContextMenu and Menubar. Each of those
// files re-exports them under its own names.

const surfaceClass = [
  "z-50 max-h-(--available-height) min-w-32 overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-none",
  popupMotion,
];

const itemClass =
  "group/menu-item relative flex min-h-7 cursor-default items-center gap-2 rounded-md px-2 py-1 text-xs/relaxed outline-hidden select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground not-data-destructive:data-highlighted:**:text-accent-foreground data-destructive:text-destructive data-destructive:data-highlighted:bg-destructive/10 data-destructive:data-highlighted:text-destructive dark:data-destructive:data-highlighted:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 data-pending:cursor-progress [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5 data-destructive:*:[svg]:text-destructive";

/** Check and radio items leave room for the indicator on the side given by `indicatorSide`. */
const checkItemClass = (indicatorSide: "start" | "end") =>
  cn(
    "group/menu-item relative flex min-h-7 cursor-default items-center gap-2 rounded-md py-1.5 text-xs outline-hidden select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-highlighted:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
    indicatorSide === "end" ? "pr-8 pl-2" : "pr-2 pl-7.5",
  );

const subTriggerClass =
  "group/menu-item flex min-h-7 cursor-default items-center gap-2 rounded-md px-2 py-1 text-xs outline-hidden select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-highlighted:**:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5";

export function CheckIcon() {
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

export function Menu(props: ComponentProps<typeof MenuPrimitive>) {
  return <MenuPrimitive {...props} />;
}

/** Sits 4px off its trigger, and scrolls once it runs out of room. */
export function MenuContent(props: ComponentProps<typeof MenuContentPrimitive>) {
  const rest = omit(props, "class");
  return (
    <MenuContentPrimitive sideOffset={4} class={partClass(surfaceClass, props.class)} {...rest} />
  );
}

export function MenuSubContent(props: ComponentProps<typeof MenuSubContentPrimitive>) {
  const rest = omit(props, "class");
  return <MenuSubContentPrimitive class={partClass(surfaceClass, props.class)} {...rest} />;
}

export type MenuItemProps = ComponentProps<typeof MenuItemPrimitive> & {
  /** The 1.9 spelling of `destructive`. */
  variant?: "default" | "destructive";
};

/** One command. Give it a `value` for the menu's `onAction`, or an `onSelect`. */
export function MenuItem(props: MenuItemProps) {
  const rest = omit(props, "class", "variant", "destructive");
  return (
    <MenuItemPrimitive
      destructive={props.destructive ?? props.variant === "destructive"}
      class={partClass(itemClass, props.class)}
      {...rest}
    />
  );
}

/** The item's main text, for an item that also has a description. */
export function MenuItemLabel(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  const rest = omit(props, "class");
  return (
    <span
      data-slot="menu-item-label"
      class={cn("text-xs text-foreground", props.class)}
      {...rest}
    />
  );
}

export function MenuItemDescription(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  const rest = omit(props, "class");
  return (
    <span
      data-slot="menu-item-description"
      class={cn("text-xs text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function createMenuItemIndicator(side: "start" | "end") {
  return function MenuItemIndicator(props: ComponentProps<typeof MenuItemIndicatorPrimitive>) {
    const rest = omit(props, "class", "children");
    return (
      <MenuItemIndicatorPrimitive
        class={partClass(
          side === "end"
            ? "pointer-events-none absolute right-2 flex items-center justify-center"
            : "pointer-events-none absolute left-2 flex size-4 items-center justify-center [&_svg:not([class*='size-'])]:size-4",
          props.class,
        )}
        {...rest}
      >
        {(props.children as JSX.Element) ?? <CheckIcon />}
      </MenuItemIndicatorPrimitive>
    );
  };
}

export function createMenuCheckboxItem(side: "start" | "end") {
  return function MenuCheckboxItem(props: ComponentProps<typeof MenuCheckboxItemPrimitive>) {
    const rest = omit(props, "class");
    return (
      <MenuCheckboxItemPrimitive class={partClass(checkItemClass(side), props.class)} {...rest} />
    );
  };
}

export function createMenuRadioItem(side: "start" | "end") {
  return function MenuRadioItem(props: ComponentProps<typeof MenuRadioItemPrimitive>) {
    const rest = omit(props, "class");
    return (
      <MenuRadioItemPrimitive class={partClass(checkItemClass(side), props.class)} {...rest} />
    );
  };
}

export function MenuRadioGroup(props: ComponentProps<typeof MenuRadioGroupPrimitive>) {
  const rest = omit(props, "class");
  return <MenuRadioGroupPrimitive class={partClass("flex flex-col", props.class)} {...rest} />;
}

export function MenuGroup(props: ComponentProps<typeof MenuGroupPrimitive>) {
  const rest = omit(props, "class");
  return <MenuGroupPrimitive class={partClass("flex flex-col", props.class)} {...rest} />;
}

export function MenuGroupLabel(props: ComponentProps<typeof MenuGroupLabelPrimitive>) {
  const rest = omit(props, "class");
  return (
    <MenuGroupLabelPrimitive
      class={partClass("px-2 py-1.5 text-xs text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function MenuItemIcon(props: ComponentProps<typeof MenuItemIconPrimitive>) {
  const rest = omit(props, "class");
  return (
    <MenuItemIconPrimitive
      class={partClass("size-3.5 shrink-0 text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function MenuSubTrigger(props: ComponentProps<typeof MenuSubTriggerPrimitive>) {
  const rest = omit(props, "class", "children");
  return (
    <MenuSubTriggerPrimitive class={partClass(subTriggerClass, props.class)} {...rest}>
      {props.children as JSX.Element}
      <svg
        viewBox="0 0 24 24"
        class="ml-auto"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </MenuSubTriggerPrimitive>
  );
}

export function MenuSeparator(props: ComponentProps<typeof MenuSeparatorPrimitive>) {
  const rest = omit(props, "class");
  return (
    <MenuSeparatorPrimitive
      class={partClass(
        "-mx-1 my-1 h-px bg-border/50 data-[orientation=vertical]:mx-0 data-[orientation=vertical]:my-0 data-[orientation=vertical]:h-auto data-[orientation=vertical]:w-px",
        props.class,
      )}
      {...rest}
    />
  );
}

/** Shows an item's `shortcut`, or the keys you pass. */
export function MenuShortcut(props: ComponentProps<typeof MenuShortcutPrimitive>) {
  const rest = omit(props, "class");
  return (
    <MenuShortcutPrimitive
      class={partClass(
        "ml-auto text-[0.625rem] tracking-widest text-muted-foreground group-data-highlighted/menu-item:text-accent-foreground",
        props.class,
      )}
      {...rest}
    />
  );
}
