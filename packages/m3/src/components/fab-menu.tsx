import { DropdownMenu as DropdownMenuPrimitive } from "@kobalte/core/dropdown-menu";
import { type ComponentProps, createContext, splitProps, useContext } from "solid-js";
import { cn } from "@/lib/utils";

export type FabMenuColor = "primary" | "secondary" | "tertiary";

const FabMenuContext = createContext<{ color: FabMenuColor }>({ color: "primary" });

/** Closed: the tonal FAB. Open: a round button in the solid accent, showing a close icon. */
const triggerColorClasses = {
  primary:
    "bg-primary-container text-on-primary-container data-expanded:bg-primary data-expanded:text-on-primary",
  secondary:
    "bg-secondary-container text-on-secondary-container data-expanded:bg-secondary data-expanded:text-on-secondary",
  tertiary:
    "bg-tertiary-container text-on-tertiary-container data-expanded:bg-tertiary data-expanded:text-on-tertiary",
};

const itemColorClasses = {
  primary: "bg-primary-container text-on-primary-container",
  secondary: "bg-secondary-container text-on-secondary-container",
  tertiary: "bg-tertiary-container text-on-tertiary-container",
};

type FabMenuProps = ComponentProps<typeof DropdownMenuPrimitive> & { color?: FabMenuColor };
type FabMenuTriggerProps = ComponentProps<typeof DropdownMenuPrimitive.Trigger>;
type FabMenuContentProps = ComponentProps<typeof DropdownMenuPrimitive.Content>;
type FabMenuItemProps = ComponentProps<typeof DropdownMenuPrimitive.Item>;

/** A FAB that opens a short list of related actions above it. */
export function FabMenu(props: FabMenuProps) {
  const [, rest] = splitProps(props, ["color"]);
  return (
    <FabMenuContext.Provider
      value={{
        get color() {
          return props.color ?? "primary";
        },
      }}
    >
      <DropdownMenuPrimitive placement="top-end" gutter={8} {...rest} />
    </FabMenuContext.Provider>
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
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  return (
    <DropdownMenuPrimitive.Trigger
      ref={props.ref}
      data-slot="fab-menu-trigger"
      class={cn(
        "group/fab-menu-trigger relative inline-flex size-14 shrink-0 cursor-pointer items-center justify-center rounded-large shadow-level-3 select-none state-layer focus-ring motion-fast hover:shadow-level-4 data-expanded:rounded-[1.75rem] [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0",
        triggerColorClasses[context.color],
        props.class,
      )}
      {...rest}
    >
      <span class="contents group-data-expanded/fab-menu-trigger:hidden">{props.children}</span>
      <span class="hidden group-data-expanded/fab-menu-trigger:contents">
        <CloseIcon />
      </span>
    </DropdownMenuPrimitive.Trigger>
  );
}

export function FabMenuContent(props: FabMenuContentProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <DropdownMenuPrimitive.Content
      ref={props.ref}
      data-slot="fab-menu-content"
      class={cn(
        "z-50 flex origin-(--kb-menu-content-transform-origin) flex-col items-end gap-1 outline-none data-expanded:animate-in data-expanded:fade-in-0 data-expanded:slide-in-from-bottom-4 data-closed:animate-out data-closed:fade-out-0 data-closed:slide-out-to-bottom-4",
        props.class,
      )}
      {...rest}
    />
  );
}

/** A pill-shaped action. Put an icon and a label inside. */
export function FabMenuItem(props: FabMenuItemProps) {
  const context = useContext(FabMenuContext);
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <DropdownMenuPrimitive.Item
      ref={props.ref}
      data-slot="fab-menu-item"
      class={cn(
        "relative flex h-14 cursor-pointer items-center gap-2 rounded-full px-6 typescale-title-medium shadow-level-3 outline-none select-none state-layer motion-fast data-disabled:pointer-events-none data-disabled:opacity-38 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0",
        itemColorClasses[context.color],
        props.class,
      )}
      {...rest}
    />
  );
}

export const FabMenuPortal = DropdownMenuPrimitive.Portal;
