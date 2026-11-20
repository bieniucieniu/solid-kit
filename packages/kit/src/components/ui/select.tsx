import type { JSX } from "@solidjs/web";
import {
  Select as SelectPrimitive,
  SelectContent as SelectContentPrimitive,
  SelectGroup as SelectGroupPrimitive,
  SelectGroupLabel as SelectGroupLabelPrimitive,
  SelectItem as SelectItemPrimitive,
  SelectItemIndicator as SelectItemIndicatorPrimitive,
  SelectItemText as SelectItemTextPrimitive,
  SelectLabel as SelectLabelPrimitive,
  SelectList as SelectListPrimitive,
  SelectSeparator as SelectSeparatorPrimitive,
  SelectTrigger as SelectTriggerPrimitive,
  SelectValue as SelectValuePrimitive,
} from "@ui-sdk/solid/select";
import { type ComponentProps, omit } from "solid-js";
import { cn, partClass, popupMotion } from "#/lib/utils";

export { createSelectController } from "@ui-sdk/solid/select";

function ChevronDownIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      class="size-3.5"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

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

/** Pick one value (or several with `multiple`) from a list. Items are `SelectItem` children or `items` data. */
export const Select = SelectPrimitive;

export function SelectLabel(props: ComponentProps<typeof SelectLabelPrimitive>) {
  const rest = omit(props, "class");
  return (
    <SelectLabelPrimitive
      class={partClass("text-xs/relaxed font-medium text-foreground", props.class)}
      {...rest}
    />
  );
}

/** The button that opens the list. Put a `SelectValue` inside; a chevron is added after it. */
export function SelectTrigger(props: ComponentProps<typeof SelectTriggerPrimitive>) {
  const rest = omit(props, "class", "children");
  return (
    <SelectTriggerPrimitive
      class={partClass(
        "flex h-7 w-fit items-center justify-between gap-1.5 rounded-md border border-input bg-input/20 px-2 py-1.5 text-left text-xs/relaxed whitespace-nowrap transition-colors outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
        props.class,
      )}
      {...rest}
    >
      {props.children as JSX.Element}
      <span class="pointer-events-none flex text-muted-foreground" aria-hidden="true">
        <ChevronDownIcon />
      </span>
    </SelectTriggerPrimitive>
  );
}

export function SelectValue(props: ComponentProps<typeof SelectValuePrimitive>) {
  const rest = omit(props, "class");
  return (
    <SelectValuePrimitive
      class={partClass(
        "line-clamp-1 flex flex-1 items-center gap-1.5 text-left data-placeholder:text-muted-foreground",
        props.class,
      )}
      {...rest}
    />
  );
}

export function SelectContent(props: ComponentProps<typeof SelectContentPrimitive>) {
  const rest = omit(props, "class");
  return (
    <SelectContentPrimitive
      sideOffset={4}
      class={partClass(
        [
          "relative z-50 max-h-(--available-height) min-w-[max(--spacing(32),var(--anchor-width))] overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-none",
          popupMotion,
        ],
        props.class,
      )}
      {...rest}
    />
  );
}

/** A scrolling list inside the content, for long lists or ones next to a `SelectInput`. */
export function SelectListbox(props: ComponentProps<typeof SelectListPrimitive>) {
  const rest = omit(props, "class");
  return (
    <SelectListPrimitive
      class={partClass("max-h-72 scroll-my-1 overflow-y-auto outline-none", props.class)}
      {...rest}
    />
  );
}

/** One option. A check shows on the right while it's selected. */
export function SelectItem(props: ComponentProps<typeof SelectItemPrimitive>) {
  const rest = omit(props, "class", "children");
  return (
    <SelectItemPrimitive
      class={partClass(
        "relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-md py-1 pr-8 pl-2 text-xs/relaxed outline-hidden select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-highlighted:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
        props.class,
      )}
      {...rest}
    >
      {props.children as JSX.Element}
      <SelectItemIndicator />
    </SelectItemPrimitive>
  );
}

/** The part of an item's content that is its label, for an item that also has a description. */
export function SelectItemLabel(props: ComponentProps<typeof SelectItemTextPrimitive>) {
  const rest = omit(props, "class");
  return <SelectItemTextPrimitive class={partClass("text-xs/relaxed", props.class)} {...rest} />;
}

export function SelectItemDescription(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  const rest = omit(props, "class");
  return (
    <span
      data-slot="select-item-description"
      class={cn("text-xs text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function SelectItemIndicator(props: ComponentProps<typeof SelectItemIndicatorPrimitive>) {
  const rest = omit(props, "class", "children");
  return (
    <SelectItemIndicatorPrimitive
      class={partClass(
        "pointer-events-none absolute right-2 flex items-center justify-center",
        props.class,
      )}
      {...rest}
    >
      {(props.children as JSX.Element) ?? <CheckIcon />}
    </SelectItemIndicatorPrimitive>
  );
}

export function SelectGroup(props: ComponentProps<typeof SelectGroupPrimitive>) {
  return <SelectGroupPrimitive {...props} />;
}

export function SelectGroupLabel(props: ComponentProps<typeof SelectGroupLabelPrimitive>) {
  const rest = omit(props, "class");
  return (
    <SelectGroupLabelPrimitive
      class={partClass("px-2 py-1.5 text-xs text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

/** The 1.9 name for a group label. */
export const SelectSection = SelectGroupLabel;

export function SelectSeparator(props: ComponentProps<typeof SelectSeparatorPrimitive>) {
  const rest = omit(props, "class");
  return (
    <SelectSeparatorPrimitive
      class={partClass("pointer-events-none -mx-1 my-1 h-px bg-border", props.class)}
      {...rest}
    />
  );
}
