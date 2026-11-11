import { DocsPage } from "~/components/preview";
import { TooltipDemo } from "~/demos/m3/tooltip";

const snippet = `import { RichTooltip, RichTooltipContent, RichTooltipPortal, RichTooltipSubhead, RichTooltipTrigger, Tooltip, TooltipContent, TooltipPortal, TooltipTrigger } from "@solid-kit/m3";

<Tooltip>
  <TooltipTrigger as={IconButton} aria-label="Favorite"><StarIcon /></TooltipTrigger>
  <TooltipPortal><TooltipContent>Add to favorites</TooltipContent></TooltipPortal>
</Tooltip>`;

export default function TooltipPage() {
  return (
    <DocsPage
      title="Tooltip"
      description="Plain tooltips for labels; rich tooltips with a subhead and actions."
      snippet={snippet}
      previewClass="bg-surface text-on-surface"
    >
      <TooltipDemo />
    </DocsPage>
  );
}
