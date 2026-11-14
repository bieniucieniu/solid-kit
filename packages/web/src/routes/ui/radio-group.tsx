import { DocsPage } from "~/components/preview";
import { RadioGroupDemo } from "~/demos/ui/radio-group";
import source from "~/demos/ui/radio-group.tsx?raw";

const snippet = `import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemIndicator,
  RadioGroupItemInput,
  RadioGroupItemLabel,
  RadioGroupLabel,
} from "@solid-kit/ui";

<RadioGroup value={fruit()} onChange={setFruit}>
  <RadioGroupLabel>Fruit</RadioGroupLabel>
  <RadioGroupItem value="apple">
    <RadioGroupItemInput />
    <RadioGroupItemControl>
      <RadioGroupItemIndicator />
    </RadioGroupItemControl>
    <RadioGroupItemLabel>Apple</RadioGroupItemLabel>
  </RadioGroupItem>
</RadioGroup>`;

export default function RadioGroupPage() {
  return (
    <DocsPage
      title="Radio group"
      description="One choice from a list."
      snippet={snippet}
      source={source}
      sourceTitle="demos/ui/radio-group.tsx"
    >
      <RadioGroupDemo />
    </DocsPage>
  );
}
