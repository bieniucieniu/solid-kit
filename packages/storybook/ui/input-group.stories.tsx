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
    <div class="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroup.Addon>
          <InputGroup.Text>https://</InputGroup.Text>
        </InputGroup.Addon>
        <InputGroup.Input
          placeholder="example.com"
          value={value()}
          onInput={(event) => setValue(event.currentTarget.value)}
        />
        <InputGroup.Addon align="inline-end">
          <InputGroup.Button size="sm">Go</InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup>
        <InputGroup.Addon align="block-start" class="border-b">
          <InputGroup.Text>script.ts</InputGroup.Text>
        </InputGroup.Addon>
        <InputGroup.Input placeholder="console.log('hi')" />
      </InputGroup>
      <InputGroup>
        <InputGroup.Textarea placeholder="Message" />
        <InputGroup.Addon align="block-end" class="border-t">
          <InputGroup.Button variant="default" class="ml-auto">
            Send
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
    </div>
  );
}
