import { DocsPage } from "~/components/preview";
import { NavigationMenuDemo } from "~/demos/ui/navigation-menu";

const snippet = `import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@solid-kit/ui";

<NavigationMenu>
  <NavigationMenuItem>
    <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
    <NavigationMenuContent class="grid w-96 grid-cols-2 gap-1">
      <NavigationMenuLink href="/" class="flex-col items-start gap-0.5">
        <span class="font-medium">Introduction</span>
        <span class="text-muted-foreground">What solid-kit is.</span>
      </NavigationMenuLink>
      <NavigationMenuLink href="/ui" class="flex-col items-start gap-0.5">
        <span class="font-medium">Installation</span>
        <span class="text-muted-foreground">Add components with the CLI.</span>
      </NavigationMenuLink>
    </NavigationMenuContent>
  </NavigationMenuItem>
  <NavigationMenuItem>
    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
    <NavigationMenuContent class="w-48">
      <NavigationMenuLink href="/ui/button">Button</NavigationMenuLink>
      <NavigationMenuLink href="/ui/dialog">Dialog</NavigationMenuLink>
    </NavigationMenuContent>
  </NavigationMenuItem>
  <NavigationMenuItem>
    <NavigationMenuTrigger>Packages</NavigationMenuTrigger>
    <NavigationMenuContent class="w-72">
      <NavigationMenuLink href="/ui">@solid-kit/ui</NavigationMenuLink>
      <NavigationMenuLink href="/">@solid-kit/tiptap</NavigationMenuLink>
    </NavigationMenuContent>
  </NavigationMenuItem>
  {/* A Trigger with href outside an Item is a plain link. */}
  <NavigationMenuTrigger href="https://github.com/bieniucieniu/solid-kit">
    GitHub
  </NavigationMenuTrigger>
</NavigationMenu>`;

export default function NavigationMenuPage() {
  return (
    <DocsPage
      title="Navigation menu"
      description="A nav bar whose dropdowns open on hover and share one sliding viewport."
      snippet={snippet}
    >
      <NavigationMenuDemo />
    </DocsPage>
  );
}
