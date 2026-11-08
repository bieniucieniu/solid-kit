import { DocsPage } from "~/components/preview";
import { AlertDialogDemo } from "~/demos/ui/alert-dialog";

const snippet = `import {
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

// AlertDialogContent size: "default" | "sm"
<AlertDialog>
  <AlertDialogTrigger as={Button}>Delete</AlertDialogTrigger>
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogContent size="sm">
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
