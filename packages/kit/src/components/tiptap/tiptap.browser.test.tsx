import { Node, mergeAttributes } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import { render } from "@solidjs/testing-library";
import { describe, expect, test } from "vite-plus/test";
import { page, userEvent } from "vite-plus/test/browser";
import { NodeViewWrapper, SolidNodeViewRenderer } from "./node-view";
import { Tiptap, TiptapContent, useEditor, useTiptapState } from "./index";

function WordCount() {
  const words = useTiptapState({
    selector: ({ editor }) => editor?.getText().split(/\s+/).filter(Boolean).length ?? 0,
  });
  return <output data-testid="words">{words()}</output>;
}

const Badge = Node.create({
  name: "badge",
  group: "inline",
  inline: true,
  atom: true,
  addAttributes: () => ({ label: { default: "new" } }),
  parseHTML: () => [{ tag: "span[data-badge]" }],
  renderHTML: ({ HTMLAttributes }) => [
    "span",
    mergeAttributes(HTMLAttributes, { "data-badge": "" }),
  ],
  addNodeView: () =>
    SolidNodeViewRenderer((props) => (
      <NodeViewWrapper as="span" data-testid="badge-view">
        {String(props.node.attrs.label)}
      </NodeViewWrapper>
    )),
});

describe("tiptap", () => {
  test("renders content, follows typing, and updates editor state", async () => {
    render(() => {
      const editor = useEditor(() => ({
        extensions: [StarterKit],
        content: "<p>Hello world</p>",
      }));
      return (
        <Tiptap editor={editor}>
          <TiptapContent />
          <WordCount />
        </Tiptap>
      );
    });
    const area = page.getByRole("textbox");
    await expect.element(area).toHaveTextContent("Hello world");
    await expect.element(page.getByTestId("words")).toHaveTextContent("2");
    await area.click();
    await userEvent.keyboard("{End} again");
    await expect.element(area).toHaveTextContent("Hello world again");
    await expect.element(page.getByTestId("words")).toHaveTextContent("3");
  });

  test("renders a Solid node view inside the document", async () => {
    render(() => {
      const editor = useEditor(() => ({
        extensions: [StarterKit, Badge],
        content: '<p>Status <span data-badge label="beta"></span></p>',
      }));
      return (
        <Tiptap editor={editor}>
          <TiptapContent />
        </Tiptap>
      );
    });
    await expect.element(page.getByTestId("badge-view")).toHaveTextContent("beta");
  });
});
