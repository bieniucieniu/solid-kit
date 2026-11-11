import { DocsPage } from "~/components/preview";
import { ToolbarDemo } from "~/demos/m3/toolbar";

const snippet = `import { Toolbar } from "@solid-kit/m3";

// variant: "docked" | "floating"; color: "standard" | "vibrant"
<Toolbar variant="floating" color="vibrant">
  <IconButton aria-label="Edit"><EditIcon /></IconButton>
  <IconButton aria-label="Share"><ShareIcon /></IconButton>
</Toolbar>`;

export default function ToolbarPage() {
  return (
    <DocsPage
      title="Toolbar"
      description="Docked and floating toolbars for frequent actions."
      snippet={snippet}
      previewClass="bg-surface text-on-surface"
    >
      <ToolbarDemo />
    </DocsPage>
  );
}
