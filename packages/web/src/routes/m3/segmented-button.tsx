import { DocsPage } from "~/components/preview";
import { SegmentedButtonDemo } from "~/demos/m3/segmented-button";

const snippet = `import { SegmentedButton, SegmentedButtonIcon, SegmentedButtonItem } from "@solid-kit/m3";

<SegmentedButton value={size()} onChange={setSize}>
  <SegmentedButtonItem value="s">Small</SegmentedButtonItem>
  <SegmentedButtonItem value="m">
    <SegmentedButtonIcon><StarIcon /></SegmentedButtonIcon>
    Medium
  </SegmentedButtonItem>
</SegmentedButton>`;

export default function SegmentedButtonPage() {
  return (
    <DocsPage
      title="Segmented button"
      description="Select one or several options in an outlined row."
      snippet={snippet}
      previewClass="bg-surface text-on-surface"
    >
      <SegmentedButtonDemo />
    </DocsPage>
  );
}
