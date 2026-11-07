import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Collapsible } from "../../ui/src/components/collapsible";

const meta = {
  title: "UI/Collapsible",
  component: Collapsible,
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <CollapsibleDemo />,
};

function CollapsibleDemo() {
  return (
    <Collapsible>
      <Collapsible.Trigger>Show notes</Collapsible.Trigger>
      <Collapsible.Content>Notes stay hidden until you open them.</Collapsible.Content>
    </Collapsible>
  );
}
