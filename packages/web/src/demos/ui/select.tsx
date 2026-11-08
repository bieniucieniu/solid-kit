import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemLabel,
  SelectLabel,
  SelectListbox,
  SelectPortal,
  SelectTrigger,
  SelectValue,
} from "@solid-kit/ui";
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
        <SelectItem item={props.item}>
          <SelectItemLabel>{props.item.rawValue}</SelectItemLabel>
        </SelectItem>
      )}
    >
      <SelectLabel>Fruit</SelectLabel>
      <SelectTrigger>
        <SelectValue<string>>{(state) => state.selectedOption()}</SelectValue>
      </SelectTrigger>
      <SelectPortal>
        <SelectContent>
          <SelectListbox />
        </SelectContent>
      </SelectPortal>
    </Select>
  );
}
