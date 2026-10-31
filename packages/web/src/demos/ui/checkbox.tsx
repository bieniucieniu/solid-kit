import { Checkbox } from "@solid-kit/ui";
import { createSignal } from "solid-js";

export function CheckboxDemo() {
  const [checked, setChecked] = createSignal(false);

  return (
    <Checkbox checked={checked()} onChange={setChecked}>
      <Checkbox.Input />
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Label>Accept terms</Checkbox.Label>
    </Checkbox>
  );
}
