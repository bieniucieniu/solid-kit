import { Calendar } from "@solid-kit/ui";
import { createSignal } from "solid-js";

export function CalendarDemo() {
  const [value, setValue] = createSignal<Date | null>(new Date());

  return (
    <Calendar
      mode="single"
      value={value()}
      onValueChange={setValue}
      class="rounded-lg border border-border"
    />
  );
}

export function CalendarRangeDemo() {
  const today = new Date();
  const [value, setValue] = createSignal<{ from: Date | null; to: Date | null }>({
    from: today,
    to: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 9),
  });

  return (
    <Calendar
      mode="range"
      numberOfMonths={2}
      value={value()}
      onValueChange={setValue}
      class="rounded-lg border border-border"
    />
  );
}
