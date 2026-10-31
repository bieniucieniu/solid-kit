import { clientOnly } from "@solidjs/start";
import { DocsPage } from "~/components/preview";

const MenusEditor = clientOnly(() => import("~/demos/tiptap/menus"));

const snippet = `import { BubbleMenu, FloatingMenu } from "@solid-kit/tiptap/menus";

<BubbleMenu editor={editor()}>B</BubbleMenu>
<FloatingMenu editor={editor()}>H1</FloatingMenu>`;

export default function MenusPage() {
  return (
    <DocsPage
      title="Menus"
      description="Bubble menu on selection and floating menu on an empty line."
      snippet={snippet}
    >
      <MenusEditor fallback={<div class="min-h-[300px]" />} />
    </DocsPage>
  );
}
