import { DocsPage } from "~/components/preview";
import { ToastDemo } from "~/demos/ui/toast";

const snippet = `import { Button, Toast, toaster } from "@solid-kit/ui";

<Button
  type="button"
  onClick={() =>
    toaster.show((props) => (
      <Toast toastId={props.toastId}>
        <Toast.Title>Saved</Toast.Title>
        <Toast.Description>Your changes are stored.</Toast.Description>
        <Toast.CloseButton>Close</Toast.CloseButton>
      </Toast>
    ))
  }
>
  Show toast
</Button>
<Toast.Region>
  <Toast.List />
</Toast.Region>`;

export default function ToastPage() {
  return (
    <DocsPage title="Toast" description="A short message that appears on demand." snippet={snippet}>
      <ToastDemo />
    </DocsPage>
  );
}
