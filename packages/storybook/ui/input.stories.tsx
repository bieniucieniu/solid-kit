import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Input } from "../../ui/src/components/input";
import { createSignal } from "solid-js";

const meta = {
  title: "UI/Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <InputDemo />,
};

function InputDemo() {
  const [value, setValue] = createSignal("");

  return (
    <Input class="max-w-xs" value={value()} onChange={setValue}>
      <Input.Label>Email</Input.Label>
      <Input.Input type="email" placeholder="ada@example.com" />
      <Input.Description>Used to sign in.</Input.Description>
    </Input>
  );
}
