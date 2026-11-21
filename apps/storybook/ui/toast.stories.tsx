import type { Meta, StoryObj } from "storybook-solidjs-vite";
import {
  Toast,
  ToastCloseButton,
  ToastDescription,
  toaster,
  ToastList,
  ToastRegion,
  ToastTitle,
  Button,
} from "@solid-kit/kit-1.9/ui";

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
              <ToastTitle>Saved</ToastTitle>
              <ToastDescription>Your changes are stored.</ToastDescription>
              <ToastCloseButton>Close</ToastCloseButton>
            </Toast>
          ))
        }
      >
        Show toast
      </Button>
      <ToastRegion>
        <ToastList />
      </ToastRegion>
    </>
  );
}
