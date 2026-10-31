import { RadioGroup } from "@solid-kit/ui";
import { createSignal } from "solid-js";

export function RadioGroupDemo() {
  const [fruit, setFruit] = createSignal("apple");

  return (
    <RadioGroup value={fruit()} onChange={setFruit}>
      <RadioGroup.Label>Fruit</RadioGroup.Label>
      <RadioGroup.Item value="apple">
        <RadioGroup.ItemInput />
        <RadioGroup.ItemControl>
          <RadioGroup.ItemIndicator />
        </RadioGroup.ItemControl>
        <RadioGroup.ItemLabel>Apple</RadioGroup.ItemLabel>
      </RadioGroup.Item>
      <RadioGroup.Item value="pear">
        <RadioGroup.ItemInput />
        <RadioGroup.ItemControl>
          <RadioGroup.ItemIndicator />
        </RadioGroup.ItemControl>
        <RadioGroup.ItemLabel>Pear</RadioGroup.ItemLabel>
      </RadioGroup.Item>
    </RadioGroup>
  );
}
