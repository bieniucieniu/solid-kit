import { Resizable, ResizableHandle, ResizablePanel } from "@solid-kit/ui";

export function ResizableDemo() {
  return (
    <Resizable class="h-64 max-w-md rounded-lg border border-border">
      <ResizablePanel initialSize={0.4} minSize={0.15}>
        <div class="flex h-full items-center justify-center text-xs">Sidebar</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel initialSize={0.6}>
        <Resizable orientation="vertical">
          <ResizablePanel initialSize={0.5}>
            <div class="flex h-full items-center justify-center text-xs">Top</div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel initialSize={0.5}>
            <div class="flex h-full items-center justify-center text-xs">Bottom</div>
          </ResizablePanel>
        </Resizable>
      </ResizablePanel>
    </Resizable>
  );
}
