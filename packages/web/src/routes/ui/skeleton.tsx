import { DocsPage } from "~/components/preview";
import { SkeletonDemo } from "~/demos/ui/skeleton";

const snippet = `import { Skeleton } from "@solid-kit/ui";

<Skeleton visible class="h-8 w-48">
  Loaded text
</Skeleton>`;

export default function SkeletonPage() {
  return (
    <DocsPage title="Skeleton" description="A placeholder while content loads." snippet={snippet}>
      <SkeletonDemo />
    </DocsPage>
  );
}
