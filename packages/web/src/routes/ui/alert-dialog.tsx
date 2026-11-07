import { DocsPage } from "~/components/preview";
import { AlertDialogDemo } from "~/demos/ui/alert-dialog";

const snippet = `import { AlertDialog, Button } from "@solid-kit/ui";

// AlertDialog.Content size: "default" | "sm"
<AlertDialog>
  <AlertDialog.Trigger as={Button}>Delete</AlertDialog.Trigger>
  <AlertDialog.Portal>
    <AlertDialog.Overlay />
    <AlertDialog.Content size="sm">
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
</AlertDialog>`;

export default function AlertDialogPage() {
  return (
    <DocsPage
      title="Alert dialog"
      description="A modal that asks for confirmation."
      snippet={snippet}
    >
      <AlertDialogDemo />
    </DocsPage>
  );
}
