import { Button, Card } from "@solid-kit/ui";

export function CardDemo() {
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
