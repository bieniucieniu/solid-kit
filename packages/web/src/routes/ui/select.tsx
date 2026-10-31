import { DocsPage } from "~/components/preview";
import { SelectDemo } from "~/demos/ui/select";

const snippet = `import { Select } from "@solid-kit/ui";

<Select
  options={["Apple", "Banana", "Orange"]}
  placeholder="Pick a fruit"
  itemComponent={(props) => (
    <Select.Item item={props.item}>
      <Select.ItemLabel>{props.item.rawValue}</Select.ItemLabel>
    </Select.Item>
  )}
>
  <Select.Label>Fruit</Select.Label>
  <Select.Trigger>
    <Select.Value>{(state) => state.selectedOption()}</Select.Value>
  </Select.Trigger>
  <Select.Portal>
    <Select.Content>
      <Select.Listbox />
    </Select.Content>
  </Select.Portal>
</Select>`;

export default function SelectPage() {
  return (
    <DocsPage title="Select" description="A list of options in a popup." snippet={snippet}>
      <SelectDemo />
    </DocsPage>
  );
}
