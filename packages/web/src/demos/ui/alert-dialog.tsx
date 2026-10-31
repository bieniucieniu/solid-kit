import { AlertDialog, Button } from "@solid-kit/ui";

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialog.Trigger as={Button}>Delete</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay />
        <AlertDialog.Content>
          <AlertDialog.Title>Delete this file?</AlertDialog.Title>
          <AlertDialog.Description>This cannot be undone.</AlertDialog.Description>
          <AlertDialog.CloseButton>Cancel</AlertDialog.CloseButton>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  );
}
