import { DocsPage } from "~/components/preview";
import { ButtonGroupDemo } from "~/demos/ui/button-group";

const snippet = `import { Button, ButtonGroup } from "@solid-kit/ui";

<ButtonGroup>
  <Button>Cut</Button>
  <Button>Copy</Button>
  <Button>Paste</Button>
</ButtonGroup>`;

export default function ButtonGroupPage() {
  return (
    <DocsPage title="Button group" description="Buttons placed in a row." snippet={snippet}>
      <ButtonGroupDemo />
    </DocsPage>
  );
}
