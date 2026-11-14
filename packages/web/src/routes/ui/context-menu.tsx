import { DocsPage } from "~/components/preview";
import { ContextMenuDemo } from "~/demos/ui/context-menu";
import source from "~/demos/ui/context-menu.tsx?raw";

const snippet = `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuPortal,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@solid-kit/ui";

<ContextMenu>
  <ContextMenuTrigger>Right click</ContextMenuTrigger>
  <ContextMenuPortal>
    <ContextMenuContent>
      <ContextMenuItem>Back</ContextMenuItem>
      <ContextMenuItem>Forward</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenuPortal>
</ContextMenu>`;

export default function ContextMenuPage() {
  return (
    <DocsPage
      title="Context menu"
      description="A menu opened with a right click."
      snippet={snippet}
      source={source}
      sourceTitle="demos/ui/context-menu.tsx"
    >
      <ContextMenuDemo />
    </DocsPage>
  );
}
