import { Button, Tooltip } from "@solid-kit/ui";

export function TooltipDemo() {
  return (
    <Tooltip>
      <Tooltip.Trigger as={Button}>Hover</Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content>
          Saved
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip>
  );
}
