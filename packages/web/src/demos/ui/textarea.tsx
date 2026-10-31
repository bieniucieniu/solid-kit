import { Textarea } from "@solid-kit/ui";
import { createSignal } from "solid-js";

export function TextareaDemo() {
  const [value, setValue] = createSignal("");

  return (
    <Textarea class="max-w-xs" value={value()} onChange={setValue}>
      <Textarea.Label>Bio</Textarea.Label>
      <Textarea.TextArea placeholder="A short note" />
      <Textarea.Description>Shown on your profile.</Textarea.Description>
    </Textarea>
  );
}
