import { DocsPage } from "~/components/preview";
import { CheckboxDemo } from "~/demos/ui/checkbox";

const snippet = `import { Checkbox } from "@solid-kit/ui";

<Checkbox>
  <Checkbox.Input />
  <Checkbox.Control>
    <Checkbox.Indicator />
  </Checkbox.Control>
  <Checkbox.Label>Accept terms</Checkbox.Label>
</Checkbox>`;

export default function CheckboxPage() {
  return (
    <DocsPage title="Checkbox" description="A labeled checkbox." snippet={snippet}>
      <CheckboxDemo />
    </DocsPage>
  );
}
