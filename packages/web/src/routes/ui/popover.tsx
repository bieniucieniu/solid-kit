import { DocsPage } from "~/components/preview";
import { PopoverDemo } from "~/demos/ui/popover";

const snippet = `import {
  Button,
  Popover,
  PopoverCloseButton,
  PopoverContent,
  PopoverDescription,
  PopoverPortal,
  PopoverTitle,
  PopoverTrigger,
} from "@solid-kit/ui";

<Popover>
  <PopoverTrigger as={Button}>Open</PopoverTrigger>
  <PopoverPortal>
    <PopoverContent>
      <PopoverTitle>Dimensions</PopoverTitle>
      <PopoverDescription>Set the size of the frame.</PopoverDescription>
      <PopoverCloseButton>Close</PopoverCloseButton>
    </PopoverContent>
  </PopoverPortal>
</Popover>`;

export default function PopoverPage() {
  return (
    <DocsPage title="Popover" description="A panel anchored to a trigger." snippet={snippet}>
      <PopoverDemo />
    </DocsPage>
  );
}
