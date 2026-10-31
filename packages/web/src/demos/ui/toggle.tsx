import { Toggle } from "@solid-kit/ui";
import { createSignal } from "solid-js";

export function ToggleDemo() {
  const [pressed, setPressed] = createSignal(false);

  return (
    <Toggle pressed={pressed()} onChange={setPressed}>
      Bold
    </Toggle>
  );
}
