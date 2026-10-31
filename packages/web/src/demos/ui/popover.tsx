import { Button, Popover } from "@solid-kit/ui";

export function PopoverDemo() {
  return (
    <Popover>
      <Popover.Trigger as={Button}>Open</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          <Popover.Title>Dimensions</Popover.Title>
          <Popover.Description>Set the size of the frame.</Popover.Description>
          <Popover.CloseButton>Close</Popover.CloseButton>
        </Popover.Content>
      </Popover.Portal>
    </Popover>
  );
}
