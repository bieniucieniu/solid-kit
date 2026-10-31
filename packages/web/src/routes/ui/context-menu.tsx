import { DocsPage } from "~/components/preview";
import { ContextMenuDemo } from "~/demos/ui/context-menu";

const snippet = `import { ContextMenu } from "@solid-kit/ui";

<ContextMenu>
  <ContextMenu.Trigger>Right click</ContextMenu.Trigger>
  <ContextMenu.Portal>
    <ContextMenu.Content>
      <ContextMenu.Item>Back</ContextMenu.Item>
      <ContextMenu.Item>Forward</ContextMenu.Item>
    </ContextMenu.Content>
  </ContextMenu.Portal>
</ContextMenu>`;

export default function ContextMenuPage() {
  return (
    <DocsPage title="Context menu" description="A menu opened with a right click." snippet={snippet}>
      <ContextMenuDemo />
    </DocsPage>
  );
}
