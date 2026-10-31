import { DocsPage } from "~/components/preview";
import { BadgeDemo } from "~/demos/ui/badge";

const snippet = `import { Badge } from "@solid-kit/ui";

<Badge>New</Badge>`;

export default function BadgePage() {
  return (
    <DocsPage title="Badge" description="A small status label." snippet={snippet}>
      <BadgeDemo />
    </DocsPage>
  );
}
