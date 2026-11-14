import { DocsPage } from "~/components/preview";
import { ProgressDemo } from "~/demos/m3/progress";
import source from "~/demos/m3/progress.tsx?raw";

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
      source={source}
      sourceTitle="demos/m3/progress.tsx"
      previewClass="bg-surface text-on-surface"
    >
      <ProgressDemo />
    </DocsPage>
  );
}
