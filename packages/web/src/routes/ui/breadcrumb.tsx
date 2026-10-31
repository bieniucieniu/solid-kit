import { DocsPage } from "~/components/preview";
import { BreadcrumbDemo } from "~/demos/ui/breadcrumb";

const snippet = `import { Breadcrumb } from "@solid-kit/ui";

<Breadcrumb separator="/">
  <ol>
    <li>
      <Breadcrumb.Link href="/ui">UI</Breadcrumb.Link>
      <Breadcrumb.Separator />
    </li>
    <li>
      <Breadcrumb.Link current>Breadcrumb</Breadcrumb.Link>
    </li>
  </ol>
</Breadcrumb>`;

export default function BreadcrumbPage() {
  return (
    <DocsPage title="Breadcrumb" description="The path back to parent pages." snippet={snippet}>
      <BreadcrumbDemo />
    </DocsPage>
  );
}
