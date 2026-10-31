import { DocsPage } from "~/components/preview";
import { KbdDemo } from "~/demos/ui/kbd";

const snippet = `import { Kbd } from "@solid-kit/ui";

<p>
  Press <Kbd>⌘</Kbd> <Kbd>K</Kbd>
</p>`;

export default function KbdPage() {
  return (
    <DocsPage title="Kbd" description="A keyboard key." snippet={snippet}>
      <KbdDemo />
    </DocsPage>
  );
}
