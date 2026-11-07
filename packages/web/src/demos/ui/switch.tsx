import { Switch } from "@solid-kit/ui";
import { createSignal, For } from "solid-js";
import { VariantRow } from "~/components/preview";

const sizes = ["sm", "default"] as const;

export function SwitchDemo() {
  const [checked, setChecked] = createSignal(false);

  return (
    <VariantRow label="Sizes" class="gap-6">
      <For each={sizes}>
        {(size) => (
          <Switch size={size} checked={checked()} onChange={setChecked}>
            <Switch.Input />
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            <Switch.Label>Airplane mode ({size})</Switch.Label>
          </Switch>
        )}
      </For>
      <Switch disabled>
        <Switch.Input />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label>Disabled</Switch.Label>
      </Switch>
    </VariantRow>
  );
}
