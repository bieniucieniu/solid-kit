import {
  Button,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverLabel,
  PopoverPortal,
  PopoverTrigger,
} from "@solid-kit/ui";

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger as={Button}>Open</PopoverTrigger>
      <PopoverPortal>
        <PopoverContent>
          <PopoverLabel>Dimensions</PopoverLabel>
          <PopoverDescription>Set the size of the frame.</PopoverDescription>
          <PopoverClose>Close</PopoverClose>
        </PopoverContent>
      </PopoverPortal>
    </Popover>
  );
}
