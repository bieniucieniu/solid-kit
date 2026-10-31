import { DocsPage } from "~/components/preview";
import { ToggleDemo } from "~/demos/ui/toggle";

const snippet = `import { Toggle } from "@solid-kit/ui";

<Toggle pressed={pressed()} onChange={setPressed}>
  Bold
</Toggle>`;

export default function TogglePage() {
  return (
    <DocsPage title="Toggle" description="A button that stays pressed." snippet={snippet}>
      <ToggleDemo />
    </DocsPage>
  );
}
