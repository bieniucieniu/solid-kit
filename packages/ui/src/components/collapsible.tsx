import { Collapsible as CollapsiblePrimitive } from "@kobalte/core/collapsible";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type CollapsibleRootProps = ComponentProps<typeof CollapsiblePrimitive>;
type CollapsibleTriggerProps = ComponentProps<typeof CollapsiblePrimitive.Trigger>;
type CollapsibleContentProps = ComponentProps<typeof CollapsiblePrimitive.Content>;

function CollapsibleRoot(props: CollapsibleRootProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <CollapsiblePrimitive
      ref={props.ref}
      class={cn("data-disabled:opacity-50", props.class)}
      {...rest}
    />
  );
}

export function CollapsibleTrigger(props: CollapsibleTriggerProps) {
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  return (
    <CollapsiblePrimitive.Trigger
      ref={props.ref}
      class={cn(
        "group inline-flex items-center gap-2 text-xs/relaxed font-medium focus-visible:ring-2 focus-visible:outline-none data-disabled:opacity-50",
        props.class,
      )}
      {...rest}
    >
      {props.children}
      <svg
        viewBox="0 0 24 24"
        class="size-4 shrink-0 group-data-expanded:rotate-180"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </CollapsiblePrimitive.Trigger>
  );
}

export function CollapsibleContent(props: CollapsibleContentProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <CollapsiblePrimitive.Content
      ref={props.ref}
      class={cn("overflow-hidden pt-2 text-xs/relaxed", props.class)}
      {...rest}
    />
  );
}

export const Collapsible = Object.assign(CollapsibleRoot, {
  Trigger: CollapsibleTrigger,
  Content: CollapsibleContent,
});
