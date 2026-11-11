import { DocsPage } from "~/components/preview";
import { ResizableDemo } from "~/demos/ui/resizable";

const snippet = `import { Resizable, ResizableHandle, ResizablePanel } from "@solid-kit/ui";

<Resizable class="h-64 rounded-lg border">
  <ResizablePanel initialSize={0.4} minSize={0.15}>Sidebar</ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel initialSize={0.6}>
    <Resizable orientation="vertical">
      <ResizablePanel>Top</ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>Bottom</ResizablePanel>
    </Resizable>
  </ResizablePanel>
</Resizable>`;

export default function ResizablePage() {
  return (
    <DocsPage
      title="Resizable"
      description="Panel groups resized by dragging or with the keyboard."
      snippet={snippet}
    >
      <ResizableDemo />
    </DocsPage>
  );
}
