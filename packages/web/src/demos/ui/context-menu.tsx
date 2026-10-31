import { ContextMenu } from "@solid-kit/ui";
import { createSignal } from "solid-js";

export function ContextMenuDemo() {
  const [action, setAction] = createSignal("None");

  return (
    <div class="flex flex-col items-start gap-3">
      <ContextMenu>
        <ContextMenu.Trigger class="flex h-24 w-64 items-center justify-center rounded-lg border border-dashed border-border text-xs text-muted-foreground">
          Right click
        </ContextMenu.Trigger>
        <ContextMenu.Portal>
          <ContextMenu.Content>
            <ContextMenu.Item onSelect={() => setAction("Back")}>Back</ContextMenu.Item>
            <ContextMenu.Item onSelect={() => setAction("Forward")}>Forward</ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu.Portal>
      </ContextMenu>
      <p class="text-xs text-muted-foreground">Action: {action()}</p>
    </div>
  );
}
