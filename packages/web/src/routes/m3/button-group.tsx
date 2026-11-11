import { DocsPage } from "~/components/preview";
import { ButtonGroupDemo } from "~/demos/m3/button-group";

const snippet = `import { ButtonGroup, ToggleButton } from "@solid-kit/m3";

<ButtonGroup variant="connected" size="md">
  <ToggleButton variant="tonal" pressed={view() === "day"} onChange={() => setView("day")}>Day</ToggleButton>
  <ToggleButton variant="tonal" pressed={view() === "week"} onChange={() => setView("week")}>Week</ToggleButton>
</ButtonGroup>`;

export default function ButtonGroupPage() {
  return (
    <DocsPage
      title="Button group"
      description="Standard or connected groups of buttons and toggles. Children take the group's size."
      snippet={snippet}
      previewClass="bg-surface text-on-surface"
    >
      <ButtonGroupDemo />
    </DocsPage>
  );
}
