import Placeholder from "@tiptap/extension-placeholder";
import StarterKit from "@tiptap/starter-kit";
import { Tiptap, useEditor } from "@solid-kit/tiptap";
import { MenuBar } from "./menu-bar";

export default function BasicEditor() {
  const editor = useEditor(() => ({
    extensions: [StarterKit, Placeholder.configure({ placeholder: "Write something..." })],
    content: `
      <h2>Basic Setup</h2>
      <p>This is a minimal Tiptap SolidJS integration.</p>
    `,
  }));

  return (
    <div class="tiptap-editor">
      <Tiptap editor={editor}>
        <MenuBar />
        <Tiptap.Content class="min-h-[300px] max-w-none p-6 focus:outline-none" />
      </Tiptap>
    </div>
  );
}
