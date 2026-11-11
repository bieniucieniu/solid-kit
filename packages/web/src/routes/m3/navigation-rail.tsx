import { DocsPage } from "~/components/preview";
import { NavigationRailDemo } from "~/demos/m3/navigation-rail";

const snippet = `import { NavigationRail, NavigationRailHeader, NavigationRailIcon, NavigationRailItem, NavigationRailLabel } from "@solid-kit/m3";

<NavigationRail expanded={expanded()}>
  <NavigationRailHeader>
    <IconButton aria-label="Menu" onClick={toggle}><MenuIcon /></IconButton>
    <Fab aria-label="Compose"><EditIcon /></Fab>
  </NavigationRailHeader>
  <NavigationRailItem active>
    <NavigationRailIcon><HomeIcon /></NavigationRailIcon>
    <NavigationRailLabel>Home</NavigationRailLabel>
  </NavigationRailItem>
</NavigationRail>`;

export default function NavigationRailPage() {
  return (
    <DocsPage
      title="Navigation rail"
      description="Collapsed and expanded side navigation for medium and larger windows."
      snippet={snippet}
      previewClass="bg-surface text-on-surface"
    >
      <NavigationRailDemo />
    </DocsPage>
  );
}
