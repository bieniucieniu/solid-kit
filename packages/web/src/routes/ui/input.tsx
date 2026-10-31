import { DocsPage } from "~/components/preview";
import { InputDemo } from "~/demos/ui/input";

const snippet = `import { Input } from "@solid-kit/ui";

<Input value={value()} onChange={setValue}>
  <Input.Label>Email</Input.Label>
  <Input.Input type="email" placeholder="ada@example.com" />
  <Input.Description>Used to sign in.</Input.Description>
</Input>`;

export default function InputPage() {
  return (
    <DocsPage title="Input" description="A labeled text field." snippet={snippet}>
      <InputDemo />
    </DocsPage>
  );
}
