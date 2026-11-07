import { Button, Sheet } from "@solid-kit/ui";
import { For } from "solid-js";

const sides = ["top", "right", "bottom", "left"] as const;

export function SheetDemo() {
  return (
    <div class="flex flex-wrap gap-2">
      <For each={sides}>
        {(side) => (
          <Sheet>
            <Sheet.Trigger as={Button} variant="outline">
              Open {side}
            </Sheet.Trigger>
            <Sheet.Portal>
              <Sheet.Overlay />
              <Sheet.Content side={side}>
                <Sheet.Header>
                  <Sheet.Title>Settings</Sheet.Title>
                  <Sheet.Description>Changes apply to this project.</Sheet.Description>
                </Sheet.Header>
                <p class="text-muted-foreground">Content placed directly in the sheet is padded.</p>
                <Sheet.Footer>
                  <Sheet.CloseButton variant="default">Save</Sheet.CloseButton>
                  <Sheet.CloseButton>Cancel</Sheet.CloseButton>
                </Sheet.Footer>
              </Sheet.Content>
            </Sheet.Portal>
          </Sheet>
        )}
      </For>
    </div>
  );
}
