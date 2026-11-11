import { DocsPage } from "~/components/preview";
import { SwitchDemo } from "~/demos/m3/switch";

const snippet = `import { Switch, SwitchControl, SwitchInput, SwitchLabel, SwitchThumb } from "@solid-kit/m3";

<Switch defaultChecked>
  <SwitchInput />
  <SwitchControl>
    <SwitchThumb icons />
  </SwitchControl>
  <SwitchLabel>Wi-Fi</SwitchLabel>
</Switch>`;

export default function SwitchPage() {
  return (
    <DocsPage
      title="Switch"
      description="Turn a single setting on or off. The handle grows when on and when pressed."
      snippet={snippet}
      previewClass="bg-surface text-on-surface"
    >
      <SwitchDemo />
    </DocsPage>
  );
}
