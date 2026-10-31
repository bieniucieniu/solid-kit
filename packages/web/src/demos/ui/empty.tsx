import { Button, Empty } from "@solid-kit/ui";

export function EmptyDemo() {
  return (
    <Empty>
      <Empty.Header>
        <Empty.Title>No files</Empty.Title>
        <Empty.Description>Upload one to get started.</Empty.Description>
      </Empty.Header>
      <Empty.Content>
        <Button type="button">Upload</Button>
      </Empty.Content>
    </Empty>
  );
}
