import { DocsPage } from "~/components/preview";
import { RadioGroupDemo } from "~/demos/ui/radio-group";

const snippet = `import { RadioGroup } from "@solid-kit/ui";

<RadioGroup value={fruit()} onChange={setFruit}>
  <RadioGroup.Label>Fruit</RadioGroup.Label>
  <RadioGroup.Item value="apple">
    <RadioGroup.ItemInput />
    <RadioGroup.ItemControl>
      <RadioGroup.ItemIndicator />
    </RadioGroup.ItemControl>
    <RadioGroup.ItemLabel>Apple</RadioGroup.ItemLabel>
  </RadioGroup.Item>
</RadioGroup>`;

export default function RadioGroupPage() {
  return (
    <DocsPage title="Radio group" description="One choice from a list." snippet={snippet}>
      <RadioGroupDemo />
    </DocsPage>
  );
}
