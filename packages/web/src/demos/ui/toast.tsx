import { Button, Toast, toaster } from "@solid-kit/ui";

export function ToastDemo() {
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
