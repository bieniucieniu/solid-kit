import { render } from "@solidjs/testing-library";
import { describe, expect, test, vi } from "vite-plus/test";
import { MarkViewContent, SolidMarkViewContext } from "#kit/lib/tiptap/SolidMarkViewRenderer";
import { SolidNodeViewContext } from "#kit/lib/tiptap/useSolidNodeView";
import { NodeViewContent } from "./NodeViewContent";

// The content elements hand themselves to the renderer through a context ref. A ref from the
// caller must reach the same element too, not replace or be replaced by the renderer's.
describe("content refs", () => {
  test("NodeViewContent gives the element to the renderer and the caller", () => {
    const internal = vi.fn();
    const caller = vi.fn();
    const r = render(() => (
      <SolidNodeViewContext value={{ nodeViewContentRef: internal }}>
        <NodeViewContent as="p" ref={caller} data-testid="content" />
      </SolidNodeViewContext>
    ));
    const el = r.getByTestId("content");
    expect(el.tagName).toBe("P");
    expect(internal).toHaveBeenCalledTimes(1);
    expect(internal).toHaveBeenCalledWith(el);
    expect(caller).toHaveBeenCalledTimes(1);
    expect(caller).toHaveBeenCalledWith(el);
  });

  test("NodeViewContent without a caller ref", () => {
    const internal = vi.fn();
    const r = render(() => (
      <SolidNodeViewContext value={{ nodeViewContentRef: internal }}>
        <NodeViewContent data-testid="content" />
      </SolidNodeViewContext>
    ));
    expect(internal).toHaveBeenCalledWith(r.getByTestId("content"));
  });

  test("MarkViewContent gives the element to the renderer and the caller", () => {
    const internal = vi.fn();
    const caller = vi.fn();
    const r = render(() => (
      <SolidMarkViewContext value={{ markViewContentRef: internal }}>
        <MarkViewContent ref={caller} data-testid="mark" />
      </SolidMarkViewContext>
    ));
    const el = r.getByTestId("mark");
    expect(internal).toHaveBeenCalledTimes(1);
    expect(internal).toHaveBeenCalledWith(el);
    expect(caller).toHaveBeenCalledTimes(1);
    expect(caller).toHaveBeenCalledWith(el);
  });
});
