import { DocsPage } from "~/components/preview";
import { ToggleGroupDemo } from "~/demos/ui/toggle-group";

const snippet = `import { ToggleGroup } from "@solid-kit/ui";

// variant: "default" | "outline"   size: "sm" | "default" | "lg"
// spacing: number (0 joins the items)   orientation: "horizontal" | "vertical"
<ToggleGroup variant="outline" spacing={0} value={value()} onChange={setValue}>
  <ToggleGroup.Item value="left">Left</ToggleGroup.Item>
  <ToggleGroup.Item value="center">Center</ToggleGroup.Item>
  <ToggleGroup.Item value="right">Right</ToggleGroup.Item>
</ToggleGroup>`;

export default function ToggleGroupPage() {
  return (
    <DocsPage title="Toggle group" description="A set of toggle buttons." snippet={snippet}>
      <ToggleGroupDemo />
    </DocsPage>
  );
}
