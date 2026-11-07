import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { ToggleGroup } from "../../ui/src/components/toggle-group";
import { createSignal } from "solid-js";

const meta = {
  title: "UI/ToggleGroup",
  component: ToggleGroup,
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ToggleGroupDemo />,
};

function ToggleGroupDemo() {
  const [value, setValue] = createSignal<string | null>("left");

  return (
    <ToggleGroup value={value()} onChange={setValue}>
      <ToggleGroup.Item value="left">Left</ToggleGroup.Item>
      <ToggleGroup.Item value="center">Center</ToggleGroup.Item>
      <ToggleGroup.Item value="right">Right</ToggleGroup.Item>
    </ToggleGroup>
  );
}
