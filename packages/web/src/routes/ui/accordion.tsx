import { DocsPage } from "~/components/preview";
import { AccordionDemo } from "~/demos/ui/accordion";

const snippet = `import { Accordion } from "@solid-kit/ui";

<Accordion collapsible defaultValue={["one"]}>
  <Accordion.Item value="one">
    <Accordion.Header>
      <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content>Yes. It uses a disclosure pattern.</Accordion.Content>
  </Accordion.Item>
</Accordion>`;

export default function AccordionPage() {
  return (
    <DocsPage
      title="Accordion"
      description="Expand and collapse stacked sections."
      snippet={snippet}
    >
      <AccordionDemo />
    </DocsPage>
  );
}
