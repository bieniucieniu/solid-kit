import { DocsPage } from "~/components/preview";
import { AlertDemo } from "~/demos/ui/alert";

const snippet = `import { Alert } from "@solid-kit/ui";

<Alert>
  <Alert.Title>Heads up</Alert.Title>
  <Alert.Description>You can change this later.</Alert.Description>
</Alert>`;

export default function AlertPage() {
  return (
    <DocsPage title="Alert" description="A short status message." snippet={snippet}>
      <AlertDemo />
    </DocsPage>
  );
}
