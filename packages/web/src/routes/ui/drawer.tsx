import { DocsPage } from "~/components/preview";
import { DrawerDemo } from "~/demos/ui/drawer";

const snippet = `import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerLabel,
  DrawerOverlay,
  DrawerPortal,
  DrawerTrigger,
} from "@solid-kit/ui";

<Drawer>
  <DrawerTrigger as={Button}>Open</DrawerTrigger>
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerHeader>
        <DrawerLabel>Filters</DrawerLabel>
        <DrawerDescription>Narrow the list.</DrawerDescription>
      </DrawerHeader>
      <DrawerFooter>
        <DrawerClose>Close</DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </DrawerPortal>
</Drawer>`;

export default function DrawerPage() {
  return (
    <DocsPage
      title="Drawer"
      description="A panel that slides in from an edge. Drag it back to dismiss."
      snippet={snippet}
    >
      <DrawerDemo />
    </DocsPage>
  );
}
