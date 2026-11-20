import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Badge } from "../../1.9/ui/src/components/badge";

const meta = {
  title: "UI/Badge",
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <BadgeDemo />,
};

function BadgeDemo() {
  return <Badge>New</Badge>;
}
