import { clientOnly } from "@solidjs/start";
import { DocsPage } from "~/components/preview";

const MarkdownEditor = clientOnly(() => import("~/demos/tiptap/markdown"));

const snippet = `import StarterKit from "@tiptap/starter-kit";
import { Markdown } from "tiptap-markdown";
import { Tiptap, useEditor } from "@solid-kit/tiptap";

const editor = useEditor(() => ({
  extensions: [StarterKit, Markdown],
  content: "# Markdown",
}));`;

export default function MarkdownPage() {
  return (
    <DocsPage
      title="Markdown"
      description="Edit rich text and read markdown output."
      snippet={snippet}
    >
      <MarkdownEditor fallback={<div class="min-h-[300px]" />} />
    </DocsPage>
  );
}
