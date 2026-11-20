import type { Meta, StoryObj } from "storybook-solidjs-vite";
import {
  Tooltip,
  TooltipContent,
  TooltipPortal,
  TooltipTrigger,
} from "../../1.9/ui/src/components/tooltip";
import { Button } from "../../1.9/ui/src/components/button";

const meta = {
  title: "UI/Tooltip",
  component: TooltipDemo,
} satisfies Meta<typeof TooltipDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <TooltipDemo />,
};

function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger as={Button}>Hover</TooltipTrigger>
      <TooltipPortal>
        <TooltipContent>Saved</TooltipContent>
      </TooltipPortal>
    </Tooltip>
  );
}
