import { DocsPage } from "~/components/preview";
import { ListDemo } from "~/demos/m3/list";

const snippet = `import { List, ListItem, ListItemContent, ListItemHeadline, ListItemLeading, ListItemSupportingText, ListItemTrailing } from "@solid-kit/m3";

<List>
  <ListItem as="button">
    <ListItemLeading><MailIcon /></ListItemLeading>
    <ListItemContent>
      <ListItemHeadline>Headline</ListItemHeadline>
      <ListItemSupportingText>Supporting text</ListItemSupportingText>
    </ListItemContent>
    <ListItemTrailing>100+</ListItemTrailing>
  </ListItem>
</List>`;

export default function ListPage() {
  return (
    <DocsPage
      title="List"
      description="One-, two-, and three-line items with leading and trailing content."
      snippet={snippet}
      previewClass="bg-surface text-on-surface"
    >
      <ListDemo />
    </DocsPage>
  );
}
