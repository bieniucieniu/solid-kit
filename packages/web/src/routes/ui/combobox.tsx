import { DocsPage } from "~/components/preview";
import { ComboboxDemo } from "~/demos/ui/combobox";
import source from "~/demos/ui/combobox.tsx?raw";

const snippet = `import {
  Combobox,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemLabel,
  ComboboxLabel,
  ComboboxListbox,
  ComboboxPortal,
} from "@solid-kit/ui";

<Combobox
  options={["Apple", "Banana", "Orange"]}
  placeholder="Search fruit"
  itemComponent={(props) => (
    <ComboboxItem item={props.item}>
      <ComboboxItemLabel>{props.item.rawValue}</ComboboxItemLabel>
    </ComboboxItem>
  )}
>
  <ComboboxLabel>Fruit</ComboboxLabel>
  <ComboboxControl>
    <ComboboxInput />
  </ComboboxControl>
  <ComboboxPortal>
    <ComboboxContent>
      <ComboboxListbox />
    </ComboboxContent>
  </ComboboxPortal>
</Combobox>`;

export default function ComboboxPage() {
  return (
    <DocsPage
      title="Combobox"
      description="A text field with a filtered list."
      snippet={snippet}
      source={source}
      sourceTitle="demos/ui/combobox.tsx"
    >
      <ComboboxDemo />
    </DocsPage>
  );
}
