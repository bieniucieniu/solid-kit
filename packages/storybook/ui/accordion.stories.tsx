import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Accordion } from "../../ui/src/components/accordion";

const meta = {
  title: "UI/Accordion",
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <AccordionDemo />,
};

function AccordionDemo() {
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
