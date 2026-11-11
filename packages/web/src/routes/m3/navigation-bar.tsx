import { DocsPage } from "~/components/preview";
import { NavigationBarDemo } from "~/demos/m3/navigation-bar";

const snippet = `import { NavigationBar, NavigationBarIcon, NavigationBarItem, NavigationBarLabel } from "@solid-kit/m3";

// layout: "stacked" | "inline"
<NavigationBar>
  <NavigationBarItem as={A} href="/" active={isHome()}>
    <NavigationBarIcon><HomeIcon /></NavigationBarIcon>
    <NavigationBarLabel>Home</NavigationBarLabel>
  </NavigationBarItem>
</NavigationBar>`;

export default function NavigationBarPage() {
  return (
    <DocsPage
      title="Navigation bar"
      description="Bottom navigation for compact and medium windows."
      snippet={snippet}
      previewClass="bg-surface text-on-surface"
    >
      <NavigationBarDemo />
    </DocsPage>
  );
}
