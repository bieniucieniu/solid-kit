import { DocsPage } from "~/components/preview";
import { ComboboxDemo } from "~/demos/ui/combobox";

const snippet = `import { Combobox } from "@solid-kit/ui";

<Combobox
  options={["Apple", "Banana", "Orange"]}
  placeholder="Search fruit"
  itemComponent={(props) => (
    <Combobox.Item item={props.item}>
      <Combobox.ItemLabel>{props.item.rawValue}</Combobox.ItemLabel>
    </Combobox.Item>
  )}
>
  <Combobox.Label>Fruit</Combobox.Label>
  <Combobox.Control>
    <Combobox.Input />
  </Combobox.Control>
  <Combobox.Portal>
    <Combobox.Content>
      <Combobox.Listbox />
    </Combobox.Content>
  </Combobox.Portal>
</Combobox>`;

export default function ComboboxPage() {
  return (
    <DocsPage title="Combobox" description="A text field with a filtered list." snippet={snippet}>
      <ComboboxDemo />
    </DocsPage>
  );
}
