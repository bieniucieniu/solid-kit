import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@solid-kit/kit/ui";

export function CollapsibleDemo() {
  return (
    <Collapsible>
      <CollapsibleTrigger>Show notes</CollapsibleTrigger>
      <CollapsibleContent>Notes stay hidden until you open them.</CollapsibleContent>
    </Collapsible>
  );
}
