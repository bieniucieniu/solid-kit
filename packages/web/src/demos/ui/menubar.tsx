import { Menubar } from "@solid-kit/ui";

export function MenubarDemo() {
  return (
    <Menubar>
      <Menubar.Menu>
        <Menubar.Trigger>File</Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content>
            <Menubar.Item>New</Menubar.Item>
            <Menubar.Item>Open</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item variant="destructive">Delete</Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>Edit</Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content>
            <Menubar.Item>Undo</Menubar.Item>
            <Menubar.Item>Redo</Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar>
  );
}
