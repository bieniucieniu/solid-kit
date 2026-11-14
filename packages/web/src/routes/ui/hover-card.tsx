import { DocsPage } from "~/components/preview";
import { HoverCardDemo } from "~/demos/ui/hover-card";
import source from "~/demos/ui/hover-card.tsx?raw";

const snippet = `import {
  Button,
  HoverCard,
  HoverCardContent,
  HoverCardPortal,
  HoverCardTrigger,
} from "@solid-kit/ui";

<HoverCard>
  <HoverCardTrigger as={Button}>Hover</HoverCardTrigger>
  <HoverCardPortal>
    <HoverCardContent>
      Ada Lovelace
    </HoverCardContent>
  </HoverCardPortal>
</HoverCard>`;

export default function HoverCardPage() {
  return (
    <DocsPage
      title="Hover card"
      description="Content that appears on hover."
      snippet={snippet}
      source={source}
      sourceTitle="demos/ui/hover-card.tsx"
    >
      <HoverCardDemo />
    </DocsPage>
  );
}
