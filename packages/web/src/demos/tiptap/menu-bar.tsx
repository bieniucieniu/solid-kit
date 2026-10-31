import type { JSX } from "solid-js";
import { useTiptap, useTiptapState } from "@solid-kit/tiptap";

export function MenuButton(props: {
  onClick: () => void;
  disabled?: boolean;
  isActive?: boolean;
  children: JSX.Element;
}) {
  return (
    <button
      type="button"
      onMouseDown={(event) => event.preventDefault()}
      onClick={() => props.onClick()}
      disabled={props.disabled}
      class={`rounded-lg border px-3 py-1 text-sm font-medium transition-colors ${
        props.isActive
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-foreground hover:bg-muted"
      } ${props.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
    >
      {props.children}
    </button>
  );
}

export function MenuBar() {
  const ctx = useTiptap();
  const states = useTiptapState({
    editor: () => ctx.editor,
    selector: (snapshot) => {
      const editor = snapshot.editor;
      if (!editor) {
        return {
          isBold: false,
          isItalic: false,
          isStrike: false,
          isCode: false,
          isHeading1: false,
          isHeading2: false,
          isBulletList: false,
          isOrderedList: false,
          isCodeBlock: false,
          isBlockquote: false,
          canUndo: false,
          canRedo: false,
        };
      }

      return {
        isBold: editor.isActive("bold"),
        isItalic: editor.isActive("italic"),
        isStrike: editor.isActive("strike"),
        isCode: editor.isActive("code"),
        isHeading1: editor.isActive("heading", { level: 1 }),
        isHeading2: editor.isActive("heading", { level: 2 }),
        isBulletList: editor.isActive("bulletList"),
        isOrderedList: editor.isActive("orderedList"),
        isCodeBlock: editor.isActive("codeBlock"),
        isBlockquote: editor.isActive("blockquote"),
        canUndo: editor.can().chain().focus().undo().run(),
        canRedo: editor.can().chain().focus().redo().run(),
      };
    },
  });

  return (
    <div class="flex flex-wrap gap-1 border-b border-border bg-muted p-2">
      <MenuButton
        onClick={() => ctx.editor.chain().focus().toggleBold().run()}
        isActive={states()?.isBold}
      >
        Bold
      </MenuButton>
      <MenuButton
        onClick={() => ctx.editor.chain().focus().toggleItalic().run()}
        isActive={states()?.isItalic}
      >
        Italic
      </MenuButton>
      <MenuButton
        onClick={() => ctx.editor.chain().focus().toggleStrike().run()}
        isActive={states()?.isStrike}
      >
        Strike
      </MenuButton>
      <MenuButton
        onClick={() => ctx.editor.chain().focus().toggleCode().run()}
        isActive={states()?.isCode}
      >
        Code
      </MenuButton>
      <div class="mx-1 h-6 w-px self-center bg-border" />
      <MenuButton
        onClick={() => ctx.editor.chain().focus().toggleHeading({ level: 1 }).run()}
        isActive={states()?.isHeading1}
      >
        H1
      </MenuButton>
      <MenuButton
        onClick={() => ctx.editor.chain().focus().toggleHeading({ level: 2 }).run()}
        isActive={states()?.isHeading2}
      >
        H2
      </MenuButton>
      <MenuButton
        onClick={() => ctx.editor.chain().focus().toggleBulletList().run()}
        isActive={states()?.isBulletList}
      >
        Bullet
      </MenuButton>
      <MenuButton
        onClick={() => ctx.editor.chain().focus().toggleOrderedList().run()}
        isActive={states()?.isOrderedList}
      >
        Ordered
      </MenuButton>
      <div class="mx-1 h-6 w-px self-center bg-border" />
      <MenuButton
        onClick={() => ctx.editor.chain().focus().undo().run()}
        disabled={!states()?.canUndo}
      >
        Undo
      </MenuButton>
      <MenuButton
        onClick={() => ctx.editor.chain().focus().redo().run()}
        disabled={!states()?.canRedo}
      >
        Redo
      </MenuButton>
    </div>
  );
}
