import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Alert, AlertDescription, AlertTitle } from "../../1.9/ui/src/components/alert";

const meta = {
  title: "UI/Alert",
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <AlertDemo />,
};

function AlertDemo() {
  return (
    <Alert>
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>You can change this later.</AlertDescription>
    </Alert>
  );
}
