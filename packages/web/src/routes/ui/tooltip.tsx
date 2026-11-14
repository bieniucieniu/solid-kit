import { DocsPage } from "~/components/preview";
import { TooltipDemo } from "~/demos/ui/tooltip";
import source from "~/demos/ui/tooltip.tsx?raw";

const snippet = `import { Button, Tooltip, TooltipContent, TooltipPortal, TooltipTrigger } from "@solid-kit/ui";

<Tooltip>
  <TooltipTrigger as={Button}>Hover</TooltipTrigger>
  <TooltipPortal>
    <TooltipContent>
      Saved
    </TooltipContent>
  </TooltipPortal>
</Tooltip>`;

export default function TooltipPage() {
  return (
    <DocsPage
      title="Tooltip"
      description="Hover content anchored to a trigger."
      snippet={snippet}
      source={source}
      sourceTitle="demos/ui/tooltip.tsx"
    >
      <TooltipDemo />
    </DocsPage>
  );
}
