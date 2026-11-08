import { Switch, SwitchControl, SwitchInput, SwitchLabel, SwitchThumb } from "@solid-kit/ui";
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
            <SwitchInput />
            <SwitchControl>
              <SwitchThumb />
            </SwitchControl>
            <SwitchLabel>Airplane mode ({size})</SwitchLabel>
          </Switch>
        )}
      </For>
      <Switch disabled>
        <SwitchInput />
        <SwitchControl>
          <SwitchThumb />
        </SwitchControl>
        <SwitchLabel>Disabled</SwitchLabel>
      </Switch>
    </VariantRow>
  );
}
