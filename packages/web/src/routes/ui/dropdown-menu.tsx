import { DocsPage } from "~/components/preview";
import { DropdownMenuDemo } from "~/demos/ui/dropdown-menu";
import source from "~/demos/ui/dropdown-menu.tsx?raw";

const snippet = `import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@solid-kit/ui";

<DropdownMenu>
  <DropdownMenuTrigger as={Button}>Open</DropdownMenuTrigger>
  <DropdownMenuPortal>
    <DropdownMenuContent>
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenuPortal>
</DropdownMenu>`;

export default function DropdownMenuPage() {
  return (
    <DocsPage
      title="Dropdown menu"
      description="A menu opened from a button."
      snippet={snippet}
      source={source}
      sourceTitle="demos/ui/dropdown-menu.tsx"
    >
      <DropdownMenuDemo />
    </DocsPage>
  );
}
