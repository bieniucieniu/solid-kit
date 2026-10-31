import { DocsPage } from "~/components/preview";
import { AlertDialogDemo } from "~/demos/ui/alert-dialog";

const snippet = `import { AlertDialog, Button } from "@solid-kit/ui";

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
</AlertDialog>`;

export default function AlertDialogPage() {
  return (
    <DocsPage title="Alert dialog" description="A modal that asks for confirmation." snippet={snippet}>
      <AlertDialogDemo />
    </DocsPage>
  );
}
