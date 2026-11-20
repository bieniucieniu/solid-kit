import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Spinner } from "../../1.9/ui/src/components/spinner";

const meta = {
  title: "UI/Spinner",
  component: Spinner,
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <SpinnerDemo />,
};

function SpinnerDemo() {
  return <Spinner />;
}
