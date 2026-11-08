import type { Meta, StoryObj } from "storybook-solidjs-vite";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPortal,
  HoverCardTrigger,
} from "../../ui/src/components/hover-card";
import { Button } from "../../ui/src/components/button";

const meta = {
  title: "UI/HoverCard",
  component: HoverCard,
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <HoverCardDemo />,
};

function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger as={Button}>Hover</HoverCardTrigger>
      <HoverCardPortal>
        <HoverCardContent>Ada Lovelace</HoverCardContent>
      </HoverCardPortal>
    </HoverCard>
  );
}
