import { DocsPage } from "~/components/preview";
import { AlertDemo } from "~/demos/ui/alert";

const snippet = `import { Alert, AlertDescription, AlertTitle } from "@solid-kit/ui";

// variant: "default" | "destructive"
<Alert variant="destructive">
  <AlertTitle>Payment failed</AlertTitle>
  <AlertDescription>Check your card details and try again.</AlertDescription>
</Alert>`;

export default function AlertPage() {
  return (
    <DocsPage title="Alert" description="A short status message." snippet={snippet}>
      <AlertDemo />
    </DocsPage>
  );
}
