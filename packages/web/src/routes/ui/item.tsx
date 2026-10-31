import { DocsPage } from "~/components/preview";
import { ItemDemo } from "~/demos/ui/item";

const snippet = `import { Button, Item } from "@solid-kit/ui";

<Item>
  <Item.Media>AL</Item.Media>
  <Item.Content>
    <Item.Title>Ada Lovelace</Item.Title>
    <Item.Description>Editor</Item.Description>
  </Item.Content>
  <Item.Actions>
    <Button>View</Button>
  </Item.Actions>
</Item>`;

export default function ItemPage() {
  return (
    <DocsPage title="Item" description="A row with media, text, and actions." snippet={snippet}>
      <ItemDemo />
    </DocsPage>
  );
}
