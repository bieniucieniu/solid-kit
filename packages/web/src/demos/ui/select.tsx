import { Select } from "@solid-kit/ui";
import { createSignal } from "solid-js";

const options = ["Apple", "Banana", "Orange"];

export function SelectDemo() {
  const [fruit, setFruit] = createSignal<string | null>(null);

  return (
    <Select
      class="max-w-xs"
      options={options}
      value={fruit()}
      onChange={setFruit}
      placeholder="Pick a fruit"
      itemComponent={(props) => (
        <Select.Item item={props.item}>
          <Select.ItemLabel>{props.item.rawValue}</Select.ItemLabel>
        </Select.Item>
      )}
    >
      <Select.Label>Fruit</Select.Label>
      <Select.Trigger>
        <Select.Value<string>>{(state) => state.selectedOption()}</Select.Value>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content>
          <Select.Listbox />
        </Select.Content>
      </Select.Portal>
    </Select>
  );
}
