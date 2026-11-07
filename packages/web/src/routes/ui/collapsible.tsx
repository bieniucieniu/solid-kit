import { DocsPage } from "~/components/preview";
import { CollapsibleDemo } from "~/demos/ui/collapsible";

const snippet = `import { Collapsible } from "@solid-kit/ui";

<Collapsible>
  <Collapsible.Trigger>Show notes</Collapsible.Trigger>
  <Collapsible.Content>Notes stay hidden until you open them.</Collapsible.Content>
</Collapsible>`;

export default function CollapsiblePage() {
  return (
    <DocsPage
      title="Collapsible"
      description="A single section that opens and closes."
      snippet={snippet}
    >
      <CollapsibleDemo />
    </DocsPage>
  );
}
