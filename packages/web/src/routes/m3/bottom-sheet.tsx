import { DocsPage } from "~/components/preview";
import { BottomSheetDemo } from "~/demos/m3/bottom-sheet";

const snippet = `import { BottomSheet, BottomSheetBody, BottomSheetContent, BottomSheetDragHandle, BottomSheetOverlay, BottomSheetPortal, BottomSheetTitle, BottomSheetTrigger } from "@solid-kit/m3";

<BottomSheet>
  <BottomSheetTrigger as={Button}>Share</BottomSheetTrigger>
  <BottomSheetPortal>
    <BottomSheetOverlay />
    <BottomSheetContent>
      <BottomSheetDragHandle />
      <BottomSheetTitle>Share</BottomSheetTitle>
      <BottomSheetBody>{/* scrolls when it outgrows the sheet */}</BottomSheetBody>
    </BottomSheetContent>
  </BottomSheetPortal>
</BottomSheet>`;

export default function BottomSheetPage() {
  return (
    <DocsPage
      title="Bottom sheet"
      description="A modal sheet anchored to the bottom of the screen."
      snippet={snippet}
      previewClass="bg-surface text-on-surface"
    >
      <BottomSheetDemo />
    </DocsPage>
  );
}
