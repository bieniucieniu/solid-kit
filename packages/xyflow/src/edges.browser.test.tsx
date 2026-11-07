import { describe, expect, test } from "vite-plus/test";
import { userEvent } from "vite-plus/test/browser";
import { element, installFlowBrowser, mountFlow, nodes } from "./testing/mount";

const edge = { id: "e1-2", source: "1", target: "2" };

describe("edges", () => {
  installFlowBrowser();

  test("edge is in the document", async () => {
    const { view } = mountFlow({ nodes, edges: [edge] });

    await element(view.getByTestId("rf__node-1")).toBeVisible();
    await element(view.getByTestId("rf__edge-e1-2")).toBeInTheDocument();
  });

  test("clicking an edge selects it", async () => {
    const { view } = mountFlow({ nodes, edges: [edge] });
    await element(view.getByTestId("rf__edge-e1-2")).toBeInTheDocument();

    view
      .getByTestId("rf__edge-e1-2")
      .element()
      .dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));

    await expect
      .poll(() => view.getByTestId("rf__edge-e1-2").element().classList.contains("selected"))
      .toBe(true);
  });

  test("hidden edge is not in the document", async () => {
    const { view } = mountFlow({ nodes, edges: [{ ...edge, hidden: true }] });
    await element(view.getByTestId("rf__node-1")).toBeVisible();
    await element(view.getByTestId("rf__node-2")).toBeVisible();

    expect(view.getByTestId("rf__edge-e1-2").query()).toBe(null);
  });

  test("animated adds the animated class", async () => {
    const { view } = mountFlow({ nodes, edges: [{ ...edge, animated: true }] });
    await element(view.getByTestId("rf__edge-e1-2")).toBeInTheDocument();

    expect(view.getByTestId("rf__edge-e1-2").element().classList.contains("animated")).toBe(true);
  });

  test("class is applied to the edge", async () => {
    const { view } = mountFlow({ nodes, edges: [{ ...edge, class: "custom-edge" }] });
    await element(view.getByTestId("rf__edge-e1-2")).toBeInTheDocument();

    expect(view.getByTestId("rf__edge-e1-2").element().classList.contains("custom-edge")).toBe(
      true,
    );
  });

  test("style is applied to the path", async () => {
    const { view } = mountFlow({
      nodes,
      edges: [{ ...edge, style: { stroke: "rgb(255, 0, 0)" } }],
    });
    await element(view.getByTestId("rf__edge-e1-2")).toBeInTheDocument();

    const path = view.getByTestId("rf__edge-e1-2").element().querySelector(".xy-flow__edge-path");
    expect(path instanceof SVGPathElement ? path.style.stroke : "").toBe("rgb(255, 0, 0)");
  });

  test("Delete removes a selected edge", async () => {
    const { view } = mountFlow({ nodes, edges: [edge] });
    await element(view.getByTestId("rf__edge-e1-2")).toBeInTheDocument();

    view
      .getByTestId("rf__edge-e1-2")
      .element()
      .dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));
    await expect
      .poll(() => view.getByTestId("rf__edge-e1-2").element().classList.contains("selected"))
      .toBe(true);
    await userEvent.keyboard("{Delete}");

    await expect.poll(() => view.getByTestId("rf__edge-e1-2").query()).toBe(null);
    await element(view.getByTestId("rf__node-1")).toBeVisible();
    await element(view.getByTestId("rf__node-2")).toBeVisible();
  });
});
