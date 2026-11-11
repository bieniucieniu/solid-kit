import { DocsPage } from "~/components/preview";
import { DialogDemo } from "~/demos/m3/dialog";

const snippet = `import { Dialog, DialogActions, DialogClose, DialogContent, DialogDescription, DialogHeadline, DialogOverlay, DialogPortal, DialogTrigger } from "@solid-kit/m3";

<Dialog>
  <DialogTrigger as={Button}>Delete</DialogTrigger>
  <DialogPortal>
    <DialogOverlay />
    <DialogContent>
      <DialogHeadline>Permanently delete?</DialogHeadline>
      <DialogDescription>This can't be undone.</DialogDescription>
      <DialogActions>
        <DialogClose>Cancel</DialogClose>
        <DialogClose>Delete</DialogClose>
      </DialogActions>
    </DialogContent>
  </DialogPortal>
</Dialog>`;

export default function DialogPage() {
  return (
    <DocsPage
      title="Dialog"
      description="Basic and full-screen dialogs."
      snippet={snippet}
      previewClass="bg-surface text-on-surface"
    >
      <DialogDemo />
    </DocsPage>
  );
}
