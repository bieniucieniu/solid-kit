import { buttonVariants, HoverCard, HoverCardContent, HoverCardTrigger } from "@solid-kit/kit/ui";

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger class={buttonVariants()}>Hover</HoverCardTrigger>
      <HoverCardContent>Ada Lovelace</HoverCardContent>
    </HoverCard>
  );
}
