import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { ContextMenu } from "../../ui/src/components/context-menu";
import { createSignal } from "solid-js";

const meta = {
  title: "UI/ContextMenu",
  component: ContextMenu,
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ContextMenuDemo />,
};

function ContextMenuDemo() {
  const [action, setAction] = createSignal("None");

  return (
    <div class="flex flex-col items-start gap-3">
      <ContextMenu>
        <ContextMenu.Trigger class="flex h-24 w-64 items-center justify-center rounded-lg border border-dashed border-border text-xs text-muted-foreground">
          Right click
        </ContextMenu.Trigger>
        <ContextMenu.Portal>
          <ContextMenu.Content>
            <ContextMenu.Item onSelect={() => setAction("Back")}>Back</ContextMenu.Item>
            <ContextMenu.Item onSelect={() => setAction("Forward")}>Forward</ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu.Portal>
      </ContextMenu>
      <p class="text-xs text-muted-foreground">Action: {action()}</p>
    </div>
  );
}
