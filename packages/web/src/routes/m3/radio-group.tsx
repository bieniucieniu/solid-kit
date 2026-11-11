import { DocsPage } from "~/components/preview";
import { RadioGroupDemo } from "~/demos/m3/radio-group";

const snippet = `import { RadioGroup, RadioGroupItem, RadioGroupItemControl, RadioGroupItemIndicator, RadioGroupItemInput, RadioGroupItemLabel, RadioGroupLabel } from "@solid-kit/m3";

<RadioGroup defaultValue="vibrate">
  <RadioGroupLabel>Sound</RadioGroupLabel>
  <RadioGroupItem value="vibrate">
    <RadioGroupItemInput />
    <RadioGroupItemControl><RadioGroupItemIndicator /></RadioGroupItemControl>
    <RadioGroupItemLabel>Vibrate</RadioGroupItemLabel>
  </RadioGroupItem>
</RadioGroup>`;

export default function RadioGroupPage() {
  return (
    <DocsPage
      title="Radio group"
      description="Select one option from a set."
      snippet={snippet}
      previewClass="bg-surface text-on-surface"
    >
      <RadioGroupDemo />
    </DocsPage>
  );
}
