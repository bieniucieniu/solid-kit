import { DocsPage } from "~/components/preview";
import { PopoverDemo } from "~/demos/ui/popover";

const snippet = `import { Button, Popover } from "@solid-kit/ui";

<Popover>
  <Popover.Trigger as={Button}>Open</Popover.Trigger>
  <Popover.Portal>
    <Popover.Content>
      <Popover.Title>Dimensions</Popover.Title>
      <Popover.Description>Set the size of the frame.</Popover.Description>
      <Popover.CloseButton>Close</Popover.CloseButton>
    </Popover.Content>
  </Popover.Portal>
</Popover>`;

export default function PopoverPage() {
  return (
    <DocsPage title="Popover" description="A panel anchored to a trigger." snippet={snippet}>
      <PopoverDemo />
    </DocsPage>
  );
}
