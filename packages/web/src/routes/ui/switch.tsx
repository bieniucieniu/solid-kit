import { DocsPage } from "~/components/preview";
import { SwitchDemo } from "~/demos/ui/switch";

const snippet = `import { Switch, SwitchControl, SwitchInput, SwitchLabel, SwitchThumb } from "@solid-kit/ui";

// size: "sm" | "default"
<Switch size="sm" checked={checked()} onChange={setChecked}>
  <SwitchInput />
  <SwitchControl>
    <SwitchThumb />
  </SwitchControl>
  <SwitchLabel>Airplane mode</SwitchLabel>
</Switch>`;

export default function SwitchPage() {
  return (
    <DocsPage title="Switch" description="A toggle between on and off." snippet={snippet}>
      <SwitchDemo />
    </DocsPage>
  );
}
