import { ToggleGroup as ToggleGroupPrimitive } from "@kobalte/core/toggle-group";
import { type ComponentProps, type JSX, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type SegmentedButtonProps = ComponentProps<typeof ToggleGroupPrimitive>;
type SegmentedButtonItemProps = ComponentProps<typeof ToggleGroupPrimitive.Item>;

/**
 * Two to five options in one outlined row. Single select by default; pass `multiple` to allow
 * several. Uses Kobalte's toggle group (`value` / `onChange`).
 */
export function SegmentedButton(props: SegmentedButtonProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ToggleGroupPrimitive
      ref={props.ref}
      data-slot="segmented-button"
      class={cn("inline-flex h-10 items-stretch", props.class)}
      {...rest}
    />
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      class="hidden size-4.5 group-data-pressed/segment:block"
    >
      <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  );
}

/** A selected segment shows a check mark in place of its SegmentedButtonIcon. */
export function SegmentedButtonItem(props: SegmentedButtonItemProps) {
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  return (
    <ToggleGroupPrimitive.Item
      ref={props.ref}
      data-slot="segmented-button-item"
      class={cn(
        "group/segment relative -ml-px flex min-w-12 flex-1 cursor-pointer items-center justify-center gap-2 border border-outline px-3 typescale-label-large text-on-surface select-none state-layer focus-ring motion-fast first:ml-0 first:rounded-s-full last:rounded-e-full focus-visible:z-10 data-pressed:bg-secondary-container data-pressed:text-on-secondary-container disabled:border-on-surface/12 disabled:text-on-surface/38 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4.5",
        props.class,
      )}
      {...rest}
    >
      <>
        <CheckIcon />
        {/* Plain children only; the check mark is prepended, so a render function is not supported. */}
        {props.children as JSX.Element}
      </>
    </ToggleGroupPrimitive.Item>
  );
}

/** Optional leading icon. Hidden while the segment is selected (the check mark shows instead). */
export function SegmentedButtonIcon(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <span
      ref={props.ref}
      data-slot="segmented-button-icon"
      class={cn("contents group-data-pressed/segment:hidden", props.class)}
      {...rest}
    />
  );
}
