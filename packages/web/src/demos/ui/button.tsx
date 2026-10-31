import { createSignal } from "solid-js";
import { Button } from "@solid-kit/ui";

export function ButtonDemo() {
  const [count, setCount] = createSignal(0);

  return (
    <Button type="button" onClick={() => setCount((value) => value + 1)}>
      Clicked {count()}
    </Button>
  );
}
