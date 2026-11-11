import { DocsPage } from "~/components/preview";
import { SheetDemo } from "~/demos/ui/sheet";

const snippet = `import {
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetLabel,
  SheetOverlay,
  SheetPortal,
  SheetTrigger,
} from "@solid-kit/ui";

// SheetContent side: "top" | "right" | "bottom" | "left"
<Sheet>
  <SheetTrigger as={Button}>Open</SheetTrigger>
  <SheetPortal>
    <SheetOverlay />
    <SheetContent side="left">
      <SheetHeader>
        <SheetLabel>Settings</SheetLabel>
        <SheetDescription>Changes apply to this project.</SheetDescription>
      </SheetHeader>
      <SheetFooter>
        <SheetClose>Close</SheetClose>
      </SheetFooter>
    </SheetContent>
  </SheetPortal>
</Sheet>`;

export default function SheetPage() {
  return (
    <DocsPage title="Sheet" description="A panel that slides in from the right." snippet={snippet}>
      <SheetDemo />
    </DocsPage>
  );
}
