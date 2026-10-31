import { ScrollArea } from "@solid-kit/ui";

export function ScrollAreaDemo() {
  return (
    <ScrollArea class="h-24 max-w-xs rounded-lg border border-border p-3 text-sm text-foreground">
      <p>Line one of a long note.</p>
      <p>Line two of a long note.</p>
      <p>Line three of a long note.</p>
      <p>Line four of a long note.</p>
      <p>Line five of a long note.</p>
      <p>Line six of a long note.</p>
    </ScrollArea>
  );
}
