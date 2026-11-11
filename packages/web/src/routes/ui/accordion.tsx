import { DocsPage } from "~/components/preview";
import { AccordionDemo } from "~/demos/ui/accordion";

const snippet = `import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@solid-kit/ui";

<Accordion initialValue="one">
  <AccordionItem value="one">
    <AccordionHeader>
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
    </AccordionHeader>
    <AccordionContent>Yes. It uses a disclosure pattern.</AccordionContent>
  </AccordionItem>
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
