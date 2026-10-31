import { cleanup, render } from "@solidjs/testing-library";
import { afterEach, beforeEach, describe, expect, test } from "vite-plus/test";
import { page, userEvent, type Locator } from "vite-plus/test/browser";
import { Flow, Handle, Position, createFlow, type FlowNode, type FlowStore } from "./index";
import type { FlowOptions } from "./types";
import "./style.css";

type ElementAssertion = {
  toBeVisible: () => Promise<void>;
  toBeInTheDocument: () => Promise<void>;
};

function element(target: Locator | Element) {
  return (
    expect as unknown as {
      element: (target: Locator | Element) => ElementAssertion;
    }
  ).element(target);
}

function TextNode(props: { node: FlowNode }) {
  return (
    <>
      <Handle type="target" position={Position.Left} />
      <span>{typeof props.node.data.label === "string" ? props.node.data.label : ""}</span>
      <Handle type="source" position={Position.Right} />
    </>
  );
}

function mountFlow(options: FlowOptions) {
  let flow!: FlowStore;
  const screen = render(() => {
    flow = createFlow(() => options);
    return (
      <Flow flow={flow} style={{ width: "800px", height: "600px" }}>
        <Flow.Background />
        <Flow.Controls />
      </Flow>
    );
  });
  return { flow, view: page.elementLocator(screen.container) };
}

const nodes = [
  { id: "1", position: { x: 80, y: 80 }, data: { label: "1" } },
  { id: "2", position: { x: 80, y: 240 }, data: { label: "2" } },
];

describe("flow", () => {
  beforeEach(async () => {
    await page.viewport(1000, 800);
  });

  afterEach(() => {
    cleanup();
  });

  test("renders two nodes and one edge", async () => {
    const { view } = mountFlow({
      nodes,
      edges: [{ id: "e1-2", source: "1", target: "2" }],
    });

    await element(view.getByTestId("rf__node-1")).toBeVisible();
    await element(view.getByTestId("rf__node-2")).toBeVisible();
    await element(view.getByTestId("rf__edge-e1-2")).toBeInTheDocument();
  });

  test("dragging a node changes its transform", async () => {
    const { view } = mountFlow({ nodes, edges: [] });
    await element(view.getByTestId("rf__node-1")).toBeVisible();

    const node = view.getByTestId("rf__node-1");
    const before = (node.element() as HTMLElement).style.transform;
    await userEvent.dragAndDrop(node, view.getByTestId("rf__node-2"));

    await expect
      .poll(() => (view.getByTestId("rf__node-1").element() as HTMLElement).style.transform)
      .not.toBe(before);
  });

  test("dragging a handle onto another handle adds an edge", async () => {
    const { view } = mountFlow({ nodes, edges: [] });
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

    await element(view.getByTestId("rf__edge-xy-edge__1-2")).toBeInTheDocument();
  });

  test("controls zoom changes the viewport", async () => {
    const { view } = mountFlow({ nodes, edges: [] });
    await element(view.getByTestId("rf__node-1")).toBeVisible();

    const viewport = view.getByTestId("rf__viewport");
    const before = (viewport.element() as HTMLElement).style.transform;
    await userEvent.click(view.getByRole("button", { name: "zoom in" }));

    await expect
      .poll(() => (view.getByTestId("rf__viewport").element() as HTMLElement).style.transform)
      .not.toBe(before);
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
