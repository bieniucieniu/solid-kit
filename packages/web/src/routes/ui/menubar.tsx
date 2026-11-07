import { DocsPage } from "~/components/preview";
import { MenubarDemo } from "~/demos/ui/menubar";

const snippet = `import { Menubar } from "@solid-kit/ui";

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
</Menubar>`;

export default function MenubarPage() {
  return (
    <DocsPage title="Menubar" description="A horizontal bar of menus." snippet={snippet}>
      <MenubarDemo />
    </DocsPage>
  );
}
