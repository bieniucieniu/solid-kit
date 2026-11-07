import { DocsPage } from "~/components/preview";
import { FieldDemo } from "~/demos/ui/field";

const snippet = `import { Field } from "@solid-kit/ui";

// orientation: "vertical" | "horizontal" | "responsive"
<Field.Set>
  <Field.Legend>Profile</Field.Legend>
  <Field.Group>
    <Field>
      <Field.Label for="city">City</Field.Label>
      <input id="city" placeholder="Paris" />
      <Field.Description>Where you work.</Field.Description>
    </Field>
    <Field orientation="horizontal">
      <Field.Content>
        <Field.Label for="public">Public profile</Field.Label>
        <Field.Description>Anyone can see your name.</Field.Description>
      </Field.Content>
      <Switch id="public">...</Switch>
    </Field>
  </Field.Group>
</Field.Set>`;

export default function FieldPage() {
  return (
    <DocsPage
      title="Field"
      description="A label and description around a control."
      snippet={snippet}
    >
      <FieldDemo />
    </DocsPage>
  );
}
