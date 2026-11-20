import type { Meta, StoryObj } from "storybook-solidjs-vite";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "../../1.9/ui/src/components/empty";
import { Button } from "../../1.9/ui/src/components/button";

const meta = {
  title: "UI/Empty",
  component: Empty,
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <EmptyDemo />,
};

function EmptyDemo() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>No files</EmptyTitle>
        <EmptyDescription>Upload one to get started.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button type="button">Upload</Button>
      </EmptyContent>
    </Empty>
  );
}
