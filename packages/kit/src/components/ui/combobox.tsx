import type { JSX } from "@solidjs/web";
import {
  Combobox as ComboboxPrimitive,
  ComboboxChip as ComboboxChipPrimitive,
  ComboboxChipRemove as ComboboxChipRemovePrimitive,
  ComboboxChips as ComboboxChipsPrimitive,
  ComboboxContent as ComboboxContentPrimitive,
  ComboboxEmpty as ComboboxEmptyPrimitive,
  ComboboxGroup as ComboboxGroupPrimitive,
  ComboboxGroupLabel as ComboboxGroupLabelPrimitive,
  ComboboxInput as ComboboxInputPrimitive,
  ComboboxItem as ComboboxItemPrimitive,
  ComboboxItemIndicator as ComboboxItemIndicatorPrimitive,
  ComboboxItemText as ComboboxItemTextPrimitive,
  ComboboxLabel as ComboboxLabelPrimitive,
  ComboboxList as ComboboxListPrimitive,
  ComboboxSeparator as ComboboxSeparatorPrimitive,
  ComboboxTrigger as ComboboxTriggerPrimitive,
} from "@ui-sdk/solid/combobox";
import { type ComponentProps } from "solid-js";
import { cn, partClass, popupMotion } from "#kit/lib/utils";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      class="size-3.5"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/** A text input that filters a list of options. Items are `ComboboxItem` children or `items` data. */
export const Combobox = ComboboxPrimitive;

export function ComboboxLabel(props: ComponentProps<typeof ComboboxLabelPrimitive>) {
  return (
    <ComboboxLabelPrimitive
      {...props}
      class={partClass("text-xs/relaxed font-medium text-foreground", props.class)}
    />
  );
}

/** The bordered box around the input and its trigger. */
export function ComboboxControl(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="combobox-control"
      {...props}
      class={cn(
        "flex h-7 w-full min-w-0 items-center rounded-md border border-input bg-input/20 bg-clip-padding text-xs/relaxed transition-colors outline-none focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/30 has-data-disabled:opacity-50 has-aria-invalid:border-destructive has-aria-invalid:ring-2 has-aria-invalid:ring-destructive/20 dark:bg-input/30 dark:has-aria-invalid:border-destructive/50 dark:has-aria-invalid:ring-destructive/40",
        props.class,
      )}
    />
  );
}

export function ComboboxInput(props: ComponentProps<typeof ComboboxInputPrimitive>) {
  return (
    <ComboboxInputPrimitive
      {...props}
      class={partClass(
        "h-full min-w-0 flex-1 bg-transparent px-2 py-0.5 text-xs/relaxed outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed",
        props.class,
      )}
    />
  );
}

export function ComboboxTrigger(props: ComponentProps<typeof ComboboxTriggerPrimitive>) {
  return (
    <ComboboxTriggerPrimitive
      {...props}
      class={partClass(
        "mr-1 flex size-5 shrink-0 items-center justify-center rounded-sm text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*='size-'])]:size-3.5",
        props.class,
      )}
    >
      {(props.children as JSX.Element) ?? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="m7 15 5 5 5-5" />
          <path d="m7 9 5-5 5 5" />
        </svg>
      )}
    </ComboboxTriggerPrimitive>
  );
}

export function ComboboxContent(props: ComponentProps<typeof ComboboxContentPrimitive>) {
  return (
    <ComboboxContentPrimitive
      sideOffset={6}
      {...props}
      class={partClass(
        [
          "relative z-50 max-h-(--available-height) min-w-(--anchor-width) overflow-hidden rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-none",
          popupMotion,
        ],
        props.class,
      )}
    />
  );
}

export function ComboboxListbox(props: ComponentProps<typeof ComboboxListPrimitive>) {
  return (
    <ComboboxListPrimitive
      {...props}
      class={partClass(
        "max-h-72 scroll-py-1 overflow-y-auto overscroll-contain p-1 outline-none",
        props.class,
      )}
    />
  );
}

/** Alias for the ui-sdk part name. */
export const ComboboxList = ComboboxListbox;

