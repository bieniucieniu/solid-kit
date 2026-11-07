import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Sheet } from "../../ui/src/components/sheet";
import { Button } from "../../ui/src/components/button";

const meta = {
  title: "UI/Sheet",
  component: Sheet,
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <SheetDemo />,
};

function SheetDemo() {
  return (
    <Sheet>
      <Sheet.Trigger as={Button}>Open</Sheet.Trigger>
      <Sheet.Portal>
        <Sheet.Overlay />
        <Sheet.Content>
          <Sheet.Header>
            <Sheet.Title>Settings</Sheet.Title>
            <Sheet.Description>Changes apply to this project.</Sheet.Description>
          </Sheet.Header>
          <Sheet.Footer>
            <Sheet.CloseButton>Close</Sheet.CloseButton>
          </Sheet.Footer>
        </Sheet.Content>
      </Sheet.Portal>
    </Sheet>
  );
}
