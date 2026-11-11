import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@solid-kit/ui";

export function AccordionDemo() {
  return (
    <Accordion initialValue="one" class="max-w-md">
      <AccordionItem value="one">
        <AccordionHeader>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>Yes. It uses a disclosure pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="two">
        <AccordionHeader>
          <AccordionTrigger>Can I close it?</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>Yes. This accordion is collapsible.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
