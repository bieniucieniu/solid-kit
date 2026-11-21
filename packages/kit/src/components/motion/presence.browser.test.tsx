import { cleanup, render } from "@solidjs/testing-library";
import { createSignal } from "solid-js";
import { afterEach, describe, expect, test } from "vite-plus/test";
import { page, userEvent } from "vite-plus/test/browser";
import { AnimatePresence, motion } from "./index";

type ElementAssertion = {
  toBeVisible: () => Promise<void>;
};

function element(target: ReturnType<typeof page.getByTestId>) {
  return (
    expect as unknown as {
      element: (target: ReturnType<typeof page.getByTestId>) => ElementAssertion;
    }
  ).element(target);
}

afterEach(() => {
  cleanup();
});

describe("motion", () => {
  test("animate moves the element", async () => {
    render(() => (
      <motion.div
        data-testid="box"
        style={{ width: "40px", height: "40px", background: "blue" }}
        animate={{ x: 80 }}
        transition={{ duration: 0.2 }}
      />
    ));
    await expect
      .poll(() => {
        const node = page.getByTestId("box").element();
        return node instanceof HTMLElement ? node.style.transform : "";
      })
      .toContain("translateX");
  });

  test("ref accepts a callback or an array of callbacks", () => {
    const one: Element[] = [];
    const two: Element[] = [];
    let single: Element | undefined;
    render(() => (
      <>
        <motion.div
          data-testid="array"
          ref={[(el: Element) => one.push(el), (el: Element) => two.push(el)]}
        />
        <motion.div data-testid="single" ref={(el: Element) => (single = el)} />
      </>
    ));
    const array = page.getByTestId("array").elements()[0];
    expect(one).toEqual([array]);
    expect(two).toEqual([array]);
    expect(single).toBe(page.getByTestId("single").elements()[0]);
  });

  test("hover scales the element", async () => {
    render(() => (
      <motion.div
        data-testid="box"
        style={{ width: "40px", height: "40px", background: "blue" }}
        whileHover={{ scale: 1.2 }}
      />
    ));
    await userEvent.hover(page.getByTestId("box"));
    await expect
      .poll(() => {
        const node = page.getByTestId("box").element();
        return node instanceof HTMLElement ? node.style.transform : "";
      })
      .toContain("scale");
  });

  test("exit stays mounted until the animation ends", async () => {
    const [open, setOpen] = createSignal(true);
    render(() => (
      <>
        <button type="button" onClick={() => setOpen(false)}>
          Close
        </button>
        <AnimatePresence when={open}>
          <motion.div
            data-testid="panel"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            Panel
          </motion.div>
        </AnimatePresence>
      </>
    ));

    await element(page.getByTestId("panel")).toBeVisible();
    await userEvent.click(page.getByRole("button", { name: "Close" }));
    await element(page.getByTestId("panel")).toBeVisible();
    await expect.poll(() => page.getByTestId("panel").elements().length, { timeout: 1000 }).toBe(0);
  });

  test("each keeps a removed row until exit finishes", async () => {
    const [items, setItems] = createSignal([
      { id: "a", name: "Alpha" },
      { id: "b", name: "Beta" },
    ]);
    render(() => (
      <>
        <button
          type="button"
          onClick={() => setItems((list) => list.filter((item) => item.id !== "a"))}
        >
          Remove
        </button>
        <AnimatePresence each={items} by={(item) => item.id}>
          {(item) => (
            <motion.div data-testid={item.id} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              {item.name}
            </motion.div>
          )}
        </AnimatePresence>
      </>
    ));

    await element(page.getByTestId("a")).toBeVisible();
    await userEvent.click(page.getByRole("button", { name: "Remove" }));
    await element(page.getByTestId("a")).toBeVisible();
    await element(page.getByTestId("b")).toBeVisible();
    await expect.poll(() => page.getByTestId("a").elements().length, { timeout: 1000 }).toBe(0);
    await element(page.getByTestId("b")).toBeVisible();
  });

  test("each shows a kept row's new item and index without replaying initial", async () => {
    const [items, setItems] = createSignal([
      { id: "a", name: "Alpha" },
      { id: "b", name: "Beta" },
    ]);
    render(() => (
      <AnimatePresence each={items} by={(item) => item.id}>
        {(item, index) => (
          <motion.div
            data-testid={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {index()}:{item.name}
          </motion.div>
        )}
      </AnimatePresence>
    ));

    const opacity = (id: string) => {
      const node = page.getByTestId(id).elements()[0];
      return node instanceof HTMLElement ? Number(getComputedStyle(node).opacity) : -1;
    };
    await expect.poll(() => page.getByTestId("b").elements()[0]?.textContent).toBe("1:Beta");
    await expect.poll(() => opacity("b"), { timeout: 1000 }).toBe(1);

    // Same keys: a renamed item and a swapped order.
    setItems([
      { id: "b", name: "Bravo" },
      { id: "a", name: "Alpha" },
    ]);
    await expect.poll(() => page.getByTestId("b").elements()[0]?.textContent).toBe("0:Bravo");
    await expect.poll(() => page.getByTestId("a").elements()[0]?.textContent).toBe("1:Alpha");
    // The rebuilt row starts at its animate target instead of fading in again.
    expect(opacity("b")).toBe(1);
  });

  test("wait holds a new row until the old one exits", async () => {
    const [items, setItems] = createSignal([{ id: "a", name: "Alpha" }]);
    render(() => (
      <>
        <button type="button" onClick={() => setItems([{ id: "b", name: "Beta" }])}>
          Swap
        </button>
        <AnimatePresence each={items} by={(item) => item.id} mode="wait">
          {(item) => (
            <motion.div
              data-testid={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {item.name}
            </motion.div>
          )}
        </AnimatePresence>
      </>
    ));

    await element(page.getByTestId("a")).toBeVisible();
    await userEvent.click(page.getByRole("button", { name: "Swap" }));
    await element(page.getByTestId("a")).toBeVisible();
    expect(page.getByTestId("b").elements().length).toBe(0);
    await expect.poll(() => page.getByTestId("b").elements().length, { timeout: 1000 }).toBe(1);
    expect(page.getByTestId("a").elements().length).toBe(0);
  });

  test("popLayout pins the exiting element", async () => {
    const [open, setOpen] = createSignal(true);
    render(() => (
      <div style={{ position: "relative", height: "80px" }}>
        <button type="button" onClick={() => setOpen(false)}>
          Close
        </button>
        <AnimatePresence when={open} mode="popLayout">
          <motion.div
            data-testid="panel"
            style={{ width: "40px", height: "40px" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            Panel
          </motion.div>
        </AnimatePresence>
      </div>
    ));

    await userEvent.click(page.getByRole("button", { name: "Close" }));
    await expect
      .poll(() => {
        const node = page.getByTestId("panel").element();
        return node instanceof HTMLElement ? node.style.position : "";
      })
      .toBe("absolute");
  });
});
