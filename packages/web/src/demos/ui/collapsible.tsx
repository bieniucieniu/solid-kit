import { Collapsible } from "@solid-kit/ui";

export function CollapsibleDemo() {
  return (
    <Collapsible>
      <Collapsible.Trigger>Show notes</Collapsible.Trigger>
      <Collapsible.Content>Notes stay hidden until you open them.</Collapsible.Content>
    </Collapsible>
  );
}
