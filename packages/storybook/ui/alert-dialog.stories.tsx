import type { Meta, StoryObj } from "storybook-solidjs-vite";
import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogLabel,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTrigger,
} from "../../1.9/ui/src/components/alert-dialog";
import { Button } from "../../1.9/ui/src/components/button";

const meta = {
  title: "UI/AlertDialog",
  component: AlertDialogDemo,
} satisfies Meta<typeof AlertDialogDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <AlertDialogDemo />,
};

function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger as={Button}>Delete</AlertDialogTrigger>
      <AlertDialogPortal>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogLabel>Delete this file?</AlertDialogLabel>
            <AlertDialogDescription>This cannot be undone.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogClose>Cancel</AlertDialogClose>
            <AlertDialogClose variant="destructive">Delete</AlertDialogClose>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  );
}
