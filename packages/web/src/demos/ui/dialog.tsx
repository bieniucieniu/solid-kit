import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogLabel,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "@solid-kit/ui";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger as={Button}>Open</DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogLabel>Edit profile</DialogLabel>
          <DialogDescription>This dialog stays on the page until you close it.</DialogDescription>
          <DialogClose class="mt-4">Close</DialogClose>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
