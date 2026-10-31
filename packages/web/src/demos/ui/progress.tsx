import { Progress } from "@solid-kit/ui";

export function ProgressDemo() {
  return (
    <Progress value={64} class="max-w-xs">
      <Progress.Label>Upload</Progress.Label>
      <Progress.ValueLabel />
      <Progress.Track>
        <Progress.Fill />
      </Progress.Track>
    </Progress>
  );
}
