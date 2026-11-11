import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogLabel,
  AlertDialogOverlay,
  AlertDialogPortal,
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
                  <AlertDialogLabel>Delete this file?</AlertDialogLabel>
                  <AlertDialogDescription>This cannot be undone.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogClose>Cancel</AlertDialogClose>
                  <AlertDialogClose variant="destructive">Delete</AlertDialogClose>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogPortal>
          </AlertDialog>
        )}
      </For>
    </div>
  );
}
