import { DocsPage } from "~/components/preview";
import { DrawerDemo } from "~/demos/ui/drawer";

const snippet = `import { Button, Drawer } from "@solid-kit/ui";

<Drawer>
  <Drawer.Trigger as={Button}>Open</Drawer.Trigger>
  <Drawer.Portal>
    <Drawer.Overlay />
    <Drawer.Content>
      <Drawer.Header>
        <Drawer.Title>Filters</Drawer.Title>
        <Drawer.Description>Narrow the list.</Drawer.Description>
      </Drawer.Header>
      <Drawer.Footer>
        <Drawer.CloseButton>Close</Drawer.CloseButton>
      </Drawer.Footer>
    </Drawer.Content>
  </Drawer.Portal>
</Drawer>`;

export default function DrawerPage() {
  return (
    <DocsPage
      title="Drawer"
      description="A panel that slides up from the bottom."
      snippet={snippet}
    >
      <DrawerDemo />
    </DocsPage>
  );
}
