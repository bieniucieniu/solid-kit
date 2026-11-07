import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Textarea } from "../../ui/src/components/textarea";
import { createSignal } from "solid-js";

const meta = {
  title: "UI/Textarea",
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <TextareaDemo />,
};

function TextareaDemo() {
  const [value, setValue] = createSignal("");

  return (
    <Textarea class="max-w-xs" value={value()} onChange={setValue}>
      <Textarea.Label>Bio</Textarea.Label>
      <Textarea.TextArea placeholder="A short note" />
      <Textarea.Description>Shown on your profile.</Textarea.Description>
    </Textarea>
  );
}
