import type { Meta, StoryObj } from "storybook-solidjs-vite";
import {
  Combobox,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemLabel,
  ComboboxLabel,
  ComboboxListbox,
  ComboboxPortal,
  ComboboxTrigger,
} from "../../1.9/ui/src/components/combobox";
import { createSignal } from "solid-js";

const meta = {
  title: "UI/Combobox",
  component: Combobox,
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ComboboxDemo />,
};

const options = ["Apple", "Banana", "Orange"];

function ComboboxDemo() {
  const [value, setValue] = createSignal<string | null>(null);

  return (
    <Combobox
      class="max-w-xs"
      options={options}
      value={value()}
      onChange={setValue}
      placeholder="Search fruit"
      itemComponent={(props) => (
        <ComboboxItem item={props.item}>
          <ComboboxItemLabel>{props.item.rawValue}</ComboboxItemLabel>
        </ComboboxItem>
      )}
    >
      <ComboboxLabel>Fruit</ComboboxLabel>
      <ComboboxControl>
        <ComboboxInput />
        <ComboboxTrigger />
      </ComboboxControl>
      <ComboboxPortal>
        <ComboboxContent>
          <ComboboxListbox />
        </ComboboxContent>
      </ComboboxPortal>
    </Combobox>
  );
}
