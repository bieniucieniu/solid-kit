import { DocsPage } from "~/components/preview";
import { DrawerDemo } from "~/demos/ui/drawer";

const snippet = `import {
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "@solid-kit/ui";

<Drawer>
  <DrawerTrigger as={Button}>Open</DrawerTrigger>
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Filters</DrawerTitle>
        <DrawerDescription>Narrow the list.</DrawerDescription>
      </DrawerHeader>
      <DrawerFooter>
        <DrawerCloseButton>Close</DrawerCloseButton>
      </DrawerFooter>
    </DrawerContent>
  </DrawerPortal>
</Drawer>`;

export default function DrawerPage() {
  return (
    <DocsPage
      title="Drawer"
      description="A panel that slides up from the bottom."
      snippet={snippet}
    >
      <DrawerDemo />
    </DocsPage>
  );
}
