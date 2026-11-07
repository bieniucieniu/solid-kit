import { DocsPage } from "~/components/preview";
import { NavigationMenuDemo } from "~/demos/ui/navigation-menu";

const snippet = `import { NavigationMenu } from "@solid-kit/ui";

<NavigationMenu>
  <NavigationMenu.Item>
    <NavigationMenu.Trigger>Getting started</NavigationMenu.Trigger>
    <NavigationMenu.Content class="grid w-96 grid-cols-2 gap-1">
      <NavigationMenu.Link href="/" class="flex-col items-start gap-0.5">
        <span class="font-medium">Introduction</span>
        <span class="text-muted-foreground">What solid-kit is.</span>
      </NavigationMenu.Link>
      <NavigationMenu.Link href="/ui" class="flex-col items-start gap-0.5">
        <span class="font-medium">Installation</span>
        <span class="text-muted-foreground">Add components with the CLI.</span>
      </NavigationMenu.Link>
    </NavigationMenu.Content>
  </NavigationMenu.Item>
  <NavigationMenu.Item>
    <NavigationMenu.Trigger>Components</NavigationMenu.Trigger>
    <NavigationMenu.Content class="w-48">
      <NavigationMenu.Link href="/ui/button">Button</NavigationMenu.Link>
      <NavigationMenu.Link href="/ui/dialog">Dialog</NavigationMenu.Link>
    </NavigationMenu.Content>
  </NavigationMenu.Item>
  <NavigationMenu.Item>
    <NavigationMenu.Trigger>Packages</NavigationMenu.Trigger>
    <NavigationMenu.Content class="w-72">
      <NavigationMenu.Link href="/ui">@solid-kit/ui</NavigationMenu.Link>
      <NavigationMenu.Link href="/">@solid-kit/tiptap</NavigationMenu.Link>
    </NavigationMenu.Content>
  </NavigationMenu.Item>
  {/* A Trigger with href outside an Item is a plain link. */}
  <NavigationMenu.Trigger href="https://github.com/bieniucieniu/solid-kit">
    GitHub
  </NavigationMenu.Trigger>
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
