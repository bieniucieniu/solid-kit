import { Textarea, TextareaControl, TextareaDescription, TextareaLabel } from "@solid-kit/ui";
import { createSignal } from "solid-js";

export function TextareaDemo() {
  const [value, setValue] = createSignal("");

  return (
    <Textarea class="max-w-xs" value={value()} onChange={setValue}>
      <TextareaLabel>Bio</TextareaLabel>
      <TextareaControl placeholder="A short note" />
      <TextareaDescription>Shown on your profile.</TextareaDescription>
    </Textarea>
  );
}
