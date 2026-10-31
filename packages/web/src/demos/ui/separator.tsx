import { Separator } from "@solid-kit/ui";

export function SeparatorDemo() {
  return (
    <div class="flex max-w-xs flex-col gap-3 text-sm text-foreground">
      <span>Above</span>
      <Separator />
      <span>Below</span>
    </div>
  );
}
