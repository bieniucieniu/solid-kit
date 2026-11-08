import { Input, InputControl, InputDescription, InputLabel } from "@solid-kit/ui";
import { createSignal } from "solid-js";

export function InputDemo() {
  const [value, setValue] = createSignal("");

  return (
    <Input class="max-w-xs" value={value()} onChange={setValue}>
      <InputLabel>Email</InputLabel>
      <InputControl type="email" placeholder="ada@example.com" />
      <InputDescription>Used to sign in.</InputDescription>
    </Input>
  );
}
