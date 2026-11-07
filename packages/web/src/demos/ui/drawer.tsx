import { Button, Drawer } from "@solid-kit/ui";

export function DrawerDemo() {
  return (
    <Drawer>
      <Drawer.Trigger as={Button} variant="outline">
        Open
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Filters</Drawer.Title>
            <Drawer.Description>Narrow the list.</Drawer.Description>
          </Drawer.Header>
          <p class="text-muted-foreground">Content placed directly in the drawer is padded.</p>
          <Drawer.Footer>
            <Drawer.CloseButton variant="default">Apply</Drawer.CloseButton>
            <Drawer.CloseButton>Cancel</Drawer.CloseButton>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer>
  );
}
