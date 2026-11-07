import { DocsPage } from "~/components/preview";
import { NativeSelectDemo } from "~/demos/ui/native-select";

const snippet = `import { NativeSelect } from "@solid-kit/ui";

// size: "sm" | "default"
<NativeSelect size="sm" value={fruit()} onInput={(event) => setFruit(event.currentTarget.value)}>
  <option value="apple">Apple</option>
  <option value="pear">Pear</option>
</NativeSelect>`;

export default function NativeSelectPage() {
  return (
    <DocsPage title="Native select" description="A styled native select." snippet={snippet}>
      <NativeSelectDemo />
    </DocsPage>
  );
}
