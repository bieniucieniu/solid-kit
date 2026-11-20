import {
  Calendar as CalendarPrimitive,
  CalendarDay as CalendarDayPrimitive,
  CalendarGrid as CalendarGridPrimitive,
  CalendarHeading as CalendarHeadingPrimitive,
  CalendarNext as CalendarNextPrimitive,
  CalendarPrevious as CalendarPreviousPrimitive,
  CalendarWeekday as CalendarWeekdayPrimitive,
  CalendarWeekdays,
  CalendarWeeks,
} from "@ui-sdk/solid/calendar";
import { type ComponentProps, For, omit } from "solid-js";
import { buttonVariants } from "./button";
import { partClass } from "#/lib/utils";

export {
  CalendarMonthSelect,
  CalendarWeekdays,
  CalendarWeeks,
  CalendarYearSelect,
} from "@ui-sdk/solid/calendar";

/**
 * Ready-made calendar: Previous, the month heading, Next, and a day grid for each of `months`.
 * `mode` is `single`, `multiple` or `range`; values are ISO date strings like `2026-10-16`.
 * Build a custom layout from `CalendarRoot` and the parts instead.
 */
export function Calendar(props: ComponentProps<typeof CalendarPrimitive>) {
  const rest = omit(props, "class");
  return (
    <CalendarRoot class={props.class} {...rest}>
      <div class="relative flex h-7 items-center justify-center">
        <CalendarPrevious class="absolute left-0" />
        <CalendarHeading />
        <CalendarNext class="absolute right-0" />
      </div>
      <div class="flex flex-wrap gap-4">
        <For each={Array.from({ length: props.months ?? 1 }, (_, index) => index)}>
          {(offset) => (
            <CalendarGrid offset={offset}>
              <CalendarWeekdays>{(index) => <CalendarWeekday index={index} />}</CalendarWeekdays>
              <CalendarWeeks>{(cell) => <CalendarDay value={cell.date} />}</CalendarWeeks>
            </CalendarGrid>
          )}
        </For>
      </div>
    </CalendarRoot>
  );
}

/** The calendar root, for a custom layout. */
export function CalendarRoot(props: ComponentProps<typeof CalendarPrimitive>) {
  const rest = omit(props, "class");
  return (
    <CalendarPrimitive class={partClass("flex w-fit flex-col gap-3 p-3", props.class)} {...rest} />
  );
}

export function CalendarHeading(props: ComponentProps<typeof CalendarHeadingPrimitive>) {
  const rest = omit(props, "class");
  return (
    <CalendarHeadingPrimitive
      class={partClass("text-sm font-medium text-foreground select-none", props.class)}
      {...rest}
    />
  );
}

/** The 1.9 name for the heading. */
export const CalendarLabel = CalendarHeading;

const navClass = buttonVariants({
  variant: "ghost",
  size: "icon",
  class: "data-disabled:pointer-events-none data-disabled:opacity-50",
});

export function CalendarPrevious(props: ComponentProps<typeof CalendarPreviousPrimitive>) {
  const rest = omit(props, "class", "children");
  return (
    <CalendarPreviousPrimitive
      aria-label="Previous month"
      class={partClass(navClass, props.class)}
      {...rest}
    >
      {props.children ?? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      )}
    </CalendarPreviousPrimitive>
  );
}

export function CalendarNext(props: ComponentProps<typeof CalendarNextPrimitive>) {
  const rest = omit(props, "class", "children");
  return (
    <CalendarNextPrimitive
      aria-label="Next month"
      class={partClass(navClass, props.class)}
      {...rest}
    >
      {props.children ?? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      )}
    </CalendarNextPrimitive>
  );
}

export function CalendarGrid(props: ComponentProps<typeof CalendarGridPrimitive>) {
  const rest = omit(props, "class");
  return (
    <CalendarGridPrimitive class={partClass("w-full border-collapse", props.class)} {...rest} />
  );
}

export function CalendarWeekday(props: ComponentProps<typeof CalendarWeekdayPrimitive>) {
  const rest = omit(props, "class");
  return (
    <CalendarWeekdayPrimitive
      class={partClass(
        "w-7 pb-1 text-[0.7rem] font-normal text-muted-foreground select-none",
        props.class,
      )}
      {...rest}
    />
  );
}

/** A day cell. It shows the day of the month unless it has children. */
export function CalendarDay(props: ComponentProps<typeof CalendarDayPrimitive>) {
  const rest = omit(props, "class");
  return (
    <CalendarDayPrimitive
      class={partClass(
        [
          "size-7 rounded-md p-0 text-center text-xs font-normal tabular-nums transition-colors outline-none select-none hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/30",
          "data-today:font-medium data-outside:text-muted-foreground data-unavailable:text-muted-foreground data-unavailable:line-through data-disabled:pointer-events-none data-disabled:opacity-50",
          "data-selected:bg-primary data-selected:text-primary-foreground data-selected:hover:bg-primary/90 [&[data-today]:not([data-selected])]:bg-muted",
          "data-range-middle:rounded-none data-range-middle:bg-muted data-range-middle:text-foreground data-range-middle:hover:bg-muted data-range-start:rounded-r-none data-range-end:rounded-l-none data-[range-start][data-range-end]:rounded-md data-preview:bg-muted",
        ],
        props.class,
      )}
      {...rest}
    />
  );
}
