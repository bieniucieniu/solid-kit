import type { Meta, StoryObj } from "storybook-solidjs-vite";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "../../1.9/ui/src/components/item";
import { Button } from "../../1.9/ui/src/components/button";

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
      <ItemMedia>AL</ItemMedia>
      <ItemContent>
        <ItemTitle>Ada Lovelace</ItemTitle>
        <ItemDescription>Editor</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button type="button">View</Button>
      </ItemActions>
    </Item>
  );
}
