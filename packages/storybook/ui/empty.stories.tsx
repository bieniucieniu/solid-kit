import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Empty } from "../../ui/src/components/empty";
import { Button } from "../../ui/src/components/button";

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
