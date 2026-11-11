import { DocsPage } from "~/components/preview";
import { LoadingIndicatorDemo } from "~/demos/m3/loading-indicator";

const snippet = `import { LoadingIndicator } from "@solid-kit/m3";

<LoadingIndicator aria-label="Loading" />
<LoadingIndicator contained aria-label="Loading" />`;

export default function LoadingIndicatorPage() {
  return (
    <DocsPage
      title="Loading indicator"
      description="A morphing shape for waits under five seconds."
      snippet={snippet}
      previewClass="bg-surface text-on-surface"
    >
      <LoadingIndicatorDemo />
    </DocsPage>
  );
}
