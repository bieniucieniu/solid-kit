import type { Meta, StoryObj } from "storybook-solidjs-vite";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemLabel,
  SelectLabel,
  SelectListbox,
  SelectPortal,
  SelectTrigger,
  SelectValue,
} from "../../1.9/ui/src/components/select";
import { createSignal } from "solid-js";

const meta = {
  title: "UI/Select",
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <SelectDemo />,
};

const options = ["Apple", "Banana", "Orange"];

function SelectDemo() {
  const [fruit, setFruit] = createSignal<string | null>(null);

  return (
    <Select
      class="max-w-xs"
      options={options}
      value={fruit()}
      onChange={setFruit}
      placeholder="Pick a fruit"
      itemComponent={(props) => (
        <SelectItem item={props.item}>
          <SelectItemLabel>{props.item.rawValue}</SelectItemLabel>
        </SelectItem>
      )}
    >
      <SelectLabel>Fruit</SelectLabel>
      <SelectTrigger>
        <SelectValue<string>>{(state) => state.selectedOption()}</SelectValue>
      </SelectTrigger>
      <SelectPortal>
        <SelectContent>
          <SelectListbox />
        </SelectContent>
      </SelectPortal>
    </Select>
  );
}
