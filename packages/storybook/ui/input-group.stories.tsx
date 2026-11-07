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
      <InputGroup.Addon>
        <InputGroup.Text>https://</InputGroup.Text>
      </InputGroup.Addon>
      <InputGroup.Input
        placeholder="example.com"
        value={value()}
        onInput={(event) => setValue(event.currentTarget.value)}
      />
    </InputGroup>
  );
}
