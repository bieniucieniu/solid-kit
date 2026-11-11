import DrawerPrimitive, {
  type CloseProps,
  type ContentProps,
  type DescriptionProps,
  type DynamicProps,
  type LabelProps,
  type OverlayProps,
  type RootProps,
} from "@corvu/drawer";
import { type JSX, splitProps } from "solid-js";
import { type ButtonSize, type ButtonVariant, buttonVariants } from "./button";
import { cn } from "@/lib/utils";

/** Drag-to-dismiss panel. `side` defaults to `bottom`; `snapPoints` adds resting heights. */
export function Drawer(props: RootProps) {
  return <DrawerPrimitive {...props} />;
}

/** Fades with the drawer's open percentage, so it tracks a drag. */
export function DrawerOverlay(props: DynamicProps<"div", OverlayProps>) {
  const [, rest] = splitProps(props, ["class", "ref", "style"]);
  const context = DrawerPrimitive.useContext(props.contextId);
  return (
    <DrawerPrimitive.Overlay
      ref={props.ref}
      data-slot="drawer-overlay"
      class={cn(
        "fixed inset-0 z-50 bg-black/80 supports-backdrop-filter:backdrop-blur-xs data-transitioning:transition-opacity data-transitioning:duration-500 data-transitioning:ease-[cubic-bezier(0.32,0.72,0,1)]",
        props.class,
      )}
      style={{
        opacity: context.openPercentage(),
        ...(typeof props.style === "object" ? props.style : {}),
      }}
      {...rest}
    />
  );
}

export function DrawerContent(props: DynamicProps<"div", ContentProps>) {
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  return (
    <DrawerPrimitive.Content
      ref={props.ref}
      data-slot="drawer-content"
      class={cn(
        "group/drawer-content fixed z-50 flex h-auto flex-col gap-4 bg-popover px-4 pb-4 text-xs/relaxed text-popover-foreground outline-none after:absolute after:bg-inherit data-transitioning:transition-transform data-transitioning:duration-500 data-transitioning:ease-[cubic-bezier(0.32,0.72,0,1)]",
        "data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:mt-24 data-[side=bottom]:max-h-[80vh] data-[side=bottom]:rounded-t-xl data-[side=bottom]:border-t data-[side=bottom]:after:inset-x-0 data-[side=bottom]:after:top-full data-[side=bottom]:after:h-1/2",
        "data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:mb-24 data-[side=top]:max-h-[80vh] data-[side=top]:rounded-b-xl data-[side=top]:border-b data-[side=top]:pt-4 data-[side=top]:after:inset-x-0 data-[side=top]:after:bottom-full data-[side=top]:after:h-1/2",
        "data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:w-3/4 data-[side=left]:rounded-r-xl data-[side=left]:border-r data-[side=left]:pt-4 data-[side=left]:sm:max-w-sm data-[side=left]:after:inset-y-0 data-[side=left]:after:right-full data-[side=left]:after:w-1/2",
        "data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:w-3/4 data-[side=right]:rounded-l-xl data-[side=right]:border-l data-[side=right]:pt-4 data-[side=right]:sm:max-w-sm data-[side=right]:after:inset-y-0 data-[side=right]:after:left-full data-[side=right]:after:w-1/2",
        "border-border",
        props.class,
      )}
      {...rest}
    >
      <div class="mx-auto mt-3 hidden h-1.5 w-[100px] shrink-0 rounded-full bg-muted group-data-[side=bottom]/drawer-content:block" />
      {props.children}
    </DrawerPrimitive.Content>
  );
}

export function DrawerHeader(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      data-slot="drawer-header"
      class={cn("flex flex-col gap-1 text-center md:text-left", props.class)}
      {...rest}
    />
  );
}

export function DrawerFooter(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      data-slot="drawer-footer"
      class={cn("mt-auto flex flex-col gap-2", props.class)}
      {...rest}
    />
  );
}

export function DrawerLabel(props: DynamicProps<"h2", LabelProps>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <DrawerPrimitive.Label
      ref={props.ref}
      data-slot="drawer-title"
      class={cn("text-sm font-medium text-foreground", props.class)}
      {...rest}
    />
  );
}

export function DrawerDescription(props: DynamicProps<"p", DescriptionProps>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <DrawerPrimitive.Description
      ref={props.ref}
      data-slot="drawer-description"
      class={cn("text-xs/relaxed text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function DrawerClose(
  props: DynamicProps<"button", CloseProps> & { variant?: ButtonVariant; size?: ButtonSize },
) {
  const [, rest] = splitProps(props, ["class", "ref", "variant", "size"]);
  return (
    <DrawerPrimitive.Close
      ref={props.ref}
      data-slot="drawer-close"
      class={buttonVariants({
        variant: props.variant ?? "outline",
        size: props.size,
        class: props.class,
      })}
      {...rest}
    />
  );
}

export const DrawerTrigger = DrawerPrimitive.Trigger;
export const DrawerPortal = DrawerPrimitive.Portal;

export const useDrawerContext = DrawerPrimitive.useContext;
