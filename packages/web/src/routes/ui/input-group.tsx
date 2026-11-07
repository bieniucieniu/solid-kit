import { DocsPage } from "~/components/preview";
import { InputGroupDemo } from "~/demos/ui/input-group";

const snippet = `import { InputGroup } from "@solid-kit/ui";

<InputGroup>
  <span>https://</span>
  <input placeholder="example.com" />
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
