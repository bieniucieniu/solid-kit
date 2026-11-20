import { render } from "@solidjs/testing-library";
import { createSignal } from "solid-js";
import { describe, expect, test } from "vite-plus/test";
import { page, userEvent } from "vite-plus/test/browser";
import {
  Checkbox,
  CheckboxControl,
  CheckboxLabel,
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeadline,
  DialogTrigger,
  FilterChip,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
  SegmentedButton,
  SegmentedButtonItem,
  SnackbarRegion,
  Switch,
  SwitchControl,
  SwitchLabel,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TextField,
  TextFieldContainer,
  TextFieldInput,
  TextFieldLabel,
  ToggleButton,
  snackbar,
} from "./index";

describe("m3 on ui-sdk", () => {
  test("toggle button keeps its pressed state", async () => {
    render(() => <ToggleButton aria-label="Favorite">Fav</ToggleButton>);
    const button = page.getByRole("button", { name: "Favorite" });
    await button.click();
    await expect.element(button).toHaveAttribute("data-pressed");
    await expect.element(button).toHaveClass(/data-pressed:bg-primary/);
  });

  test("filter chip shows a check while pressed", async () => {
    render(() => <FilterChip>Vegan</FilterChip>);
    const chip = page.getByRole("button", { name: "Vegan" });
    await chip.click();
    await expect.element(chip).toHaveAttribute("aria-pressed", "true");
    expect(chip.element().querySelector("svg")).not.toBeNull();
  });

  test("checkbox and switch report their state", async () => {
    const [checked, setChecked] = createSignal(false);
    render(() => (
      <>
        <Checkbox>
          <CheckboxControl
            checked={checked()}
            onCheckedChange={(next) => setChecked(next === true)}
          />
          <CheckboxLabel>Remember me</CheckboxLabel>
        </Checkbox>
        <Switch>
          <SwitchControl />
          <SwitchLabel>Wi-Fi</SwitchLabel>
        </Switch>
      </>
    ));
    await page.getByRole("checkbox", { name: "Remember me" }).click();
    expect(checked()).toBe(true);
    const wifi = page.getByRole("switch", { name: "Wi-Fi" });
    await wifi.click();
    await expect.element(wifi).toHaveAttribute("data-checked");
  });

  test("segmented button selects one segment", async () => {
    render(() => (
      <SegmentedButton aria-label="View" defaultValue={["day"]}>
        <SegmentedButtonItem value="day">Day</SegmentedButtonItem>
        <SegmentedButtonItem value="week">Week</SegmentedButtonItem>
      </SegmentedButton>
    ));
    await page.getByRole("button", { name: "Week" }).click();
    await expect
      .element(page.getByRole("button", { name: "Week" }))
      .toHaveAttribute("data-pressed");
    await expect
      .element(page.getByRole("button", { name: "Day" }))
      .not.toHaveAttribute("data-pressed");
  });

  test("menu opens and runs an item", async () => {
    const [last, setLast] = createSignal<string>();
    render(() => (
      <Menu onAction={(value) => setLast(String(value))}>
        <MenuTrigger>Sort</MenuTrigger>
        <MenuContent>
          <MenuItem value="name">By name</MenuItem>
          <MenuItem value="date">By date</MenuItem>
        </MenuContent>
      </Menu>
    ));
    await page.getByRole("button", { name: "Sort" }).click();
    await page.getByRole("menuitem", { name: "By date" }).click();
    expect(last()).toBe("date");
  });

  test("dialog opens and closes", async () => {
    render(() => (
      <Dialog>
        <DialogTrigger>Delete</DialogTrigger>
        <DialogContent>
          <DialogHeadline>Delete file?</DialogHeadline>
          <DialogClose>Cancel</DialogClose>
        </DialogContent>
      </Dialog>
    ));
    await page.getByRole("button", { name: "Delete" }).click();
    const dialog = page.getByRole("dialog", { name: "Delete file?" });
    await expect.element(dialog).toBeVisible();
    await page.getByRole("button", { name: "Cancel" }).click();
    await expect.element(dialog).not.toBeInTheDocument();
  });

  test("tabs switch panels", async () => {
    render(() => (
      <Tabs defaultValue="a">
        <TabsList aria-label="Media">
          <TabsTrigger value="a">Photos</TabsTrigger>
          <TabsTrigger value="b">Videos</TabsTrigger>
        </TabsList>
        <TabsContent value="a">All photos</TabsContent>
        <TabsContent value="b">All videos</TabsContent>
      </Tabs>
    ));
    await page.getByRole("tab", { name: "Videos" }).click();
    await expect.element(page.getByText("All videos")).toBeVisible();
  });

  test("text field labels its input", async () => {
    render(() => (
      <TextField>
        <TextFieldContainer>
          <TextFieldLabel>Email</TextFieldLabel>
          <TextFieldInput />
        </TextFieldContainer>
      </TextField>
    ));
    const input = page.getByRole("textbox", { name: "Email" });
    await input.fill("me@example.com");
    await expect.element(input).toHaveValue("me@example.com");
  });

  test("snackbar shows a message", async () => {
    render(() => <SnackbarRegion />);
    snackbar("Photo saved");
    await expect.element(page.getByText("Photo saved")).toBeVisible();
    await userEvent.keyboard("{Escape}");
  });
});
