import { DocsPage } from "~/components/preview";
import { ItemDemo } from "~/demos/ui/item";

const snippet = `import { Button, Item } from "@solid-kit/ui";

// variant: "default" | "outline" | "muted"   size: "default" | "sm" | "xs"
// Item.Media variant: "default" | "icon" | "image"
<Item variant="outline" size="sm">
  <Item.Media variant="image">
    <img src="https://github.com/solidjs.png" alt="Solid" />
  </Item.Media>
  <Item.Content>
    <Item.Title>Ada Lovelace</Item.Title>
    <Item.Description>Editor</Item.Description>
  </Item.Content>
  <Item.Actions>
    <Button variant="outline" size="sm">View</Button>
  </Item.Actions>
</Item>`;

export default function ItemPage() {
  return (
    <DocsPage title="Item" description="A row with media, text, and actions." snippet={snippet}>
      <ItemDemo />
    </DocsPage>
  );
}
