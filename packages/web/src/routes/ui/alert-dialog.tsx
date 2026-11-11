import { DocsPage } from "~/components/preview";
import { AlertDialogDemo } from "~/demos/ui/alert-dialog";

const snippet = `import {
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

// AlertDialogContent size: "default" | "sm"
<AlertDialog>
  <AlertDialogTrigger as={Button}>Delete</AlertDialogTrigger>
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogContent size="sm">
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
