import { DocsPage } from "~/components/preview";
import { SheetDemo } from "~/demos/ui/sheet";

const snippet = `import { Button, Sheet } from "@solid-kit/ui";

// Sheet.Content side: "top" | "right" | "bottom" | "left"
<Sheet>
  <Sheet.Trigger as={Button}>Open</Sheet.Trigger>
  <Sheet.Portal>
    <Sheet.Overlay />
    <Sheet.Content side="left">
      <Sheet.Header>
        <Sheet.Title>Settings</Sheet.Title>
        <Sheet.Description>Changes apply to this project.</Sheet.Description>
      </Sheet.Header>
      <Sheet.Footer>
        <Sheet.CloseButton>Close</Sheet.CloseButton>
      </Sheet.Footer>
    </Sheet.Content>
  </Sheet.Portal>
</Sheet>`;

export default function SheetPage() {
  return (
    <DocsPage title="Sheet" description="A panel that slides in from the right." snippet={snippet}>
      <SheetDemo />
    </DocsPage>
  );
}
