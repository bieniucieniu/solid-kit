import { describe, expect, test } from "vite-plus/test";
import { page, userEvent } from "vite-plus/test/browser";
import type { Locator } from "vite-plus/test/browser";
import {
  element,
  installFlowBrowser,
  mountFlow,
  nodes,
  viewportTransform,
} from "#/testing/xyflow/mount";

function pane(view: Locator) {
  const found = view.element().querySelector(".xy-flow__pane");
  if (!found) throw new Error("pane was not rendered");
  return found;
}

describe("pane", () => {
  installFlowBrowser();

  test("dragging the pane changes the viewport transform", async () => {
    const { view } = mountFlow({ nodes, edges: [] });
    await element(view.getByTestId("rf__node-1")).toBeVisible();
    const before = viewportTransform(view).raw;

    await userEvent.dragAndDrop(page.elementLocator(pane(view)), view.getByTestId("rf__node-2"));

    await expect.poll(() => viewportTransform(view).raw).not.toBe(before);
  });

  test("wheel zoom changes the viewport scale", async () => {
    const { view } = mountFlow({ nodes, edges: [] });
    await element(view.getByTestId("rf__node-1")).toBeVisible();
    const before = viewportTransform(view).scale;

    await userEvent.wheel(page.elementLocator(pane(view)), { delta: { y: -120 } });

    await expect.poll(() => viewportTransform(view).scale).not.toBe(before);
  });

  test("controls zoom in, zoom out, and fit view", async () => {
    const { view } = mountFlow({ nodes, edges: [] });
    await element(view.getByTestId("rf__node-1")).toBeVisible();
    const initial = viewportTransform(view).raw;

    await userEvent.click(view.getByRole("button", { name: "zoom in" }));
    await expect.poll(() => viewportTransform(view).raw).not.toBe(initial);

    const zoomed = viewportTransform(view).raw;
    await userEvent.click(view.getByRole("button", { name: "zoom out" }));
    await expect.poll(() => viewportTransform(view).raw).not.toBe(zoomed);

    await userEvent.click(view.getByRole("button", { name: "zoom in" }));
    const beforeFit = viewportTransform(view).raw;
    await userEvent.click(view.getByRole("button", { name: "fit view" }));
    await expect.poll(() => viewportTransform(view).raw).not.toBe(beforeFit);
  });

  test("minZoom and maxZoom clamp the viewport", async () => {
    const { view } = mountFlow({ nodes, edges: [], minZoom: 0.5, maxZoom: 1 });
    await element(view.getByTestId("rf__node-1")).toBeVisible();

    const zoomIn = view.getByRole("button", { name: "zoom in" }).element() as HTMLButtonElement;
    expect(zoomIn.disabled).toBe(true);
    expect(viewportTransform(view).scale).toBe(1);

    for (let step = 0; step < 8; step++) {
      const zoomOut = view.getByRole("button", { name: "zoom out" }).element() as HTMLButtonElement;
      if (zoomOut.disabled) break;
      await userEvent.click(view.getByRole("button", { name: "zoom out" }));
    }

    await expect.poll(() => viewportTransform(view).scale).toBeGreaterThanOrEqual(0.5);
    await expect.poll(() => viewportTransform(view).scale).toBeLessThan(1);
    await expect
      .poll(
        () =>
          (view.getByRole("button", { name: "zoom out" }).element() as HTMLButtonElement).disabled,
      )
      .toBe(true);
  });

  test("defaultViewport is the initial transform", async () => {
    const { view } = mountFlow({
      nodes,
      edges: [],
      defaultViewport: { x: 25, y: 40, zoom: 1.25 },
    });

    await expect.poll(() => viewportTransform(view).x).toBeCloseTo(25, 0);
    await expect.poll(() => viewportTransform(view).y).toBeCloseTo(40, 0);
    await expect.poll(() => viewportTransform(view).scale).toBeCloseTo(1.25, 2);
  });
});
