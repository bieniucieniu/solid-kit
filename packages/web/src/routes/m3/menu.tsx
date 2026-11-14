import { DocsPage } from "~/components/preview";
import { MenuDemo } from "~/demos/m3/menu";
import source from "~/demos/m3/menu.tsx?raw";

const snippet = `import { Menu, MenuContent, MenuItem, MenuItemIcon, MenuItemLabel, MenuPortal, MenuShortcut, MenuTrigger } from "@solid-kit/m3";

<Menu>
  <MenuTrigger as={Button}>Open</MenuTrigger>
  <MenuPortal>
    <MenuContent>
      <MenuItem>
        <MenuItemIcon><EditIcon /></MenuItemIcon>
        <MenuItemLabel>Edit</MenuItemLabel>
        <MenuShortcut>⌘E</MenuShortcut>
      </MenuItem>
    </MenuContent>
  </MenuPortal>
</Menu>`;

export default function MenuPage() {
  return (
    <DocsPage
      title="Menu"
      description="A list of choices on a temporary surface, with submenus and selectable items."
      snippet={snippet}
      source={source}
      sourceTitle="demos/m3/menu.tsx"
      previewClass="bg-surface text-on-surface"
    >
      <MenuDemo />
    </DocsPage>
  );
}
