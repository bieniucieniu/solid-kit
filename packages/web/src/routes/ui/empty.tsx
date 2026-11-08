import { DocsPage } from "~/components/preview";
import { EmptyDemo } from "~/demos/ui/empty";

const snippet = `import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@solid-kit/ui";

<Empty>
  <EmptyHeader>
    <EmptyTitle>No files</EmptyTitle>
    <EmptyDescription>Upload one to get started.</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>Upload</Button>
  </EmptyContent>
</Empty>`;

export default function EmptyPage() {
  return (
    <DocsPage
      title="Empty"
      description="A placeholder when there is nothing to show."
      snippet={snippet}
    >
      <EmptyDemo />
    </DocsPage>
  );
}
