import { Switch } from "@solid-kit/ui";
import { createSignal } from "solid-js";

export function SwitchDemo() {
  const [checked, setChecked] = createSignal(false);

  return (
    <Switch checked={checked()} onChange={setChecked}>
      <Switch.Input />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Airplane mode</Switch.Label>
    </Switch>
  );
}
