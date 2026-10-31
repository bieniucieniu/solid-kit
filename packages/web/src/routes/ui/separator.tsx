import { DocsPage } from "~/components/preview";
import { SeparatorDemo } from "~/demos/ui/separator";

const snippet = `import { Separator } from "@solid-kit/ui";

<div>
  <span>Above</span>
  <Separator />
  <span>Below</span>
</div>`;

export default function SeparatorPage() {
  return (
    <DocsPage title="Separator" description="A line between sections." snippet={snippet}>
      <SeparatorDemo />
    </DocsPage>
  );
}
