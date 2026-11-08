import { DocsPage } from "~/components/preview";
import { InputDemo } from "~/demos/ui/input";

const snippet = `import { Input, InputControl, InputDescription, InputLabel } from "@solid-kit/ui";

<Input value={value()} onChange={setValue}>
  <InputLabel>Email</InputLabel>
  <InputControl type="email" placeholder="ada@example.com" />
  <InputDescription>Used to sign in.</InputDescription>
</Input>`;

export default function InputPage() {
  return (
    <DocsPage title="Input" description="A labeled text field." snippet={snippet}>
      <InputDemo />
    </DocsPage>
  );
}
