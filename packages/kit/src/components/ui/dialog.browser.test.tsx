import { render } from "@solidjs/testing-library";
import { createSignal } from "solid-js";
import { describe, expect, test } from "vite-plus/test";
import { page, userEvent } from "vite-plus/test/browser";
import { buttonVariants } from "./button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

describe("dialog", () => {
  test("opens from the trigger and closes on Escape", async () => {
    render(() => (
      <Dialog>
        <DialogTrigger class={buttonVariants({ variant: "outline" })}>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Change your name.</DialogDescription>
          <DialogClose>Cancel</DialogClose>
        </DialogContent>
      </Dialog>
    ));
    const trigger = page.getByRole("button", { name: "Open" });
    await expect.element(trigger).toHaveAttribute("data-slot", "dialog-trigger");
    await trigger.click();
    const dialog = page.getByRole("dialog", { name: "Edit profile" });
    await expect.element(dialog).toBeVisible();
    await expect.element(dialog).toHaveAttribute("data-open");
    await expect.element(dialog).toHaveClass(/bg-popover/);
    await userEvent.keyboard("{Escape}");
    await expect.element(dialog).not.toBeInTheDocument();
    await expect.element(trigger).toHaveFocus();
  });

  test("follows a controlled open prop", async () => {
    const [open, setOpen] = createSignal(true);
    render(() => (
      <Dialog open={open()} onOpenChange={(next) => setOpen(next)}>
        <DialogContent showCloseButton>
          <DialogTitle>Controlled</DialogTitle>
        </DialogContent>
      </Dialog>
    ));
    await expect.element(page.getByRole("dialog", { name: "Controlled" })).toBeVisible();
    await page.getByRole("button", { name: "Close" }).click();
    await expect.element(page.getByRole("dialog", { name: "Controlled" })).not.toBeInTheDocument();
    expect(open()).toBe(false);
  });
});