export function ComboboxEmpty(props: ComponentProps<typeof ComboboxEmptyPrimitive>) {
  return (
    <ComboboxEmptyPrimitive
      {...props}
      class={partClass("px-2 py-1.5 text-xs text-muted-foreground", props.class)}
    />
  );
}

/** One option. A check shows on the right while it's selected. */
export function ComboboxItem(props: ComponentProps<typeof ComboboxItemPrimitive>) {
  return (
    <ComboboxItemPrimitive
      {...props}
      class={partClass(
        "relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-md py-1 pr-8 pl-2 text-xs/relaxed outline-hidden select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-highlighted:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
        props.class,
      )}
    >
      {props.children as JSX.Element}
      <ComboboxItemIndicator />
    </ComboboxItemPrimitive>
  );
}

export function ComboboxItemLabel(props: ComponentProps<typeof ComboboxItemTextPrimitive>) {
  return (
    <ComboboxItemTextPrimitive
      {...props}
      class={partClass(
        "text-xs/relaxed [&_mark]:bg-transparent [&_mark]:font-semibold [&_mark]:text-current",
        props.class,
      )}
    />
  );
}

export function ComboboxItemDescription(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="combobox-item-description"
      {...props}
      class={cn("text-xs text-muted-foreground", props.class)}
    />
  );
}

export function ComboboxItemIndicator(
  props: ComponentProps<typeof ComboboxItemIndicatorPrimitive>,
) {
  return (
    <ComboboxItemIndicatorPrimitive
      {...props}
      class={partClass(
        "pointer-events-none absolute right-2 flex items-center justify-center",
        props.class,
      )}
    >
      {(props.children as JSX.Element) ?? <CheckIcon />}
    </ComboboxItemIndicatorPrimitive>
  );
}

export function ComboboxGroup(props: ComponentProps<typeof ComboboxGroupPrimitive>) {
  return <ComboboxGroupPrimitive {...props} />;
}

export function ComboboxGroupLabel(props: ComponentProps<typeof ComboboxGroupLabelPrimitive>) {
  return (
    <ComboboxGroupLabelPrimitive
      {...props}
      class={partClass("px-2 py-1.5 text-xs text-muted-foreground", props.class)}
    />
  );
}

/** The 1.9 name for a group label. */
export const ComboboxSection = ComboboxGroupLabel;

export function ComboboxSeparator(props: ComponentProps<typeof ComboboxSeparatorPrimitive>) {
  return (
    <ComboboxSeparatorPrimitive
      {...props}
      class={partClass("-mx-1 my-1 h-px bg-border", props.class)}
    />
  );
}

/** Holds a multiple combobox's chips and its input, in place of `ComboboxControl`. */
export function ComboboxChips(props: ComponentProps<typeof ComboboxChipsPrimitive>) {
  return (
    <ComboboxChipsPrimitive
      {...props}
      class={partClass(
        "flex min-h-7 w-full flex-wrap items-center gap-1 rounded-md border border-input bg-input/20 px-1 py-0.5 text-xs/relaxed focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/30 dark:bg-input/30",
        props.class,
      )}
    />
  );
}

export function ComboboxChip(props: ComponentProps<typeof ComboboxChipPrimitive>) {
  return (
    <ComboboxChipPrimitive
      {...props}
      class={partClass(
        "inline-flex h-5 items-center gap-1 rounded-sm bg-muted px-1.5 text-[0.625rem] font-medium",
        props.class,
      )}
    />
  );
}

export function ComboboxChipRemove(props: ComponentProps<typeof ComboboxChipRemovePrimitive>) {
  return (
    <ComboboxChipRemovePrimitive
      {...props}
      class={partClass(
        "-mr-0.5 flex size-3.5 items-center justify-center rounded-xs text-muted-foreground hover:text-foreground",
        props.class,
      )}
    >
      {(props.children as JSX.Element) ?? (
        <svg
          viewBox="0 0 24 24"
          class="size-3"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      )}
    </ComboboxChipRemovePrimitive>
  );
}
