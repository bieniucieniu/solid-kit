import { DocsPage } from "~/components/preview";
import { ButtonGroupDemo } from "~/demos/ui/button-group";

const snippet = `import { Button, ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@solid-kit/ui";

// orientation: "horizontal" | "vertical"
<ButtonGroup orientation="vertical">
  <Button variant="outline">Top</Button>
  <Button variant="outline">Bottom</Button>
</ButtonGroup>

<ButtonGroup>
  <ButtonGroupText>Zoom</ButtonGroupText>
  <Button variant="secondary">-</Button>
  <ButtonGroupSeparator />
  <Button variant="secondary">+</Button>
</ButtonGroup>`;

export default function ButtonGroupPage() {
  return (
    <DocsPage title="Button group" description="Buttons placed in a row." snippet={snippet}>
      <ButtonGroupDemo />
    </DocsPage>
  );
}
