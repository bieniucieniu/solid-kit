import { DocsPage } from "~/components/preview";
import { TooltipDemo } from "~/demos/ui/tooltip";

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
    <DocsPage title="Tooltip" description="Hover content anchored to a trigger." snippet={snippet}>
      <TooltipDemo />
    </DocsPage>
  );
}
