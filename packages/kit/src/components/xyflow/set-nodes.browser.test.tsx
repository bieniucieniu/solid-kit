import { describe, expect, test } from "vite-plus/test";
import { element, installFlowBrowser, mountFlow, nodes } from "#kit/testing/xyflow/mount";

// The node `ResizeObserver` reports its first size a frame after mount.
// Wait it out so a later re-measure can only come from the fix.
function nextFrames(count: number) {
  return new Promise<void>((resolve) => {
    const step = (left: number) => (left ? requestAnimationFrame(() => step(left - 1)) : resolve());
    step(count);
  });
}

describe("setNodes", () => {
  installFlowBrowser();

  test("fresh objects for nodes on screen are measured again", async () => {
    const { flow, view } = mountFlow({
      nodes,
      edges: [{ id: "e1-2", source: "1", target: "2" }],
    });
    await element(view.getByTestId("rf__node-1")).toBeVisible();
    await element(view.getByTestId("rf__node-2")).toBeVisible();
    await nextFrames(3);

    // Same ids, new objects, no `measured`.
    flow.setNodes(nodes.map((node) => ({ ...node, position: { ...node.position } })));

    expect(flow.nodes.length).toBe(2);
    for (const id of ["1", "2"]) {
      await expect
        .poll(() => view.getByTestId(`rf__node-${id}`).element().style.visibility)
        .toBe("visible");
      await expect.poll(() => flow.nodeLookup.get(id)?.measured.width).toBeGreaterThan(0);
      await expect
        .poll(() => flow.nodeLookup.get(id)?.internals.handleBounds?.source?.length)
        .toBeGreaterThan(0);
    }
    await expect
      .poll(
        () =>
          view
            .getByTestId("rf__edge-e1-2")
            .element()
            .querySelector(".xy-flow__edge-path")
            ?.getAttribute("d") ?? "",
      )
      .not.toBe("");
  });
});
