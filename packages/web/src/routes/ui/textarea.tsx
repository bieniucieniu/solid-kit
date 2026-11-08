import { DocsPage } from "~/components/preview";
import { TextareaDemo } from "~/demos/ui/textarea";

const snippet = `import { Textarea, TextareaControl, TextareaDescription, TextareaLabel } from "@solid-kit/ui";

<Textarea value={value()} onChange={setValue}>
  <TextareaLabel>Bio</TextareaLabel>
  <TextareaControl placeholder="A short note" />
  <TextareaDescription>Shown on your profile.</TextareaDescription>
</Textarea>`;

export default function TextareaPage() {
  return (
    <DocsPage title="Textarea" description="A labeled multiline field." snippet={snippet}>
      <TextareaDemo />
    </DocsPage>
  );
}
