import { DocsPage } from "~/components/preview";
import { CheckboxDemo } from "~/demos/m3/checkbox";

const snippet = `import { Checkbox, CheckboxControl, CheckboxIndicator, CheckboxInput, CheckboxLabel } from "@solid-kit/m3";

<Checkbox defaultChecked>
  <CheckboxInput />
  <CheckboxControl>
    <CheckboxIndicator />
  </CheckboxControl>
  <CheckboxLabel>Remember me</CheckboxLabel>
</Checkbox>`;

export default function CheckboxPage() {
  return (
    <DocsPage
      title="Checkbox"
      description="Select one or more items. Checked, indeterminate, error, and disabled states."
      snippet={snippet}
      previewClass="bg-surface text-on-surface"
    >
      <CheckboxDemo />
    </DocsPage>
  );
}
