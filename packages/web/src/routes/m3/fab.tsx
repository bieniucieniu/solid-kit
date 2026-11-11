import { DocsPage } from "~/components/preview";
import { FabDemo } from "~/demos/m3/fab";

const snippet = `import { ExtendedFab, Fab } from "@solid-kit/m3";

// variant: "tonal-primary" | "tonal-secondary" | "tonal-tertiary" | "primary" | "secondary" | "tertiary"
// size: "default" | "md" | "lg"
<Fab aria-label="Compose"><EditIcon /></Fab>
<ExtendedFab size="md"><EditIcon />Compose</ExtendedFab>`;

export default function FabPage() {
  return (
    <DocsPage
      title="FAB"
      description="Floating action buttons for the screen's primary action, in three sizes and six colors."
      snippet={snippet}
      previewClass="bg-surface text-on-surface"
    >
      <FabDemo />
    </DocsPage>
  );
}
