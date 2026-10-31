import { Button, Sheet } from "@solid-kit/ui";

export function SheetDemo() {
  return (
    <Sheet>
      <Sheet.Trigger as={Button}>Open</Sheet.Trigger>
      <Sheet.Portal>
        <Sheet.Overlay />
        <Sheet.Content>
          <Sheet.Title>Settings</Sheet.Title>
          <Sheet.Description>Changes apply to this project.</Sheet.Description>
          <Sheet.CloseButton>Close</Sheet.CloseButton>
        </Sheet.Content>
      </Sheet.Portal>
    </Sheet>
  );
}
