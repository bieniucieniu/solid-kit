import { DocsPage } from "~/components/preview";
import { NavigationMenuDemo } from "~/demos/ui/navigation-menu";

const snippet = `import { NavigationMenu } from "@solid-kit/ui";

<NavigationMenu>
  <NavigationMenu.List>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger>Products</NavigationMenu.Trigger>
      <NavigationMenu.Content>
        <p>Editor, docs, and themes.</p>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Link href="/ui">Overview</NavigationMenu.Link>
    </NavigationMenu.Item>
  </NavigationMenu.List>
</NavigationMenu>`;

export default function NavigationMenuPage() {
  return (
    <DocsPage
      title="Navigation menu"
      description="A nav bar with a dropdown panel."
      snippet={snippet}
    >
      <NavigationMenuDemo />
    </DocsPage>
  );
}
