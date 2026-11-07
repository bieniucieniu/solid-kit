import { DocsPage } from "~/components/preview";
import { SwitchDemo } from "~/demos/ui/switch";

const snippet = `import { Switch } from "@solid-kit/ui";

// size: "sm" | "default"
<Switch size="sm" checked={checked()} onChange={setChecked}>
  <Switch.Input />
  <Switch.Control>
    <Switch.Thumb />
  </Switch.Control>
  <Switch.Label>Airplane mode</Switch.Label>
</Switch>`;

export default function SwitchPage() {
  return (
    <DocsPage title="Switch" description="A toggle between on and off." snippet={snippet}>
      <SwitchDemo />
    </DocsPage>
  );
}
