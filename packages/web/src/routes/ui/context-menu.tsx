import { DocsPage } from "~/components/preview";
import { ContextMenuDemo } from "~/demos/ui/context-menu";

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
    >
      <ContextMenuDemo />
    </DocsPage>
  );
}
