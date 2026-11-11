import { DocsPage } from "~/components/preview";
import { ProgressDemo } from "~/demos/m3/progress";

const snippet = `import { CircularProgress, Progress, ProgressFill, ProgressTrack } from "@solid-kit/m3";

<Progress value={60}>
  <ProgressTrack>
    <ProgressFill wavy />
  </ProgressTrack>
</Progress>
<CircularProgress indeterminate aria-label="Loading" />`;

export default function ProgressPage() {
  return (
    <DocsPage
      title="Progress"
      description="Linear (flat or wavy) and circular progress indicators."
      snippet={snippet}
      previewClass="bg-surface text-on-surface"
    >
      <ProgressDemo />
    </DocsPage>
  );
}
