import { DocsPage } from "~/components/preview";
import { TextareaDemo } from "~/demos/ui/textarea";

const snippet = `import { Textarea } from "@solid-kit/ui";

<Textarea value={value()} onChange={setValue}>
  <Textarea.Label>Bio</Textarea.Label>
  <Textarea.TextArea placeholder="A short note" />
  <Textarea.Description>Shown on your profile.</Textarea.Description>
</Textarea>`;

export default function TextareaPage() {
  return (
    <DocsPage title="Textarea" description="A labeled multiline field." snippet={snippet}>
      <TextareaDemo />
    </DocsPage>
  );
}
