import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Combobox } from "../../ui/src/components/combobox";
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
        <Combobox.Item item={props.item}>
          <Combobox.ItemLabel>{props.item.rawValue}</Combobox.ItemLabel>
        </Combobox.Item>
      )}
    >
      <Combobox.Label>Fruit</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input />
      </Combobox.Control>
      <Combobox.Portal>
        <Combobox.Content>
          <Combobox.Listbox />
        </Combobox.Content>
      </Combobox.Portal>
    </Combobox>
  );
}
