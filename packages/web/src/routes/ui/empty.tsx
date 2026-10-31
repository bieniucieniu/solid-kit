import { DocsPage } from "~/components/preview";
import { EmptyDemo } from "~/demos/ui/empty";

const snippet = `import { Button, Empty } from "@solid-kit/ui";

<Empty>
  <Empty.Header>
    <Empty.Title>No files</Empty.Title>
    <Empty.Description>Upload one to get started.</Empty.Description>
  </Empty.Header>
  <Empty.Content>
    <Button>Upload</Button>
  </Empty.Content>
</Empty>`;

export default function EmptyPage() {
  return (
    <DocsPage title="Empty" description="A placeholder when there is nothing to show." snippet={snippet}>
      <EmptyDemo />
    </DocsPage>
  );
}
