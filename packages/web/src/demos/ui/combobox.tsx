import {
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
    </Combobox>
  );
}
