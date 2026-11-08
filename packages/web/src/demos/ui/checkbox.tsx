import {
  Checkbox,
  CheckboxControl,
  CheckboxIndicator,
  CheckboxInput,
  CheckboxLabel,
} from "@solid-kit/ui";
import { createSignal } from "solid-js";

export function CheckboxDemo() {
  const [checked, setChecked] = createSignal(false);

  return (
    <Checkbox checked={checked()} onChange={setChecked}>
      <CheckboxInput />
      <CheckboxControl>
        <CheckboxIndicator />
      </CheckboxControl>
      <CheckboxLabel>Accept terms</CheckboxLabel>
    </Checkbox>
  );
}
