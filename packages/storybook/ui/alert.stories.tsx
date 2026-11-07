import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Alert } from "../../ui/src/components/alert";

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
      <Alert.Title>Heads up</Alert.Title>
      <Alert.Description>You can change this later.</Alert.Description>
    </Alert>
  );
}
