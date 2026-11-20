import type { JSX } from "@solidjs/web";
import {
  Drawer as DrawerPrimitive,
  DrawerBackdrop as DrawerBackdropPrimitive,
  DrawerClose as DrawerClosePrimitive,
  DrawerContent as DrawerContentPrimitive,
  DrawerDescription as DrawerDescriptionPrimitive,
  DrawerTitle as DrawerTitlePrimitive,
  DrawerTrigger as DrawerTriggerPrimitive,
} from "@ui-sdk/solid/drawer";
import { type ComponentProps, Show, omit } from "solid-js";
import { type ButtonSize, type ButtonVariant, buttonVariants } from "./button";
import { cn, partClass } from "#kit/lib/utils";

// A sheet is ui-sdk's Drawer from a side edge: it slides in, and can be swiped away.

type SheetSide = "top" | "right" | "bottom" | "left";

/** A panel from an edge of the screen. `side` defaults to `right`. */
export function Sheet(props: ComponentProps<typeof DrawerPrimitive>) {
  const rest = omit(props, "side");
  return <DrawerPrimitive side={props.side ?? "right"} {...rest} />;
}

export function SheetTrigger(props: ComponentProps<typeof DrawerTriggerPrimitive>) {
  return <DrawerTriggerPrimitive {...props} />;
}

export function SheetOverlay(props: ComponentProps<typeof DrawerBackdropPrimitive>) {
  const rest = omit(props, "class");
  return (
    <DrawerBackdropPrimitive
      class={partClass(
        "fixed inset-0 z-50 bg-black/80 supports-backdrop-filter:backdrop-blur-xs",
        props.class,
      )}
      {...rest}
    />
  );
}

export function SheetContent(
  props: ComponentProps<typeof DrawerContentPrimitive> & {
    /** Set the side on `Sheet`. Kept here for 1.9 call sites; it is ignored. */
    side?: SheetSide;
    showCloseButton?: boolean;
  },
) {
  const rest = omit(props, "class", "children", "side", "showCloseButton");
  return (
    <DrawerContentPrimitive
      data-close-button={(props.showCloseButton ?? true) ? "" : undefined}
      class={partClass(
        "z-50 flex flex-col gap-4 bg-popover bg-clip-padding p-6 text-xs/relaxed text-popover-foreground shadow-lg outline-none data-[side=bottom]:h-auto data-[side=bottom]:w-full data-[side=bottom]:border-t data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:h-auto data-[side=top]:w-full data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm",
        props.class,
      )}
      {...rest}
    >
      {props.children as JSX.Element}
      <Show when={props.showCloseButton ?? true}>
        <DrawerClosePrimitive
          aria-label="Close"
          class={buttonVariants({
            variant: "ghost",
            size: "icon-sm",
            class: "absolute top-4 right-4",
          })}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </DrawerClosePrimitive>
      </Show>
    </DrawerContentPrimitive>
  );
}

export function SheetHeader(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const rest = omit(props, "class");
  return (
    <div
      data-slot="sheet-header"
      class={cn("flex flex-col gap-1.5 in-data-close-button:pr-8", props.class)}
      {...rest}
    />
  );
}

export function SheetFooter(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const rest = omit(props, "class");
  return (
    <div
      data-slot="sheet-footer"
      class={cn("mt-auto flex flex-col gap-2", props.class)}
      {...rest}
    />
  );
}

export function SheetTitle(props: ComponentProps<typeof DrawerTitlePrimitive>) {
  const rest = omit(props, "class");
  return (
    <DrawerTitlePrimitive
      class={partClass("text-sm font-medium text-foreground", props.class)}
      {...rest}
    />
  );
}

/** The 1.9 name for the title. */
export const SheetLabel = SheetTitle;

export function SheetDescription(props: ComponentProps<typeof DrawerDescriptionPrimitive>) {
  const rest = omit(props, "class");
  return (
    <DrawerDescriptionPrimitive
      class={partClass("text-xs/relaxed text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function SheetClose(
  props: ComponentProps<typeof DrawerClosePrimitive> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
  },
) {
  const rest = omit(props, "class", "variant", "size");
  return (
    <DrawerClosePrimitive
      class={partClass(
        () => buttonVariants({ variant: props.variant ?? "outline", size: props.size }),
        props.class,
      )}
      {...rest}
    />
  );
}
