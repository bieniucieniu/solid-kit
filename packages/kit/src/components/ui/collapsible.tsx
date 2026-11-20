import type { JSX } from "@solidjs/web";
import {
  Collapsible as CollapsiblePrimitive,
  CollapsiblePanel as CollapsiblePanelPrimitive,
  CollapsibleTrigger as CollapsibleTriggerPrimitive,
} from "@ui-sdk/solid/collapsible";
import { type ComponentProps, omit } from "solid-js";
import { cn, partClass } from "#/lib/utils";

export function Collapsible(props: ComponentProps<typeof CollapsiblePrimitive>) {
  return <CollapsiblePrimitive {...props} />;
}

export function CollapsibleTrigger(props: ComponentProps<typeof CollapsibleTriggerPrimitive>) {
  const rest = omit(props, "class", "children");
  return (
    <CollapsibleTriggerPrimitive
      class={partClass(
        "group/collapsible-trigger inline-flex items-center gap-2 rounded-md text-xs/relaxed font-medium outline-none focus-visible:ring-2 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50",
        props.class,
      )}
      {...rest}
    >
      {props.children as JSX.Element}
      <svg
        viewBox="0 0 24 24"
        class="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-open/collapsible-trigger:rotate-180"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </CollapsibleTriggerPrimitive>
  );
}

/** Animates its height from `--collapsible-panel-height`, which ui-sdk measures. */
export function CollapsibleContent(props: ComponentProps<typeof CollapsiblePanelPrimitive>) {
  const rest = omit(props, "class", "children");
  return (
    <CollapsiblePanelPrimitive
      class="h-(--collapsible-panel-height) overflow-hidden text-xs/relaxed transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0"
      {...rest}
    >
      <div class={cn("pt-2", props.class as string)}>{props.children as JSX.Element}</div>
    </CollapsiblePanelPrimitive>
  );
}

/** Alias for the ui-sdk part name. */
export const CollapsiblePanel = CollapsibleContent;
