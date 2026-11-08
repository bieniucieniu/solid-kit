import type { Meta, StoryObj } from "storybook-solidjs-vite";
import {
  Sheet,
  SheetCloseButton,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from "../../ui/src/components/sheet";
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
      <SheetTrigger as={Button}>Open</SheetTrigger>
      <SheetPortal>
        <SheetOverlay />
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Settings</SheetTitle>
            <SheetDescription>Changes apply to this project.</SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <SheetCloseButton>Close</SheetCloseButton>
          </SheetFooter>
        </SheetContent>
      </SheetPortal>
    </Sheet>
  );
}
