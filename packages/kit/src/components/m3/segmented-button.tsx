import {
  Toggle as ToggleGroupItemPrimitive,
  ToggleGroup as ToggleGroupPrimitive,
} from "@ui-sdk/solid/toggle";
import { type JSX } from "@solidjs/web";
import { type ComponentProps, omit } from "solid-js";
import { cn, partClass } from "#kit/lib/utils";

type SegmentedButtonProps = ComponentProps<typeof ToggleGroupPrimitive>;
type SegmentedButtonItemProps = ComponentProps<typeof ToggleGroupItemPrimitive>;

/**
 * Two to five options in one outlined row. Single select by default; pass `multiple` to allow
 * several. Uses ui-sdk's toggle group: `value` is the array of pressed values, with `onValueChange`.
 */
export function SegmentedButton(props: SegmentedButtonProps) {
  const rest = omit(props, "class");
  return (
    <ToggleGroupPrimitive
      class={partClass("inline-flex h-10 items-stretch", props.class)}
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
  const rest = omit(props, "class", "children");
  return (
    <ToggleGroupItemPrimitive
      class={partClass(
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
    </ToggleGroupItemPrimitive>
  );
}

/** Optional leading icon. Hidden while the segment is selected (the check mark shows instead). */
export function SegmentedButtonIcon(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  const rest = omit(props, "class", "ref");
  return (
    <span
      ref={props.ref}
      data-slot="segmented-button-icon"
      class={cn("contents group-data-pressed/segment:hidden", props.class)}
      {...rest}
    />
  );
}
