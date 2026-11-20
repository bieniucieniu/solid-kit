import {
  Dialog as DialogRootPrimitive,
  DialogClose as DialogClosePrimitive,
  DialogContent as DialogContentPrimitive,
  DialogDescription as DialogDescriptionPrimitive,
  DialogTitle as DialogTitlePrimitive,
  DialogBackdrop as DialogBackdropPrimitive,
  DialogTrigger as DialogTriggerPrimitive,
} from "@ui-sdk/solid/dialog";
import { type JSX } from "@solidjs/web";
import { type ComponentProps, omit } from "solid-js";
import { cn, partClass } from "#kit/lib/utils";

/** Modal side sheet (ui-sdk dialog). */
export function SideSheet(props: ComponentProps<typeof DialogRootPrimitive>) {
  return <DialogRootPrimitive {...props} />;
}

export function SideSheetOverlay(props: ComponentProps<typeof DialogBackdropPrimitive>) {
  const rest = omit(props, "class");
  return (
    <DialogBackdropPrimitive
      class={partClass(
        () =>
          cn(
            "fixed inset-0 z-50 bg-scrim/32 transition-opacity duration-300 data-starting-style:opacity-0 data-ending-style:opacity-0",
          ),
        props.class,
      )}
      {...rest}
    />
  );
}

const sideClasses = {
  end: "right-0 left-auto rounded-s-large data-starting-style:translate-x-full data-ending-style:translate-x-full",
  start:
    "right-auto left-0 rounded-e-large data-starting-style:-translate-x-full data-ending-style:-translate-x-full",
};

/** Up to 400px wide, 16px corners on the inner edge. */
export function SideSheetContent(
  props: ComponentProps<typeof DialogContentPrimitive> & { side?: "start" | "end" },
) {
  const rest = omit(props, "class", "side");
  return (
    <DialogContentPrimitive
      class={partClass(
        () =>
          cn(
            "fixed inset-y-0 z-50 m-0 flex h-full max-h-none w-[calc(100%-3.5rem)] max-w-100 flex-col bg-surface-container-low text-on-surface shadow-level-1 outline-none transition-transform duration-500 ease-default-spatial data-ending-style:duration-200",
            sideClasses[props.side ?? "end"],
          ),
        props.class,
      )}
      {...rest}
    />
  );
}

export function SideSheetHeader(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const rest = omit(props, "class");
  return (
    <div
      ref={props.ref}
      data-slot="side-sheet-header"
      class={cn("flex min-h-18 shrink-0 items-center gap-2 pr-3 pl-6", props.class)}
      {...rest}
    />
  );
}

export function SideSheetTitle(props: ComponentProps<typeof DialogTitlePrimitive>) {
  const rest = omit(props, "class");
  return (
    <DialogTitlePrimitive
      class={partClass(
        () => cn("flex-1 typescale-title-large text-on-surface-variant"),
        props.class,
      )}
      {...rest}
    />
  );
}

export function SideSheetDescription(props: ComponentProps<typeof DialogDescriptionPrimitive>) {
  const rest = omit(props, "class");
  return (
    <DialogDescriptionPrimitive
      class={partClass(() => cn("px-6 typescale-body-medium text-on-surface-variant"), props.class)}
      {...rest}
    />
  );
}

export function SideSheetBody(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const rest = omit(props, "class");
  return (
    <div
      ref={props.ref}
      data-slot="side-sheet-body"
      class={cn("min-h-0 flex-1 overflow-y-auto px-6 py-2", props.class)}
      {...rest}
    />
  );
}

/** Bottom action row with a divider above it. */
export function SideSheetActions(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const rest = omit(props, "class");
  return (
    <div
      ref={props.ref}
      data-slot="side-sheet-actions"
      class={cn(
        "flex shrink-0 items-center gap-2 border-t border-outline-variant px-6 pt-4 pb-6",
        props.class,
      )}
      {...rest}
    />
  );
}

/** Icon close button for the header. Shows a close icon unless given children. */
export function SideSheetClose(props: ComponentProps<typeof DialogClosePrimitive>) {
  const rest = omit(props, "class", "children");
  return (
    <DialogClosePrimitive
      aria-label="Close"
      class={partClass(
        () =>
          cn(
            "relative flex size-10 cursor-pointer items-center justify-center rounded-full text-on-surface-variant state-layer focus-ring [&_svg]:size-6",
          ),
        props.class,
      )}
      {...rest}
    >
      {props.children ?? (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      )}
    </DialogClosePrimitive>
  );
}

export function SideSheetTrigger(props: ComponentProps<typeof DialogTriggerPrimitive>) {
  return <DialogTriggerPrimitive {...props} />;
}
