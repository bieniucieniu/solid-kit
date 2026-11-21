import { Button, ToastRegion, toast } from "@solid-kit/kit/ui";

export function ToastDemo() {
  return (
    <>
      <Button
        type="button"
        onClick={() => {
          toast("Saved", {
            description: "Your changes are stored.",
            action: { label: "Undo", onAction: () => toast("Change undone") },
          });
        }}
      >
        Show toast
      </Button>
      <ToastRegion />
    </>
  );
}
