import {
  Menu as MenuRootPrimitive,
  MenuContent as MenuContentPrimitive,
  MenuItem as MenuItemPrimitive,
  MenuTrigger as MenuTriggerPrimitive,
} from "@ui-sdk/solid/menu";
import type { JSX } from "@solidjs/web";
import { type ComponentProps, createContext, omit, useContext } from "solid-js";
import { cn, partClass } from "#/lib/utils";

export type FabMenuColor = "primary" | "secondary" | "tertiary";

const FabMenuContext = createContext<{ color: FabMenuColor }>({ color: "primary" });

/** Closed: the tonal FAB. Open: a round button in the solid accent, showing a close icon. */
const triggerColorClasses = {
  primary:
    "bg-primary-container text-on-primary-container data-open:bg-primary data-open:text-on-primary",
  secondary:
    "bg-secondary-container text-on-secondary-container data-open:bg-secondary data-open:text-on-secondary",
  tertiary:
    "bg-tertiary-container text-on-tertiary-container data-open:bg-tertiary data-open:text-on-tertiary",
};

const itemColorClasses = {
  primary: "bg-primary-container text-on-primary-container",
  secondary: "bg-secondary-container text-on-secondary-container",
  tertiary: "bg-tertiary-container text-on-tertiary-container",
};

type FabMenuProps = ComponentProps<typeof MenuRootPrimitive> & { color?: FabMenuColor };
type FabMenuTriggerProps = ComponentProps<typeof MenuTriggerPrimitive>;
type FabMenuContentProps = ComponentProps<typeof MenuContentPrimitive>;
type FabMenuItemProps = ComponentProps<typeof MenuItemPrimitive>;

/** A FAB that opens a short list of related actions above it. */
export function FabMenu(props: FabMenuProps) {
  const rest = omit(props, "color");
  return (
    <FabMenuContext
      value={{
        get color() {
          return props.color ?? "primary";
        },
      }}
    >
      <MenuRootPrimitive {...rest} />
    </FabMenuContext>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  );
}

/** Shows its children (the FAB icon) while closed and a close icon while open. */
export function FabMenuTrigger(props: FabMenuTriggerProps) {
  const context = useContext(FabMenuContext);
  const rest = omit(props, "class", "children");
  return (
    <MenuTriggerPrimitive
      class={partClass(
        () =>
          cn(
            "group/fab-menu-trigger relative inline-flex size-14 shrink-0 cursor-pointer items-center justify-center rounded-large shadow-level-3 select-none state-layer focus-ring motion-fast hover:shadow-level-4 data-open:rounded-[1.75rem] [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0",
            triggerColorClasses[context.color],
          ),
        props.class,
      )}
      {...rest}
    >
      <span class="contents group-data-open/fab-menu-trigger:hidden">
        {props.children as JSX.Element}
      </span>
      <span class="hidden group-data-open/fab-menu-trigger:contents">
        <CloseIcon />
      </span>
    </MenuTriggerPrimitive>
  );
}

export function FabMenuContent(props: FabMenuContentProps) {
  const rest = omit(props, "class");
  return (
    <MenuContentPrimitive
      side="top"
      align="end"
      sideOffset={8}
      class={partClass(
        () =>
          cn(
            "z-50 flex origin-(--transform-origin) flex-col items-end gap-1 outline-none transition-[opacity,translate] duration-200 data-starting-style:translate-y-4 data-starting-style:opacity-0 data-ending-style:translate-y-4 data-ending-style:opacity-0",
          ),
        props.class,
      )}
      {...rest}
    />
  );
}

/** A pill-shaped action. Put an icon and a label inside. */
export function FabMenuItem(props: FabMenuItemProps) {
  const context = useContext(FabMenuContext);
  const rest = omit(props, "class");
  return (
    <MenuItemPrimitive
      class={partClass(
        () =>
          cn(
            "relative flex h-14 cursor-pointer items-center gap-2 rounded-full px-6 typescale-title-medium shadow-level-3 outline-none select-none state-layer motion-fast data-disabled:pointer-events-none data-disabled:opacity-38 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0",
            itemColorClasses[context.color],
          ),
        props.class,
      )}
      {...rest}
    />
  );
}
