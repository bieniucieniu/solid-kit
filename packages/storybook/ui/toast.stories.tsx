import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Toast, toaster } from "../../ui/src/components/toast";
import { Button } from "../../ui/src/components/button";

const meta = {
  title: "UI/Toast",
  component: Toast,
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ToastDemo />,
};

function ToastDemo() {
  return (
    <>
      <Button
        type="button"
        onClick={() =>
          toaster.show((props) => (
            <Toast toastId={props.toastId} persistent>
              <Toast.Title>Saved</Toast.Title>
              <Toast.Description>Your changes are stored.</Toast.Description>
              <Toast.CloseButton>Close</Toast.CloseButton>
            </Toast>
          ))
        }
      >
        Show toast
      </Button>
      <Toast.Region>
        <Toast.List />
      </Toast.Region>
    </>
  );
}
