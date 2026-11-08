import {
  AlertDialog,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from "@solid-kit/ui";
import { For } from "solid-js";

const sizes = ["default", "sm"] as const;

export function AlertDialogDemo() {
  return (
    <div class="flex flex-wrap gap-2">
      <For each={sizes}>
        {(size) => (
          <AlertDialog>
            <AlertDialogTrigger as={Button} variant="outline">
              Delete ({size})
            </AlertDialogTrigger>
            <AlertDialogPortal>
              <AlertDialogOverlay />
              <AlertDialogContent size={size}>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete this file?</AlertDialogTitle>
                  <AlertDialogDescription>This cannot be undone.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCloseButton>Cancel</AlertDialogCloseButton>
                  <AlertDialogCloseButton variant="destructive">Delete</AlertDialogCloseButton>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogPortal>
          </AlertDialog>
        )}
      </For>
    </div>
  );
}
