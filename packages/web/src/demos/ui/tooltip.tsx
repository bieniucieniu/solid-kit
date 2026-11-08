import { Button, Tooltip, TooltipContent, TooltipPortal, TooltipTrigger } from "@solid-kit/ui";

export function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger as={Button}>Hover</TooltipTrigger>
      <TooltipPortal>
        <TooltipContent>Saved</TooltipContent>
      </TooltipPortal>
    </Tooltip>
  );
}
