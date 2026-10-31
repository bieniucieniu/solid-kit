import { Label } from "@solid-kit/ui";

export function LabelDemo() {
  return (
    <div class="flex max-w-xs flex-col gap-2">
      <Label for="name">Name</Label>
      <input
        id="name"
        class="rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
      />
    </div>
  );
}
