import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { RadioGroup } from "../../ui/src/components/radio-group";
import { createSignal } from "solid-js";

const meta = {
  title: "UI/RadioGroup",
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <RadioGroupDemo />,
};

function RadioGroupDemo() {
  const [fruit, setFruit] = createSignal("apple");

  return (
    <RadioGroup value={fruit()} onChange={setFruit}>
      <RadioGroup.Label>Fruit</RadioGroup.Label>
      <RadioGroup.Item value="apple">
        <RadioGroup.ItemInput />
        <RadioGroup.ItemControl>
          <RadioGroup.ItemIndicator />
        </RadioGroup.ItemControl>
        <RadioGroup.ItemLabel>Apple</RadioGroup.ItemLabel>
      </RadioGroup.Item>
      <RadioGroup.Item value="pear">
        <RadioGroup.ItemInput />
        <RadioGroup.ItemControl>
          <RadioGroup.ItemIndicator />
        </RadioGroup.ItemControl>
        <RadioGroup.ItemLabel>Pear</RadioGroup.ItemLabel>
      </RadioGroup.Item>
    </RadioGroup>
  );
}
