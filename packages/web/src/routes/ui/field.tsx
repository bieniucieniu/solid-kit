import { DocsPage } from "~/components/preview";
import { FieldDemo } from "~/demos/ui/field";

const snippet = `import { Field } from "@solid-kit/ui";

<Field>
  <Field.Label for="city">City</Field.Label>
  <input id="city" placeholder="Paris" />
  <Field.Description>Where you work.</Field.Description>
</Field>`;

export default function FieldPage() {
  return (
    <DocsPage title="Field" description="A label and description around a control." snippet={snippet}>
      <FieldDemo />
    </DocsPage>
  );
}
