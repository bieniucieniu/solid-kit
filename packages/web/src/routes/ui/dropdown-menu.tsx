import { DocsPage } from "~/components/preview";
import { DropdownMenuDemo } from "~/demos/ui/dropdown-menu";

const snippet = `import { Button, DropdownMenu } from "@solid-kit/ui";

<DropdownMenu>
  <DropdownMenu.Trigger as={Button}>Open</DropdownMenu.Trigger>
  <DropdownMenu.Portal>
    <DropdownMenu.Content>
      <DropdownMenu.Item>Edit</DropdownMenu.Item>
      <DropdownMenu.Separator />
      <DropdownMenu.Item variant="destructive">Delete</DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Portal>
</DropdownMenu>`;

export default function DropdownMenuPage() {
  return (
    <DocsPage title="Dropdown menu" description="A menu opened from a button." snippet={snippet}>
      <DropdownMenuDemo />
    </DocsPage>
  );
}
