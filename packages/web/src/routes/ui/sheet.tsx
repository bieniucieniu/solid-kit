import { DocsPage } from "~/components/preview";
import { SheetDemo } from "~/demos/ui/sheet";

const snippet = `import {
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

// SheetContent side: "top" | "right" | "bottom" | "left"
<Sheet>
  <SheetTrigger as={Button}>Open</SheetTrigger>
  <SheetPortal>
    <SheetOverlay />
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle>Settings</SheetTitle>
        <SheetDescription>Changes apply to this project.</SheetDescription>
      </SheetHeader>
      <SheetFooter>
        <SheetCloseButton>Close</SheetCloseButton>
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
