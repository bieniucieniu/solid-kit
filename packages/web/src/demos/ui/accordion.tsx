import { Accordion } from "@solid-kit/ui";

export function AccordionDemo() {
  return (
    <Accordion collapsible defaultValue={["one"]} class="max-w-md">
      <Accordion.Item value="one">
        <Accordion.Header>
          <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>Yes. It uses a disclosure pattern.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="two">
        <Accordion.Header>
          <Accordion.Trigger>Can I close it?</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>Yes. This accordion is collapsible.</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
