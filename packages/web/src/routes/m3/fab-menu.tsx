import { DocsPage } from "~/components/preview";
import { FabMenuDemo } from "~/demos/m3/fab-menu";

const snippet = `import { FabMenu, FabMenuContent, FabMenuItem, FabMenuPortal, FabMenuTrigger } from "@solid-kit/m3";

<FabMenu color="primary">
  <FabMenuTrigger aria-label="Create"><AddIcon /></FabMenuTrigger>
  <FabMenuPortal>
    <FabMenuContent>
      <FabMenuItem><MailIcon />Message</FabMenuItem>
      <FabMenuItem><PersonIcon />Contact</FabMenuItem>
    </FabMenuContent>
  </FabMenuPortal>
</FabMenu>`;

export default function FabMenuPage() {
  return (
    <DocsPage
      title="FAB menu"
      description="A FAB that opens related actions and turns into a close button."
      snippet={snippet}
      previewClass="bg-surface text-on-surface"
    >
      <FabMenuDemo />
    </DocsPage>
  );
}
