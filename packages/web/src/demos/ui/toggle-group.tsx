import { ToggleGroup } from "@solid-kit/ui";
import { createSignal } from "solid-js";

export function ToggleGroupDemo() {
  const [value, setValue] = createSignal<string | null>("left");

  return (
    <ToggleGroup value={value()} onChange={setValue}>
      <ToggleGroup.Item value="left">Left</ToggleGroup.Item>
      <ToggleGroup.Item value="center">Center</ToggleGroup.Item>
      <ToggleGroup.Item value="right">Right</ToggleGroup.Item>
    </ToggleGroup>
  );
}
