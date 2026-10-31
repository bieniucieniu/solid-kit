import { Input } from "@solid-kit/ui";
import { createSignal } from "solid-js";

export function InputDemo() {
  const [value, setValue] = createSignal("");

  return (
    <Input class="max-w-xs" value={value()} onChange={setValue}>
      <Input.Label>Email</Input.Label>
      <Input.Input type="email" placeholder="ada@example.com" />
      <Input.Description>Used to sign in.</Input.Description>
    </Input>
  );
}
