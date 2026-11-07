import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Avatar } from "../../ui/src/components/avatar";

const meta = {
  title: "UI/Avatar",
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <AvatarDemo />,
};

function AvatarDemo() {
  return (
    <Avatar>
      <Avatar.Img alt="Ada Lovelace" />
      <Avatar.Fallback>AL</Avatar.Fallback>
    </Avatar>
  );
}
