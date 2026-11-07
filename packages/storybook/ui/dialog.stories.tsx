import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Dialog } from "../../ui/src/components/dialog";
import { Button } from "../../ui/src/components/button";

const meta = {
  title: "UI/Dialog",
  component: Dialog,
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <DialogDemo />,
};

function DialogDemo() {
  return (
    <Dialog>
      <Dialog.Trigger as={Button}>Open</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Label>Edit profile</Dialog.Label>
          <Dialog.Description>This dialog stays on the page until you close it.</Dialog.Description>
          <Dialog.Close class="mt-4">Close</Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
