import { DocsPage } from "~/components/preview";
import { BreadcrumbDemo } from "~/demos/ui/breadcrumb";

const snippet = `import { Breadcrumb, BreadcrumbLink, BreadcrumbSeparator } from "@solid-kit/ui";

<Breadcrumb separator="/">
  <ol>
    <li>
      <BreadcrumbLink href="/ui">UI</BreadcrumbLink>
      <BreadcrumbSeparator />
    </li>
    <li>
      <BreadcrumbLink current>Breadcrumb</BreadcrumbLink>
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
