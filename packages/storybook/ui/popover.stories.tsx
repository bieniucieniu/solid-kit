import type { Meta, StoryObj } from "storybook-solidjs-vite";
import {
  Popover,
  PopoverCloseButton,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverPortal,
  PopoverTitle,
  PopoverTrigger,
} from "../../ui/src/components/popover";
import { Button } from "../../ui/src/components/button";

const meta = {
  title: "UI/Popover",
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <PopoverDemo />,
};

function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger as={Button}>Open</PopoverTrigger>
      <PopoverPortal>
        <PopoverContent>
          <PopoverHeader>
            <PopoverTitle>Dimensions</PopoverTitle>
            <PopoverDescription>Set the size of the frame.</PopoverDescription>
          </PopoverHeader>
          <PopoverCloseButton>Close</PopoverCloseButton>
        </PopoverContent>
      </PopoverPortal>
    </Popover>
  );
}
