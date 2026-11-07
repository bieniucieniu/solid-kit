import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Progress } from "../../ui/src/components/progress";

const meta = {
  title: "UI/Progress",
  component: Progress,
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ProgressDemo />,
};

function ProgressDemo() {
  return (
    <Progress value={64} class="max-w-xs">
      <Progress.Label>Upload</Progress.Label>
      <Progress.ValueLabel />
      <Progress.Track>
        <Progress.Fill />
      </Progress.Track>
    </Progress>
  );
}
