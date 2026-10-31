import { DocsPage } from "~/components/preview";
import { ProgressDemo } from "~/demos/ui/progress";

const snippet = `import { Progress } from "@solid-kit/ui";

<Progress value={64}>
  <Progress.Label>Upload</Progress.Label>
  <Progress.ValueLabel />
  <Progress.Track>
    <Progress.Fill />
  </Progress.Track>
</Progress>`;

export default function ProgressPage() {
  return (
    <DocsPage title="Progress" description="A bar that shows completion." snippet={snippet}>
      <ProgressDemo />
    </DocsPage>
  );
}
