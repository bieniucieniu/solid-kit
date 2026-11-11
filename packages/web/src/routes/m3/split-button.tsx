import { DocsPage } from "~/components/preview";
import { SplitButtonDemo } from "~/demos/m3/split-button";

const snippet = `import { Menu, MenuContent, MenuItem, MenuPortal, SplitButton, SplitButtonAction, SplitButtonTrigger } from "@solid-kit/m3";

<SplitButton variant="tonal" size="sm">
  <SplitButtonAction>Send</SplitButtonAction>
  <Menu placement="bottom-end">
    <SplitButtonTrigger aria-label="More send options" />
    <MenuPortal>
      <MenuContent>
        <MenuItem>Schedule send</MenuItem>
      </MenuContent>
    </MenuPortal>
  </Menu>
</SplitButton>`;

export default function SplitButtonPage() {
  return (
    <DocsPage
      title="Split button"
      description="A main action joined to a menu of related actions."
      snippet={snippet}
      previewClass="bg-surface text-on-surface"
    >
      <SplitButtonDemo />
    </DocsPage>
  );
}
