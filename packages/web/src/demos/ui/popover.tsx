import {
  Button,
  Popover,
  PopoverCloseButton,
  PopoverContent,
  PopoverDescription,
  PopoverPortal,
  PopoverTitle,
  PopoverTrigger,
} from "@solid-kit/ui";

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger as={Button}>Open</PopoverTrigger>
      <PopoverPortal>
        <PopoverContent>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>Set the size of the frame.</PopoverDescription>
          <PopoverCloseButton>Close</PopoverCloseButton>
        </PopoverContent>
      </PopoverPortal>
    </Popover>
  );
}
