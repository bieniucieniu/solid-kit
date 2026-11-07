import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { AlertDialog } from "../../ui/src/components/alert-dialog";
import { Button } from "../../ui/src/components/button";

const meta = {
  title: "UI/AlertDialog",
  component: AlertDialog,
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <AlertDialogDemo />,
};

function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialog.Trigger as={Button}>Delete</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay />
        <AlertDialog.Content>
          <AlertDialog.Title>Delete this file?</AlertDialog.Title>
          <AlertDialog.Description>This cannot be undone.</AlertDialog.Description>
          <AlertDialog.CloseButton>Cancel</AlertDialog.CloseButton>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  );
}
