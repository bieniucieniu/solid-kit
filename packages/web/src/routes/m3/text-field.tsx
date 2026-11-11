import { DocsPage } from "~/components/preview";
import { TextFieldDemo } from "~/demos/m3/text-field";

const snippet = `import { TextField, TextFieldContainer, TextFieldDescription, TextFieldInput, TextFieldLabel } from "@solid-kit/m3";

// variant: "filled" | "outlined"
<TextField variant="outlined" value={name()} onChange={setName}>
  <TextFieldContainer>
    <TextFieldLabel>Name</TextFieldLabel>
    <TextFieldInput />
  </TextFieldContainer>
  <TextFieldDescription>As it appears on your ID</TextFieldDescription>
</TextField>`;

export default function TextFieldPage() {
  return (
    <DocsPage
      title="Text field"
      description="Filled and outlined text fields with a floating label."
      snippet={snippet}
      previewClass="bg-surface text-on-surface"
    >
      <TextFieldDemo />
    </DocsPage>
  );
}
