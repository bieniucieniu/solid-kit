import {
  Button,
  HoverCard,
  HoverCardContent,
  HoverCardPortal,
  HoverCardTrigger,
} from "@solid-kit/ui";

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger as={Button}>Hover</HoverCardTrigger>
      <HoverCardPortal>
        <HoverCardContent>Ada Lovelace</HoverCardContent>
      </HoverCardPortal>
    </HoverCard>
  );
}
