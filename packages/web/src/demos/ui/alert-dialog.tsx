import { AlertDialog, Button } from "@solid-kit/ui";
import { For } from "solid-js";

const sizes = ["default", "sm"] as const;

export function AlertDialogDemo() {
  return (
    <div class="flex flex-wrap gap-2">
      <For each={sizes}>
        {(size) => (
          <AlertDialog>
            <AlertDialog.Trigger as={Button} variant="outline">
              Delete ({size})
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
              <AlertDialog.Overlay />
              <AlertDialog.Content size={size}>
                <AlertDialog.Header>
                  <AlertDialog.Title>Delete this file?</AlertDialog.Title>
                  <AlertDialog.Description>This cannot be undone.</AlertDialog.Description>
                </AlertDialog.Header>
                <AlertDialog.Footer>
                  <AlertDialog.CloseButton>Cancel</AlertDialog.CloseButton>
                  <AlertDialog.CloseButton variant="destructive">Delete</AlertDialog.CloseButton>
                </AlertDialog.Footer>
              </AlertDialog.Content>
            </AlertDialog.Portal>
          </AlertDialog>
        )}
      </For>
    </div>
  );
}
