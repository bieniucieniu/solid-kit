import { Button, Drawer } from "@solid-kit/ui";

export function DrawerDemo() {
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
