import {
  Button,
  Toast,
  ToastCloseButton,
  ToastDescription,
  toaster,
  ToastList,
  ToastRegion,
  ToastTitle,
} from "@solid-kit/ui";

export function ToastDemo() {
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
