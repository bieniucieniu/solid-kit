import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Button } from "../../ui/src/components/button";
import { createSignal } from "solid-js";

const meta = {
  title: "UI/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ButtonDemo />,
};

function ButtonDemo() {
  const [count, setCount] = createSignal(0);

  return (
    <Button type="button" onClick={() => setCount((value) => value + 1)}>
      Clicked {count()}
    </Button>
  );
}
