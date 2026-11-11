import { DocsPage } from "~/components/preview";
import { BadgeDemo } from "~/demos/m3/badge";

const snippet = `import { Badge, BadgeAnchor } from "@solid-kit/m3";

<BadgeAnchor>
  <MailIcon />
  <Badge>12</Badge>
</BadgeAnchor>
<Badge size="small" />`;

export default function BadgePage() {
  return (
    <DocsPage
      title="Badge"
      description="Counts and status dots on icons and navigation items."
      snippet={snippet}
      previewClass="bg-surface text-on-surface"
    >
      <BadgeDemo />
    </DocsPage>
  );
}
