import { DocsPage } from "~/components/preview";
import { DialogDemo } from "~/demos/ui/dialog";

const snippet = `import { Button, Dialog } from "@solid-kit/ui";

<Dialog>
  <Dialog.Trigger as={Button}>Open</Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content>
      <Dialog.Label>Edit profile</Dialog.Label>
      <Dialog.Description>Details</Dialog.Description>
      <Dialog.Close>Close</Dialog.Close>
    </Dialog.Content>
  </Dialog.Portal>
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
