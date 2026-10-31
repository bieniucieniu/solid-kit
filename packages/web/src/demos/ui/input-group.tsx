import { InputGroup } from "@solid-kit/ui";
import { createSignal } from "solid-js";

export function InputGroupDemo() {
  const [value, setValue] = createSignal("");

  return (
    <InputGroup class="max-w-xs">
      <span class="text-muted-foreground">https://</span>
      <input
        class="min-w-0 flex-1 bg-transparent py-2 text-foreground outline-none"
        placeholder="example.com"
        value={value()}
        onInput={(event) => setValue(event.currentTarget.value)}
      />
    </InputGroup>
  );
}
