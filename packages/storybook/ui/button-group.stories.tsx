import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { ButtonGroup } from "../../ui/src/components/button-group";
import { Button } from "../../ui/src/components/button";

const meta = {
  title: "UI/ButtonGroup",
  component: ButtonGroup,
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ButtonGroupDemo />,
};

function ButtonGroupDemo() {
  return (
    <ButtonGroup>
      <Button type="button">Cut</Button>
      <Button type="button">Copy</Button>
      <Button type="button">Paste</Button>
    </ButtonGroup>
  );
}
