import { render } from "@solidjs/testing-library";
import { createSignal } from "solid-js";
import { describe, expect, test } from "vite-plus/test";
import { page, userEvent } from "vite-plus/test/browser";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
  Checkbox,
  CheckboxLabel,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemLabel,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Slider,
  SliderControl,
  SliderIndicator,
  SliderThumb,
  SliderTrack,
  Switch,
  SwitchLabel,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  ToastRegion,
  Toggle,
  buttonVariants,
  toast,
} from "./index";

describe("ui on ui-sdk", () => {
  test("checkbox toggles and reports through onCheckedChange", async () => {
    const [checked, setChecked] = createSignal(false);
    render(() => (
      <CheckboxLabel>
        <Checkbox checked={checked()} onCheckedChange={(next) => setChecked(next === true)} />
        Accept terms
      </CheckboxLabel>
    ));
    const box = page.getByRole("checkbox", { name: "Accept terms" });
    await expect.element(box).toHaveAttribute("data-unchecked");
    await expect.element(box).toHaveClass(/rounded-\[4px\]/);
    await box.click();
    await expect.element(box).toHaveAttribute("data-checked");
    expect(checked()).toBe(true);
  });

  test("switch flips on click", async () => {
    render(() => (
      <SwitchLabel>
        <Switch />
        Wi-Fi
      </SwitchLabel>
    ));
    const control = page.getByRole("switch", { name: "Wi-Fi" });
    await control.click();
    await expect.element(control).toHaveAttribute("data-checked");
  });

  test("radio group selects one value", async () => {
    const [value, setValue] = createSignal("a");
    render(() => (
      <RadioGroup
        aria-label="Plan"
        value={value()}
        onValueChange={(next) => setValue(next as string)}
      >
        <RadioGroupItemLabel>
          <RadioGroupItem value="a" />A
        </RadioGroupItemLabel>
        <RadioGroupItemLabel>
          <RadioGroupItem value="b" />B
        </RadioGroupItemLabel>
      </RadioGroup>
    ));
    await page.getByRole("radio", { name: "B" }).click();
    await expect.element(page.getByRole("radio", { name: "B" })).toHaveAttribute("data-checked");
    expect(value()).toBe("b");
  });

  test("tabs move with the arrow keys", async () => {
    render(() => (
      <Tabs defaultValue="one">
        <TabsList aria-label="Sections">
          <TabsTrigger value="one">One</TabsTrigger>
          <TabsTrigger value="two">Two</TabsTrigger>
        </TabsList>
        <TabsContent value="one">First panel</TabsContent>
        <TabsContent value="two">Second panel</TabsContent>
      </Tabs>
    ));
    await page.getByRole("tab", { name: "One" }).click();
    await userEvent.keyboard("{ArrowRight}");
    await expect.element(page.getByRole("tab", { name: "Two" })).toHaveAttribute("data-selected");
    await expect.element(page.getByText("Second panel")).toBeVisible();
  });

  test("accordion opens a panel", async () => {
    render(() => (
      <Accordion>
        <AccordionItem value="faq">
          <AccordionHeader>
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>Yes.</AccordionContent>
        </AccordionItem>
      </Accordion>
    ));
    const trigger = page.getByRole("button", { name: "Is it accessible?" });
    await trigger.click();
    await expect.element(trigger).toHaveAttribute("aria-expanded", "true");
    await expect.element(page.getByText("Yes.")).toBeVisible();
  });

  test("dropdown menu runs an item from the keyboard", async () => {
    const [last, setLast] = createSignal<string>();
    render(() => (
      <DropdownMenu onAction={(value) => setLast(String(value))}>
        <DropdownMenuTrigger class={buttonVariants({ variant: "outline" })}>
          Actions
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem value="copy">Copy</DropdownMenuItem>
          <DropdownMenuItem value="delete" variant="destructive">
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ));
    await page.getByRole("button", { name: "Actions" }).click();
    const remove = page.getByRole("menuitem", { name: "Delete" });
    await expect.element(remove).toBeVisible();
    await expect.element(remove).toHaveAttribute("data-destructive");
    await remove.click();
    expect(last()).toBe("delete");
    await expect.element(page.getByRole("menu")).not.toBeInTheDocument();
  });

  test("select picks an option", async () => {
    const [value, setValue] = createSignal<string | null>(null);
    render(() => (
      <Select
        value={value()}
        onValueChange={(next) => setValue(next as string)}
        placeholder="Fruit"
      >
        <SelectTrigger aria-label="Fruit">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="pear">Pear</SelectItem>
        </SelectContent>
      </Select>
    ));
    await page.getByRole("combobox", { name: "Fruit" }).click();
    await page.getByRole("option", { name: "Pear" }).click();
    expect(value()).toBe("pear");
    await expect.element(page.getByRole("combobox", { name: "Fruit" })).toHaveTextContent("Pear");
  });

  test("popover opens beside its trigger and closes on Escape", async () => {
    render(() => (
      <Popover>
        <PopoverTrigger class={buttonVariants()}>Details</PopoverTrigger>
        <PopoverContent>
          <PopoverTitle>Project</PopoverTitle>
        </PopoverContent>
      </Popover>
    ));
    await page.getByRole("button", { name: "Details" }).click();
    const dialog = page.getByRole("dialog", { name: "Project" });
    await expect.element(dialog).toBeVisible();
    await userEvent.keyboard("{Escape}");
    await expect.element(dialog).not.toBeInTheDocument();
  });

  test("toggle reports pressed", async () => {
    render(() => <Toggle aria-label="Bold">B</Toggle>);
    const bold = page.getByRole("button", { name: "Bold" });
    await bold.click();
    await expect.element(bold).toHaveAttribute("aria-pressed", "true");
    await expect.element(bold).toHaveAttribute("data-pressed");
  });

  test("slider steps with the arrow keys", async () => {
    const [value, setValue] = createSignal(50);
    render(() => (
      <Slider value={value()} onValueChange={(next) => setValue(next as number)}>
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
            <SliderThumb aria-label="Volume" />
          </SliderTrack>
        </SliderControl>
      </Slider>
    ));
    // The thumb's range input takes focus; it is visually hidden, so focus it directly.
    (page.getByRole("slider", { name: "Volume" }).element() as HTMLInputElement).focus();
    await userEvent.keyboard("{ArrowRight}");
    expect(value()).toBe(51);
  });

  test("toast shows a queued message", async () => {
    render(() => <ToastRegion />);
    toast("Saved", { description: "Your changes are live." });
    await expect.element(page.getByText("Your changes are live.")).toBeVisible();
  });
});
