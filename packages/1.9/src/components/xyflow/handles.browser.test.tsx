import { describe, expect, test } from "vite-plus/test";
import type { Locator } from "vite-plus/test/browser";
import { Position } from "./index";
import { TextNode, element, installFlowBrowser, mountFlow } from "#/testing/xyflow/mount";

const tolerance = 2;

function center(node: Element) {
  const box = node.getBoundingClientRect();
  return { x: box.left + box.width / 2, y: box.top + box.height / 2 };
}

function edgePoint(node: HTMLElement, side: "top" | "right" | "bottom" | "left") {
  const box = node.getBoundingClientRect();
  if (side === "top") return { x: box.left + box.width / 2, y: box.top };
  if (side === "bottom") return { x: box.left + box.width / 2, y: box.bottom };
  if (side === "left") return { x: box.left, y: box.top + box.height / 2 };
  return { x: box.right, y: box.top + box.height / 2 };
}

function distance(a: { x: number; y: number }, b: { x: number; y: number }) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function handleCenter(node: HTMLElement, kind: "source" | "target") {
  const handle = node.querySelector(`.xy-flow__handle.${kind}`);
  if (!handle) return null;
  return center(handle);
}

function pathEnds(edge: Element) {
  const path = edge.querySelector(".xy-flow__edge-path");
  if (!(path instanceof SVGPathElement)) return null;
  const ctm = path.getScreenCTM();
  if (!ctm) return null;
  const map = (length: number) => {
    const point = path.getPointAtLength(length);
    const screen = new DOMPoint(point.x, point.y).matrixTransform(ctm);
    return { x: screen.x, y: screen.y };
  };
  return { start: map(0), end: map(path.getTotalLength()) };
}

function flowNode(view: Locator, id: string) {
  const node = view.getByTestId(`rf__node-${id}`).element();
  if (!(node instanceof HTMLElement)) throw new Error(`node ${id} is missing`);
  return node;
}

describe("handles", () => {
  installFlowBrowser();

  test("default node dots sit on the top and bottom edge centers", async () => {
    const { view } = mountFlow({
      nodes: [
        { id: "1", position: { x: 80, y: 80 }, data: { label: "1" } },
        { id: "2", position: { x: 80, y: 280 }, data: { label: "2" } },
      ],
      edges: [{ id: "e1-2", source: "1", target: "2" }],
    });
    await element(view.getByTestId("rf__node-1")).toBeVisible();
    await element(view.getByTestId("rf__node-2")).toBeVisible();

    await expect
      .poll(() => {
        const node = flowNode(view, "1");
        const target = handleCenter(node, "target");
        const source = handleCenter(node, "source");
        if (!target || !source) return 999;
        return Math.max(
          distance(target, edgePoint(node, "top")),
          distance(source, edgePoint(node, "bottom")),
        );
      })
      .toBeLessThanOrEqual(tolerance);

    await expect
      .poll(() => {
        const edge = view.getByTestId("rf__edge-e1-2").query();
        if (!edge) return 999;
        const ends = pathEnds(edge);
        const source = handleCenter(flowNode(view, "1"), "source");
        const target = handleCenter(flowNode(view, "2"), "target");
        if (!ends || !source || !target) return 999;
        return Math.max(distance(ends.start, source), distance(ends.end, target));
      })
      .toBeLessThanOrEqual(tolerance);
  });

  test("custom node dots sit on the left and right edge centers", async () => {
    const { view } = mountFlow({
      nodeTypes: { text: TextNode },
      nodes: [
        {
          id: "1",
          type: "text",
          position: { x: 40, y: 80 },
          data: { label: "a" },
          style: { width: "140px" },
        },
        {
          id: "2",
          type: "text",
          position: { x: 360, y: 80 },
          data: { label: "b" },
          style: { width: "140px" },
        },
      ],
      edges: [{ id: "e1-2", source: "1", target: "2" }],
    });
    await element(view.getByTestId("rf__node-1")).toBeVisible();
    await element(view.getByTestId("rf__node-2")).toBeVisible();

    await expect
      .poll(() => {
        const node = flowNode(view, "1");
        const target = handleCenter(node, "target");
        const source = handleCenter(node, "source");
        if (!target || !source) return 999;
        return Math.max(
          distance(target, edgePoint(node, "left")),
          distance(source, edgePoint(node, "right")),
        );
      })
      .toBeLessThanOrEqual(tolerance);

    await expect
      .poll(() => {
        const edge = view.getByTestId("rf__edge-e1-2").query();
        if (!edge) return 999;
        const ends = pathEnds(edge);
        const source = handleCenter(flowNode(view, "1"), "source");
        const target = handleCenter(flowNode(view, "2"), "target");
        if (!ends || !source || !target) return 999;
        return Math.max(distance(ends.start, source), distance(ends.end, target));
      })
      .toBeLessThanOrEqual(tolerance);
  });

  test("size-stable position change moves the edge path with the dots", async () => {
    const { flow, view } = mountFlow({
      nodes: [
        { id: "1", position: { x: 80, y: 80 }, data: { label: "1" } },
        { id: "2", position: { x: 320, y: 80 }, data: { label: "2" } },
      ],
      edges: [{ id: "e1-2", source: "1", target: "2" }],
    });
    await element(view.getByTestId("rf__node-1")).toBeVisible();
    await element(view.getByTestId("rf__node-2")).toBeVisible();
    await element(view.getByTestId("rf__edge-e1-2")).toBeInTheDocument();

    const widthBefore = flowNode(view, "1").getBoundingClientRect().width;
    const heightBefore = flowNode(view, "1").getBoundingClientRect().height;

    flow.updateNode("1", { sourcePosition: Position.Right });
    flow.updateNode("2", { targetPosition: Position.Left });

    await expect
      .poll(() => {
        const node = flowNode(view, "1");
        const source = handleCenter(node, "source");
        if (!source) return 999;
        return distance(source, edgePoint(node, "right"));
      })
      .toBeLessThanOrEqual(tolerance);

    await expect
      .poll(() => {
        const node = flowNode(view, "2");
        const target = handleCenter(node, "target");
        if (!target) return 999;
        return distance(target, edgePoint(node, "left"));
      })
      .toBeLessThanOrEqual(tolerance);

    await expect
      .poll(() => {
        const edge = view.getByTestId("rf__edge-e1-2").query();
        if (!edge) return 999;
        const ends = pathEnds(edge);
        const source = handleCenter(flowNode(view, "1"), "source");
        const target = handleCenter(flowNode(view, "2"), "target");
        if (!ends || !source || !target) return 999;
        return Math.max(distance(ends.start, source), distance(ends.end, target));
      })
      .toBeLessThanOrEqual(tolerance);

    const box = flowNode(view, "1").getBoundingClientRect();
    expect(box.width).toBe(widthBefore);
    expect(box.height).toBe(heightBefore);
  });
});
