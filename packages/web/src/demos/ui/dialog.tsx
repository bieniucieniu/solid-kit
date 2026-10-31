import { Button, Dialog } from "@solid-kit/ui";

export function DialogDemo() {
  return (
    <Dialog>
      <Dialog.Trigger as={Button}>Open</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Label>Edit profile</Dialog.Label>
          <Dialog.Description>This dialog stays on the page until you close it.</Dialog.Description>
          <Dialog.Close class="mt-4">Close</Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
