import { DocsPage } from "~/components/preview";
import { ButtonDemo } from "~/demos/m3/button";

const snippet = `import { Button, ToggleButton } from "@solid-kit/m3";

// variant: "elevated" | "filled" | "tonal" | "outlined" | "text"
// size: "xs" | "sm" | "md" | "lg" | "xl"
// shape: "round" | "square"
<Button>Save</Button>
<Button variant="outlined" size="md" shape="square">Cancel</Button>
<ToggleButton variant="tonal" pressed={on()} onChange={setOn}>Follow</ToggleButton>`;

export default function ButtonPage() {
  return (
    <DocsPage
      title="Button"
      description="Expressive buttons in five colors and five sizes. Corners morph on press."
      snippet={snippet}
      previewClass="bg-surface text-on-surface"
    >
      <ButtonDemo />
    </DocsPage>
  );
}
