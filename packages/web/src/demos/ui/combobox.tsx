import { Combobox } from "@solid-kit/ui";
import { createSignal } from "solid-js";

const options = ["Apple", "Banana", "Orange"];

export function ComboboxDemo() {
  const [value, setValue] = createSignal<string | null>(null);

  return (
    <Combobox
      class="max-w-xs"
      options={options}
      value={value()}
      onChange={setValue}
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
    </Combobox>
  );
}
