import { NativeSelect } from "@solid-kit/ui";
import { createSignal } from "solid-js";

export function NativeSelectDemo() {
  const [fruit, setFruit] = createSignal("apple");

  return (
    <NativeSelect
      class="max-w-xs"
      value={fruit()}
      onInput={(event) => setFruit(event.currentTarget.value)}
    >
      <option value="apple">Apple</option>
      <option value="pear">Pear</option>
    </NativeSelect>
  );
}
