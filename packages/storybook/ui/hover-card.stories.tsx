import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { HoverCard } from "../../ui/src/components/hover-card";
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
      <HoverCard.Trigger as={Button}>Hover</HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content>
          Ada Lovelace
          <HoverCard.Arrow />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard>
  );
}
