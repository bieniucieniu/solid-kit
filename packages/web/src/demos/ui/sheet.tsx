import {
  Button,
  Sheet,
  SheetCloseButton,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from "@solid-kit/ui";
import { For } from "solid-js";

const sides = ["top", "right", "bottom", "left"] as const;

export function SheetDemo() {
  return (
    <div class="flex flex-wrap gap-2">
      <For each={sides}>
        {(side) => (
          <Sheet>
            <SheetTrigger as={Button} variant="outline">
              Open {side}
            </SheetTrigger>
            <SheetPortal>
              <SheetOverlay />
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle>Settings</SheetTitle>
                  <SheetDescription>Changes apply to this project.</SheetDescription>
                </SheetHeader>
                <p class="text-muted-foreground">Content placed directly in the sheet is padded.</p>
                <SheetFooter>
                  <SheetCloseButton variant="default">Save</SheetCloseButton>
                  <SheetCloseButton>Cancel</SheetCloseButton>
                </SheetFooter>
              </SheetContent>
            </SheetPortal>
          </Sheet>
        )}
      </For>
    </div>
  );
}
