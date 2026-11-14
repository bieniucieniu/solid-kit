import { DocsPage } from "~/components/preview";
import { MenubarDemo } from "~/demos/ui/menubar";
import source from "~/demos/ui/menubar.tsx?raw";

const snippet = `import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarPortal,
  MenubarSeparator,
  MenubarTrigger,
} from "@solid-kit/ui";

<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarPortal>
      <MenubarContent>
        <MenubarItem>New</MenubarItem>
        <MenubarItem>Open</MenubarItem>
        <MenubarSeparator />
        <MenubarItem variant="destructive">Delete</MenubarItem>
      </MenubarContent>
    </MenubarPortal>
  </MenubarMenu>
</Menubar>`;

export default function MenubarPage() {
  return (
    <DocsPage
      title="Menubar"
      description="A horizontal bar of menus."
      snippet={snippet}
      source={source}
      sourceTitle="demos/ui/menubar.tsx"
    >
      <MenubarDemo />
    </DocsPage>
  );
}
