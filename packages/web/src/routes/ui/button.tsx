import { DocsPage } from "~/components/preview";
import { ButtonDemo } from "~/demos/ui/button";

const snippet = `import { Button } from "@solid-kit/ui";

<Button>Save</Button>`;

export default function ButtonPage() {
  return (
    <DocsPage title="Button" description="Primary action button." snippet={snippet}>
      <ButtonDemo />
    </DocsPage>
  );
}
