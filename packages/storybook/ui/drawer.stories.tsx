import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Drawer } from "../../ui/src/components/drawer";
import { Button } from "../../ui/src/components/button";

const meta = {
  title: "UI/Drawer",
  component: Drawer,
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <DrawerDemo />,
};

function DrawerDemo() {
  return (
    <Drawer>
      <Drawer.Trigger as={Button}>Open</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Title>Filters</Drawer.Title>
          <Drawer.Description>Narrow the list.</Drawer.Description>
          <Drawer.CloseButton>Close</Drawer.CloseButton>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer>
  );
}
