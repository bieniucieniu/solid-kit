import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Popover } from "../../ui/src/components/popover";
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
      <Popover.Trigger as={Button}>Open</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          <Popover.Header>
            <Popover.Title>Dimensions</Popover.Title>
            <Popover.Description>Set the size of the frame.</Popover.Description>
          </Popover.Header>
          <Popover.CloseButton>Close</Popover.CloseButton>
        </Popover.Content>
      </Popover.Portal>
    </Popover>
  );
}
