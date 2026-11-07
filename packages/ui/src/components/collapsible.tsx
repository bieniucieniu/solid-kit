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
      data-slot="collapsible"
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
        "group/collapsible-trigger inline-flex items-center gap-2 rounded-md text-xs/relaxed font-medium outline-none focus-visible:ring-2 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50",
        props.class,
      )}
      {...rest}
    >
      {props.children}
      <svg
        viewBox="0 0 24 24"
        class="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-expanded/collapsible-trigger:rotate-180"
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
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  return (
    <CollapsiblePrimitive.Content
      ref={props.ref}
      data-slot="collapsible-content"
      class="overflow-hidden text-xs/relaxed data-expanded:animate-collapsible-down data-closed:animate-collapsible-up"
      {...rest}
    >
      <div class={cn("pt-2", props.class)}>{props.children}</div>
    </CollapsiblePrimitive.Content>
  );
}

export const Collapsible = Object.assign(CollapsibleRoot, {
  Trigger: CollapsibleTrigger,
  Content: CollapsibleContent,
});
