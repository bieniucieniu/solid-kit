import {
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
            <DrawerTitle>Filters</DrawerTitle>
            <DrawerDescription>Narrow the list.</DrawerDescription>
          </DrawerHeader>
          <p class="text-muted-foreground">Content placed directly in the drawer is padded.</p>
          <DrawerFooter>
            <DrawerCloseButton variant="default">Apply</DrawerCloseButton>
            <DrawerCloseButton>Cancel</DrawerCloseButton>
          </DrawerFooter>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
}
