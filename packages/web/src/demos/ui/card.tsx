import { Button, Card } from "@solid-kit/ui";
import { For } from "solid-js";

const sizes = ["default", "sm"] as const;

export function CardDemo() {
  return (
    <div class="grid w-full gap-4 sm:grid-cols-2">
      <For each={sizes}>
        {(size) => (
          <Card size={size}>
            <Card.Header>
              <Card.Title>Project ({size})</Card.Title>
              <Card.Description>A short summary of the work.</Card.Description>
              <Card.Action>
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
              </Card.Action>
            </Card.Header>
            <Card.Content>Three open tasks.</Card.Content>
            <Card.Footer>
              <Button>Save</Button>
            </Card.Footer>
          </Card>
        )}
      </For>
    </div>
  );
}
