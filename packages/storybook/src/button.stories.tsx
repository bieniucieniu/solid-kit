import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Button } from "@solid-kit/ui";

const meta = {
  title: "UI/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Button>Button</Button>,
};
