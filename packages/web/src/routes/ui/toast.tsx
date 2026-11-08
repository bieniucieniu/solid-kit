import { DocsPage } from "~/components/preview";
import { ToastDemo } from "~/demos/ui/toast";

const snippet = `import {
  Button,
  Toast,
  ToastCloseButton,
  ToastDescription,
  toaster,
  ToastList,
  ToastRegion,
  ToastTitle,
} from "@solid-kit/ui";

<Button
  type="button"
  onClick={() =>
    toaster.show((props) => (
      <Toast toastId={props.toastId}>
        <ToastTitle>Saved</ToastTitle>
        <ToastDescription>Your changes are stored.</ToastDescription>
        <ToastCloseButton>Close</ToastCloseButton>
      </Toast>
    ))
  }
>
  Show toast
</Button>
<ToastRegion>
  <ToastList />
</ToastRegion>`;

export default function ToastPage() {
  return (
    <DocsPage title="Toast" description="A short message that appears on demand." snippet={snippet}>
      <ToastDemo />
    </DocsPage>
  );
}
