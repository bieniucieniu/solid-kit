import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Card } from "../../ui/src/components/card";
import { Button } from "../../ui/src/components/button";

const meta = {
  title: "UI/Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <CardDemo />,
};

function CardDemo() {
  return (
    <Card class="max-w-sm">
      <Card.Header>
        <Card.Title>Project</Card.Title>
        <Card.Description>A short summary of the work.</Card.Description>
      </Card.Header>
      <Card.Content>Three open tasks.</Card.Content>
      <Card.Footer>
        <Button type="button">Save</Button>
      </Card.Footer>
    </Card>
  );
}
