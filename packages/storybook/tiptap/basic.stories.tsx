import type { Meta, StoryObj } from "storybook-solidjs-vite";
import Placeholder from "@tiptap/extension-placeholder";
import StarterKit from "@tiptap/starter-kit";
import { Tiptap, TiptapContent, useEditor } from "../../tiptap/src";
import { MenuBar } from "./menu-bar";

const meta = {
  title: "Tiptap/Basic",
  component: Tiptap,
} as Meta<typeof Tiptap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <BasicEditor />,
};

function BasicEditor() {
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
        <TiptapContent class="min-h-[300px] max-w-none p-6 focus:outline-none" />
      </Tiptap>
    </div>
  );
}
