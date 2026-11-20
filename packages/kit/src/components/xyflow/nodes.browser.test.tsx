import { describe, expect, test } from "vite-plus/test";
import { page, userEvent } from "vite-plus/test/browser";
import {
  TextNode,
  element,
  installFlowBrowser,
  mountFlow,
  nodeTransform,
  nodes,
} from "#kit/testing/xyflow/mount";

describe("nodes", () => {
  installFlowBrowser();

  test("nodes are visible after they are measured", async () => {
    const { view } = mountFlow({
      nodes,
      edges: [{ id: "e1-2", source: "1", target: "2" }],
    });

    await element(view.getByTestId("rf__node-1")).toBeVisible();
    await element(view.getByTestId("rf__node-2")).toBeVisible();
  });

  test("clicking a node adds selected", async () => {
    const { view } = mountFlow({ nodes, edges: [] });
    await element(view.getByTestId("rf__node-1")).toBeVisible();

    await userEvent.click(view.getByTestId("rf__node-1"));

    await expect
      .poll(() => view.getByTestId("rf__node-1").element().classList.contains("selected"))
      .toBe(true);
  });

  test("draggable false keeps the node transform", async () => {
    const { view } = mountFlow({
      nodes: [
        { id: "1", position: { x: 80, y: 80 }, data: { label: "1" }, draggable: false },
        nodes[1],
      ],
      edges: [],
    });
    await element(view.getByTestId("rf__node-1")).toBeVisible();
    const before = nodeTransform(view, "1").raw;

    await userEvent.dragAndDrop(view.getByTestId("rf__node-1"), view.getByTestId("rf__node-2"));

    await expect.poll(() => nodeTransform(view, "1").raw).toBe(before);
  });

  test("dragging a node changes its transform", async () => {
    const { view } = mountFlow({ nodes, edges: [] });
    await element(view.getByTestId("rf__node-1")).toBeVisible();
    const before = nodeTransform(view, "1").raw;

    await userEvent.dragAndDrop(view.getByTestId("rf__node-1"), view.getByTestId("rf__node-2"));

    await expect.poll(() => nodeTransform(view, "1").raw).not.toBe(before);
  });

  test("hidden removes the node", async () => {
    const { flow, view } = mountFlow({ nodes, edges: [] });
    await element(view.getByTestId("rf__node-1")).toBeVisible();

    flow.updateNode("1", { hidden: true });

    await expect.poll(() => view.getByTestId("rf__node-1").query()).toBe(null);
  });

  test("hidden then shown node is measured and can be dragged", async () => {
    const { flow, view } = mountFlow({ nodes, edges: [] });
    await element(view.getByTestId("rf__node-1")).toBeVisible();

    flow.updateNode("1", { hidden: true });
    await expect.poll(() => view.getByTestId("rf__node-1").query()).toBe(null);

    flow.updateNode("1", { hidden: false });
    await element(view.getByTestId("rf__node-1")).toBeVisible();
    const before = nodeTransform(view, "1").raw;

    await userEvent.dragAndDrop(view.getByTestId("rf__node-1"), view.getByTestId("rf__node-2"));

    await expect.poll(() => nodeTransform(view, "1").raw).not.toBe(before);
  });

  test("Delete removes a selected node and its edges", async () => {
    const { view } = mountFlow({
      nodes,
      edges: [{ id: "e1-2", source: "1", target: "2" }],
    });
    await element(view.getByTestId("rf__node-1")).toBeVisible();
    await element(view.getByTestId("rf__edge-e1-2")).toBeInTheDocument();

    await userEvent.click(view.getByTestId("rf__node-1"));
    await expect
      .poll(() => view.getByTestId("rf__node-1").element().classList.contains("selected"))
      .toBe(true);
    await userEvent.keyboard("{Delete}");

    await expect.poll(() => view.getByTestId("rf__node-1").query()).toBe(null);
    await expect.poll(() => view.getByTestId("rf__edge-e1-2").query()).toBe(null);
    await element(view.getByTestId("rf__node-2")).toBeVisible();
  });

  test("Backspace removes a selected node and its edges", async () => {
    const { view } = mountFlow({
      nodes,
      edges: [{ id: "e1-2", source: "1", target: "2" }],
    });
    await element(view.getByTestId("rf__node-1")).toBeVisible();
    await element(view.getByTestId("rf__edge-e1-2")).toBeInTheDocument();

    await userEvent.click(view.getByTestId("rf__node-1"));
    await userEvent.keyboard("{Backspace}");

    await expect.poll(() => view.getByTestId("rf__node-1").query()).toBe(null);
    await expect.poll(() => view.getByTestId("rf__edge-e1-2").query()).toBe(null);
  });

  test("connectable false adds no edge", async () => {
    const { flow, view } = mountFlow({
      nodes: [
        { id: "1", position: { x: 80, y: 80 }, data: { label: "1" }, connectable: false },
        nodes[1],
      ],
      edges: [],
    });
    await element(view.getByTestId("rf__node-1")).toBeVisible();
    await element(view.getByTestId("rf__node-2")).toBeVisible();

    const source = view
      .getByTestId("rf__node-1")
      .element()
      .querySelector(".xy-flow__handle.source");
    const target = view
      .getByTestId("rf__node-2")
      .element()
      .querySelector(".xy-flow__handle.target");
    if (!source || !target) throw new Error("handles were not measured");
    await userEvent.dragAndDrop(page.elementLocator(source), page.elementLocator(target));

    expect(flow.edges.length).toBe(0);
  });

  test("custom node shows node data and updateNode changes it", async () => {
    const { flow, view } = mountFlow({
      nodeTypes: { text: TextNode },
      nodes: [
        {
          id: "1",
          type: "text",
          position: { x: 80, y: 80 },
          data: { label: "alpha" },
          style: { width: "140px" },
        },
      ],
      edges: [],
    });

    await element(view.getByText("alpha")).toBeVisible();
    flow.updateNode("1", { data: { label: "beta" } });
    await element(view.getByText("beta")).toBeVisible();
  });
});
