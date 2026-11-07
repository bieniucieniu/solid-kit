import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Tooltip } from "../../ui/src/components/tooltip";
import { Button } from "../../ui/src/components/button";

const meta = {
  title: "UI/Tooltip",
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <TooltipDemo />,
};

function TooltipDemo() {
  return (
    <Tooltip>
      <Tooltip.Trigger as={Button}>Hover</Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content>Saved</Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip>
  );
}
