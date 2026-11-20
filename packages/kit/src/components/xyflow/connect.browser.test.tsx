import { describe, expect, test } from "vite-plus/test";
import { page, userEvent, type Locator } from "vite-plus/test/browser";
import { element, installFlowBrowser, mountFlow, nodes } from "#kit/testing/xyflow/mount";

function handle(view: Locator, id: string, kind: "source" | "target") {
  const found = view
    .getByTestId(`rf__node-${id}`)
    .element()
    .querySelector(`.xy-flow__handle.${kind}`);
  if (!found) throw new Error(`${kind} handle on node ${id} was not measured`);
  return found;
}

function pane(view: Locator) {
  const found = view.element().querySelector(".xy-flow__pane");
  if (!found) throw new Error("pane was not rendered");
  return found;
}

function dispatchMouse(
  target: Element,
  type: "mousedown" | "mousemove" | "mouseup",
  x: number,
  y: number,
) {
  target.dispatchEvent(
    new MouseEvent(type, {
      bubbles: true,
      cancelable: true,
      clientX: x,
      clientY: y,
      button: 0,
      buttons: type === "mouseup" ? 0 : 1,
      view: window,
    }),
  );
}

describe("connect", () => {
  installFlowBrowser();

  test("dragging a source handle onto a target handle adds xy-edge__1-2", async () => {
    const { view } = mountFlow({ nodes, edges: [] });
    await element(view.getByTestId("rf__node-1")).toBeVisible();
    await element(view.getByTestId("rf__node-2")).toBeVisible();

    await userEvent.dragAndDrop(
      page.elementLocator(handle(view, "1", "source")),
      page.elementLocator(handle(view, "2", "target")),
    );

    await element(view.getByTestId("rf__edge-xy-edge__1-2")).toBeInTheDocument();
  });

  test("connection line exists during the drag", async () => {
    const { view } = mountFlow({ nodes, edges: [] });
    await element(view.getByTestId("rf__node-1")).toBeVisible();
    await element(view.getByTestId("rf__node-2")).toBeVisible();

    const source = handle(view, "1", "source");
    const box = source.getBoundingClientRect();
    const x = box.left + box.width / 2;
    const y = box.top + box.height / 2;

    dispatchMouse(source, "mousedown", x, y);
    try {
      dispatchMouse(document.documentElement, "mousemove", x, y + 40);
      await expect
        .poll(() => view.element().querySelector(".xy-flow__connectionline"))
        .toBeTruthy();
    } finally {
      dispatchMouse(document.documentElement, "mouseup", x, y + 40);
    }
  });

  test("clicking a source handle then a target handle adds an edge", async () => {
    const { view } = mountFlow({ nodes, edges: [] });
    await element(view.getByTestId("rf__node-1")).toBeVisible();
    await element(view.getByTestId("rf__node-2")).toBeVisible();

    await userEvent.click(page.elementLocator(handle(view, "1", "source")));
    await userEvent.click(page.elementLocator(handle(view, "2", "target")));

    await element(view.getByTestId("rf__edge-xy-edge__1-2")).toBeInTheDocument();
  });

  test("pane click cancels click-connect", async () => {
    const { flow, view } = mountFlow({ nodes, edges: [] });
    await element(view.getByTestId("rf__node-1")).toBeVisible();
    await element(view.getByTestId("rf__node-2")).toBeVisible();

    await userEvent.click(page.elementLocator(handle(view, "1", "source")));
    await expect.poll(() => flow.connectionClickStartHandle?.nodeId).toBe("1");

    await userEvent.click(page.elementLocator(pane(view)));
    await expect.poll(() => flow.connectionClickStartHandle).toBe(null);

    await userEvent.click(page.elementLocator(handle(view, "2", "target")));
    expect(view.getByTestId("rf__edge-xy-edge__1-2").query()).toBe(null);
  });

  test("source to source adds no edge", async () => {
    const { flow, view } = mountFlow({ nodes, edges: [] });
    await element(view.getByTestId("rf__node-1")).toBeVisible();
    await element(view.getByTestId("rf__node-2")).toBeVisible();

    await userEvent.dragAndDrop(
      page.elementLocator(handle(view, "1", "source")),
      page.elementLocator(handle(view, "2", "source")),
    );

    expect(flow.edges.length).toBe(0);
    expect(view.getByTestId("rf__edge-xy-edge__1-2").query()).toBe(null);
  });
});
