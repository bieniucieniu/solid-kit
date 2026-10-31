import { Button, Item } from "@solid-kit/ui";

export function ItemDemo() {
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
