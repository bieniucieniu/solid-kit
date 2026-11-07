import { DocsPage } from "~/components/preview";
import { AlertDemo } from "~/demos/ui/alert";

const snippet = `import { Alert } from "@solid-kit/ui";

// variant: "default" | "destructive"
<Alert variant="destructive">
  <Alert.Title>Payment failed</Alert.Title>
  <Alert.Description>Check your card details and try again.</Alert.Description>
</Alert>`;

export default function AlertPage() {
  return (
    <DocsPage title="Alert" description="A short status message." snippet={snippet}>
      <AlertDemo />
    </DocsPage>
  );
}
