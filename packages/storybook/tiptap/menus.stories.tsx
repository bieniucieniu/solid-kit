import type { Meta, StoryObj } from "storybook-solidjs-vite";
import Placeholder from "@tiptap/extension-placeholder";
import StarterKit from "@tiptap/starter-kit";
import { Show } from "solid-js";
import { Tiptap, TiptapContent, useEditor } from "../../tiptap/src";
import { BubbleMenu, FloatingMenu } from "../../tiptap/src/menus";
import { MenuButton } from "./menu-bar";

const meta = {
  title: "Tiptap/Menus",
  component: Tiptap,
} as Meta<typeof Tiptap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <MenusEditor />,
};

function MenusEditor() {
  const editor = useEditor(() => ({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Select text or start a new line...",
      }),
    ],
    content: `
      <p>Try selecting some text to see the <strong>Bubble Menu</strong>.</p>
      <p>Or start a new empty line to see the <strong>Floating Menu</strong>.</p>
      <p></p>
    `,
  }));

  return (
    <div class="tiptap-editor relative">
      <Tiptap editor={editor}>
        <Show when={editor()}>
          {(current) => (
            <>
              <BubbleMenu
                editor={current()}
                class="flex gap-1 rounded-lg border border-border bg-background p-1.5 shadow-lg"
              >
                <MenuButton onClick={() => current().chain().focus().toggleBold().run()}>
                  B
                </MenuButton>
                <MenuButton onClick={() => current().chain().focus().toggleItalic().run()}>
                  I
                </MenuButton>
                <MenuButton onClick={() => current().chain().focus().toggleStrike().run()}>
                  S
                </MenuButton>
              </BubbleMenu>
              <FloatingMenu
                editor={current()}
                class="flex gap-1 rounded-lg border border-border bg-background p-1.5 shadow-lg"
              >
                <MenuButton
                  onClick={() => current().chain().focus().toggleHeading({ level: 1 }).run()}
                >
                  H1
                </MenuButton>
                <MenuButton
                  onClick={() => current().chain().focus().toggleHeading({ level: 2 }).run()}
                >
                  H2
                </MenuButton>
                <MenuButton onClick={() => current().chain().focus().toggleBulletList().run()}>
                  UL
                </MenuButton>
              </FloatingMenu>
            </>
          )}
        </Show>
        <TiptapContent class="min-h-[300px] max-w-none p-6 focus:outline-none" />
      </Tiptap>
    </div>
  );
}
