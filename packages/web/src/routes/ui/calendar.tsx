import { DocsPage, VariantRow, VariantStack } from "~/components/preview";
import { CalendarDemo, CalendarRangeDemo } from "~/demos/ui/calendar";
import source from "~/demos/ui/calendar.tsx?raw";

const snippet = `import { Calendar } from "@solid-kit/ui";
import { createSignal } from "solid-js";

const [date, setDate] = createSignal<Date | null>(new Date());

<Calendar mode="single" value={date()} onValueChange={setDate} />

<Calendar mode="range" numberOfMonths={2} />`;

export default function CalendarPage() {
  return (
    <DocsPage
      title="Calendar"
      description="A date grid with single, multiple, and range selection."
      snippet={snippet}
      source={source}
      sourceTitle="demos/ui/calendar.tsx"
    >
      <VariantStack>
        <VariantRow label="Single">
          <CalendarDemo />
        </VariantRow>
        <VariantRow label="Range">
          <CalendarRangeDemo />
        </VariantRow>
      </VariantStack>
    </DocsPage>
  );
}
