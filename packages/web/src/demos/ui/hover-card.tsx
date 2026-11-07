import { Button, HoverCard } from "@solid-kit/ui";

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCard.Trigger as={Button}>Hover</HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content>Ada Lovelace</HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard>
  );
}
