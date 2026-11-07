import { DocsPage } from "~/components/preview";
import { TooltipDemo } from "~/demos/ui/tooltip";

const snippet = `import { Button, Tooltip } from "@solid-kit/ui";

<Tooltip>
  <Tooltip.Trigger as={Button}>Hover</Tooltip.Trigger>
  <Tooltip.Portal>
    <Tooltip.Content>
      Saved
    </Tooltip.Content>
  </Tooltip.Portal>
</Tooltip>`;

export default function TooltipPage() {
  return (
    <DocsPage title="Tooltip" description="Hover content anchored to a trigger." snippet={snippet}>
      <TooltipDemo />
    </DocsPage>
  );
}
