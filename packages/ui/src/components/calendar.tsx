import CalendarPrimitive, {
  type CellProps,
  type CellTriggerProps,
  type DynamicProps,
  type HeadCellProps,
  type LabelProps,
  type NavProps,
  type RootChildrenProps,
  type RootProps,
  type TableProps,
} from "@corvu/calendar";
import { Index, type JSX, Show, splitProps } from "solid-js";
import { buttonVariants } from "./button";
import { cn } from "@/lib/utils";

type DistributiveOmit<T, K extends PropertyKey> = T extends unknown ? Omit<T, K> : never;

export type CalendarProps = DistributiveOmit<RootProps, "children"> & {
  /** BCP 47 locale for the month label and weekday names. Defaults to the runtime locale. */
  locale?: string;
  class?: string;
};

/**
 * Ready-made calendar: navigation, month label, and a day grid for every month in
 * `numberOfMonths`. Build a custom layout from `CalendarRoot` and the parts instead.
 */
export function Calendar(props: CalendarProps) {
  const [local, rest] = splitProps(props, ["locale", "class"]);
  const monthFormat = new Intl.DateTimeFormat(local.locale, { month: "long", year: "numeric" });
  const weekdayFormat = new Intl.DateTimeFormat(local.locale, { weekday: "short" });
  const weekdayLongFormat = new Intl.DateTimeFormat(local.locale, { weekday: "long" });

  return (
    <CalendarPrimitive {...(rest as RootProps)}>
      {(calendar: RootChildrenProps) => (
        <div data-slot="calendar" class={cn("flex w-fit flex-wrap gap-4 p-3", local.class)}>
          <Index each={calendar.months}>
            {(month, index) => (
              <div data-slot="calendar-month" class="flex flex-col gap-3">
                <div class="relative flex h-7 items-center justify-center">
                  <Show when={index === 0}>
                    <CalendarNav action="prev-month" class="absolute left-0" />
                  </Show>
                  <CalendarLabel index={index}>{monthFormat.format(month().month)}</CalendarLabel>
                  <Show when={index === calendar.months.length - 1}>
                    <CalendarNav action="next-month" class="absolute right-0" />
                  </Show>
                </div>
                <CalendarTable index={index}>
                  <thead>
                    <tr>
                      <Index each={calendar.weekdays}>
                        {(weekday) => (
                          <CalendarHeadCell abbr={weekdayLongFormat.format(weekday())}>
                            {weekdayFormat.format(weekday()).slice(0, 2)}
                          </CalendarHeadCell>
                        )}
                      </Index>
                    </tr>
                  </thead>
                  <tbody>
                    <Index each={month().weeks}>
                      {(week) => (
                        <tr>
                          <Index each={week()}>
                            {(day) => (
                              <CalendarCell>
                                <CalendarCellTrigger day={day()} month={month().month} />
                              </CalendarCell>
                            )}
                          </Index>
                        </tr>
                      )}
                    </Index>
                  </tbody>
                </CalendarTable>
              </div>
            )}
          </Index>
        </div>
      )}
    </CalendarPrimitive>
  );
}

export function CalendarNav(props: DynamicProps<"button", NavProps<"button">>) {
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  const isPrev = () => typeof props.action === "string" && props.action.startsWith("prev");
  const label = () => {
    if (typeof props.action !== "string") return undefined;
    const [direction, unit] = props.action.split("-");
    return `${direction === "prev" ? "Previous" : "Next"} ${unit}`;
  };
  return (
    <CalendarPrimitive.Nav
      ref={props.ref}
      data-slot="calendar-nav"
      aria-label={label()}
      class={buttonVariants({ variant: "ghost", size: "icon", class: props.class })}
      {...rest}
    >
      <Show
        when={props.children}
        fallback={
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d={isPrev() ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
          </svg>
        }
      >
        {props.children}
      </Show>
    </CalendarPrimitive.Nav>
  );
}

export function CalendarLabel(props: DynamicProps<"h2", LabelProps<"h2">>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <CalendarPrimitive.Label
      ref={props.ref}
      data-slot="calendar-label"
      class={cn("text-sm font-medium text-foreground select-none", props.class)}
      {...rest}
    />
  );
}

export function CalendarTable(props: DynamicProps<"table", TableProps<"table">>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <CalendarPrimitive.Table
      ref={props.ref}
      data-slot="calendar-table"
      class={cn("w-full border-collapse", props.class)}
      {...rest}
    />
  );
}

export function CalendarHeadCell(props: DynamicProps<"th", HeadCellProps<"th">>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <CalendarPrimitive.HeadCell
      ref={props.ref}
      data-slot="calendar-head-cell"
      class={cn(
        "w-7 pb-1 text-[0.7rem] font-normal text-muted-foreground select-none",
        props.class,
      )}
      {...rest}
    />
  );
}

export function CalendarCell(props: DynamicProps<"td", CellProps<"td">>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <CalendarPrimitive.Cell
      ref={props.ref}
      data-slot="calendar-cell"
      class={cn(
        "relative p-0 text-center has-data-in-range:bg-muted has-data-range-end:rounded-r-md has-data-range-start:rounded-l-md",
        props.class,
      )}
      {...rest}
    />
  );
}

export function CalendarCellTrigger(
  props: DynamicProps<"button", CellTriggerProps<"button">> & { children?: JSX.Element },
) {
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  const outside = () =>
    props.month !== undefined && props.day.getMonth() !== props.month.getMonth();
  return (
    <CalendarPrimitive.CellTrigger
      ref={props.ref}
      data-slot="calendar-cell-trigger"
      data-outside={outside() ? "" : undefined}
      class={cn(
        "inline-flex size-7 items-center justify-center rounded-md text-xs font-normal tabular-nums transition-colors outline-none select-none hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/30 data-today:font-medium data-outside:text-muted-foreground data-disabled:pointer-events-none data-disabled:opacity-50 data-selected:bg-primary data-selected:text-primary-foreground data-selected:hover:bg-primary/90 [&[data-today]:not([data-selected])]:bg-muted [&[data-in-range]:not([data-range-start]):not([data-range-end])]:rounded-none [&[data-in-range]:not([data-range-start]):not([data-range-end])]:bg-transparent [&[data-in-range]:not([data-range-start]):not([data-range-end])]:text-foreground",
        props.class,
      )}
      {...rest}
    >
      <Show when={props.children} fallback={props.day.getDate()}>
        {props.children}
      </Show>
    </CalendarPrimitive.CellTrigger>
  );
}

export function CalendarRoot(props: RootProps) {
  return <CalendarPrimitive {...props} />;
}

export const useCalendarContext = CalendarPrimitive.useContext;
