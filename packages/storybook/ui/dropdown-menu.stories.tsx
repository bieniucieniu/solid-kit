import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { DropdownMenu } from "../../ui/src/components/dropdown-menu";
import { Button } from "../../ui/src/components/button";
import { createSignal } from "solid-js";

const meta = {
  title: "UI/DropdownMenu",
  component: DropdownMenu,
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <DropdownMenuDemo />,
};

function DropdownMenuDemo() {
  const [action, setAction] = createSignal("None");

  return (
    <div class="flex flex-col items-start gap-3">
      <DropdownMenu>
        <DropdownMenu.Trigger as={Button}>Open</DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content>
            <DropdownMenu.Item onSelect={() => setAction("Edit")}>Edit</DropdownMenu.Item>
            <DropdownMenu.Item onSelect={() => setAction("Duplicate")}>Duplicate</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item variant="destructive" onSelect={() => setAction("Delete")}>
              Delete
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu>
      <p class="text-sm text-muted-foreground">Action: {action()}</p>
    </div>
  );
}
