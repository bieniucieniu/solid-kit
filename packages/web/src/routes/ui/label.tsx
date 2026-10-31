import { DocsPage } from "~/components/preview";
import { LabelDemo } from "~/demos/ui/label";

const snippet = `import { Label } from "@solid-kit/ui";

<Label for="name">Name</Label>`;

export default function LabelPage() {
  return (
    <DocsPage title="Label" description="A caption for a form control." snippet={snippet}>
      <LabelDemo />
    </DocsPage>
  );
}
