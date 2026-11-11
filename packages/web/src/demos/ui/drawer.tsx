import {
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

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger as={Button} variant="outline">
        Open
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <DrawerLabel>Filters</DrawerLabel>
            <DrawerDescription>Narrow the list.</DrawerDescription>
          </DrawerHeader>
          <p class="text-muted-foreground">Content placed directly in the drawer is padded.</p>
          <DrawerFooter>
            <DrawerClose variant="default">Apply</DrawerClose>
            <DrawerClose>Cancel</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
}
