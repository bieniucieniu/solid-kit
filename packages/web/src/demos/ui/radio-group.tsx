import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemIndicator,
  RadioGroupItemInput,
  RadioGroupItemLabel,
  RadioGroupLabel,
} from "@solid-kit/ui";
import { createSignal } from "solid-js";

export function RadioGroupDemo() {
  const [fruit, setFruit] = createSignal("apple");

  return (
    <RadioGroup value={fruit()} onChange={setFruit}>
      <RadioGroupLabel>Fruit</RadioGroupLabel>
      <RadioGroupItem value="apple">
        <RadioGroupItemInput />
        <RadioGroupItemControl>
          <RadioGroupItemIndicator />
        </RadioGroupItemControl>
        <RadioGroupItemLabel>Apple</RadioGroupItemLabel>
      </RadioGroupItem>
      <RadioGroupItem value="pear">
        <RadioGroupItemInput />
        <RadioGroupItemControl>
          <RadioGroupItemIndicator />
        </RadioGroupItemControl>
        <RadioGroupItemLabel>Pear</RadioGroupItemLabel>
      </RadioGroupItem>
    </RadioGroup>
  );
}
