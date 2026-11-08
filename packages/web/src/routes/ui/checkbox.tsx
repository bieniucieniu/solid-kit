import { DocsPage } from "~/components/preview";
import { CheckboxDemo } from "~/demos/ui/checkbox";

const snippet = `import {
  Checkbox,
  CheckboxControl,
  CheckboxIndicator,
  CheckboxInput,
  CheckboxLabel,
} from "@solid-kit/ui";

<Checkbox>
  <CheckboxInput />
  <CheckboxControl>
    <CheckboxIndicator />
  </CheckboxControl>
  <CheckboxLabel>Accept terms</CheckboxLabel>
</Checkbox>`;

export default function CheckboxPage() {
  return (
    <DocsPage title="Checkbox" description="A labeled checkbox." snippet={snippet}>
      <CheckboxDemo />
    </DocsPage>
  );
}
