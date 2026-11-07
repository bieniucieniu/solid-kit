import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Item } from "../../ui/src/components/item";
import { Button } from "../../ui/src/components/button";

const meta = {
  title: "UI/Item",
  component: Item,
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ItemDemo />,
};

function ItemDemo() {
  return (
    <Item class="max-w-md">
      <Item.Media>AL</Item.Media>
      <Item.Content>
        <Item.Title>Ada Lovelace</Item.Title>
        <Item.Description>Editor</Item.Description>
      </Item.Content>
      <Item.Actions>
        <Button type="button">View</Button>
      </Item.Actions>
    </Item>
  );
}
