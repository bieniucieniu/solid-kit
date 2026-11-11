import type { Meta, StoryObj } from "storybook-solidjs-vite";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogLabel,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "../../ui/src/components/dialog";
import { Button } from "../../ui/src/components/button";

const meta = {
  title: "UI/Dialog",
  component: DialogDemo,
} satisfies Meta<typeof DialogDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <DialogDemo />,
};

function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger as={Button}>Open</DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogHeader>
            <DialogLabel>Edit profile</DialogLabel>
            <DialogDescription>This dialog stays on the page until you close it.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose>Cancel</DialogClose>
            <DialogClose variant="default">Save changes</DialogClose>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
