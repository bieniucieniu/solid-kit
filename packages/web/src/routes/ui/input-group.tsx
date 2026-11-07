import { DocsPage } from "~/components/preview";
import { InputGroupDemo } from "~/demos/ui/input-group";

const snippet = `import { InputGroup } from "@solid-kit/ui";

<InputGroup>
  <InputGroup.Addon>
    <InputGroup.Text>https://</InputGroup.Text>
  </InputGroup.Addon>
  <InputGroup.Input placeholder="example.com" />
  <InputGroup.Addon align="inline-end">
    <InputGroup.Button size="sm">Go</InputGroup.Button>
  </InputGroup.Addon>
</InputGroup>

<InputGroup>
  <InputGroup.Textarea placeholder="Message" />
  <InputGroup.Addon align="block-end">
    <InputGroup.Button variant="default">Send</InputGroup.Button>
  </InputGroup.Addon>
</InputGroup>`;

export default function InputGroupPage() {
  return (
    <DocsPage
      title="Input group"
      description="An input with extra content beside it."
      snippet={snippet}
    >
      <InputGroupDemo />
    </DocsPage>
  );
}
