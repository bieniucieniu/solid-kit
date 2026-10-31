import { Button, DropdownMenu } from "@solid-kit/ui";
import { createSignal } from "solid-js";

export function DropdownMenuDemo() {
  const [action, setAction] = createSignal("None");

  return (
    <div class="flex flex-col items-start gap-3">
      <DropdownMenu>
        <DropdownMenu.Trigger as={Button}>Open</DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content>
            <DropdownMenu.Item onSelect={() => setAction("Edit")}>Edit</DropdownMenu.Item>
            <DropdownMenu.Item onSelect={() => setAction("Duplicate")}>Duplicate</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item onSelect={() => setAction("Delete")}>Delete</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu>
      <p class="text-sm text-muted-foreground">Action: {action()}</p>
    </div>
  );
}
