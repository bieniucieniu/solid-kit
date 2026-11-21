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
import { type ComponentProps, For } from "solid-js";
import { buttonVariants } from "./button";
import { partClass } from "#kit/lib/utils";

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
  return (
    <CalendarRoot {...props} class={props.class}>
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
  return (
    <CalendarPrimitive {...props} class={partClass("flex w-fit flex-col gap-3 p-3", props.class)} />
  );
}

export function CalendarHeading(props: ComponentProps<typeof CalendarHeadingPrimitive>) {
  return (
    <CalendarHeadingPrimitive
      {...props}
      class={partClass("text-sm font-medium text-foreground select-none", props.class)}
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
  return (
    <CalendarPreviousPrimitive
      aria-label="Previous month"
      {...props}
      class={partClass(navClass, props.class)}
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
  return (
    <CalendarNextPrimitive
      aria-label="Next month"
      {...props}
      class={partClass(navClass, props.class)}
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
  return (
    <CalendarGridPrimitive {...props} class={partClass("w-full border-collapse", props.class)} />
  );
}

export function CalendarWeekday(props: ComponentProps<typeof CalendarWeekdayPrimitive>) {
  return (
    <CalendarWeekdayPrimitive
      {...props}
      class={partClass(
        "w-7 pb-1 text-[0.7rem] font-normal text-muted-foreground select-none",
        props.class,
      )}
    />
  );
}

/** A day cell. It shows the day of the month unless it has children. */
export function CalendarDay(props: ComponentProps<typeof CalendarDayPrimitive>) {
  return (
    <CalendarDayPrimitive
      {...props}
      class={partClass(
        [
          "size-7 rounded-md p-0 text-center text-xs font-normal tabular-nums transition-colors outline-none select-none hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/30",
          "data-today:font-medium data-outside:text-muted-foreground data-unavailable:text-muted-foreground data-unavailable:line-through data-disabled:pointer-events-none data-disabled:opacity-50",
          "data-selected:bg-primary data-selected:text-primary-foreground data-selected:hover:bg-primary/90 [&[data-today]:not([data-selected])]:bg-muted",
          "data-range-middle:rounded-none data-range-middle:bg-muted data-range-middle:text-foreground data-range-middle:hover:bg-muted data-range-start:rounded-r-none data-range-end:rounded-l-none data-[range-start][data-range-end]:rounded-md data-preview:bg-muted",
        ],
        props.class,
      )}
    />
  );
}
