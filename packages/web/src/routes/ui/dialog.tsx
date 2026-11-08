import { DocsPage } from "~/components/preview";
import { DialogDemo } from "~/demos/ui/dialog";

const snippet = `import {
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

<Dialog>
  <DialogTrigger as={Button}>Open</DialogTrigger>
  <DialogPortal>
    <DialogOverlay />
    <DialogContent>
      <DialogLabel>Edit profile</DialogLabel>
      <DialogDescription>Details</DialogDescription>
      <DialogClose>Close</DialogClose>
    </DialogContent>
  </DialogPortal>
</Dialog>`;

export default function DialogPage() {
  return (
    <DocsPage
      title="Dialog"
      description="Modal dialog with overlay, title, and close."
      snippet={snippet}
    >
      <DialogDemo />
    </DocsPage>
  );
}
