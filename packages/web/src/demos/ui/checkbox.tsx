import { Checkbox, CheckboxLabel } from "@solid-kit/kit/ui";
import { createSignal } from "solid-js";

export function CheckboxDemo() {
  const [checked, setChecked] = createSignal(false);

  return (
    <CheckboxLabel>
      <Checkbox checked={checked()} onCheckedChange={(next) => setChecked(next === true)} />
      Accept terms
    </CheckboxLabel>
  );
}
