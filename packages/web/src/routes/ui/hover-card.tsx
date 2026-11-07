import { DocsPage } from "~/components/preview";
import { HoverCardDemo } from "~/demos/ui/hover-card";

const snippet = `import { Button, HoverCard } from "@solid-kit/ui";

<HoverCard>
  <HoverCard.Trigger as={Button}>Hover</HoverCard.Trigger>
  <HoverCard.Portal>
    <HoverCard.Content>
      Ada Lovelace
    </HoverCard.Content>
  </HoverCard.Portal>
</HoverCard>`;

export default function HoverCardPage() {
  return (
    <DocsPage title="Hover card" description="Content that appears on hover." snippet={snippet}>
      <HoverCardDemo />
    </DocsPage>
  );
}
