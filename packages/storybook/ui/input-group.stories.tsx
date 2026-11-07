import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { InputGroup } from "../../ui/src/components/input-group";
import { createSignal } from "solid-js";

const meta = {
  title: "UI/InputGroup",
  component: InputGroup,
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <InputGroupDemo />,
};

function InputGroupDemo() {
  const [value, setValue] = createSignal("");

  return (
    <InputGroup class="max-w-xs">
      <span class="text-muted-foreground">https://</span>
      <input
        class="min-w-0 flex-1 bg-transparent py-2 text-foreground outline-none"
        placeholder="example.com"
        value={value()}
        onInput={(event) => setValue(event.currentTarget.value)}
      />
    </InputGroup>
  );
}
