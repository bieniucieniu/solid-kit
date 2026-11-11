import DisclosurePrimitive, {
  type ContentProps,
  type DynamicProps,
  type RootProps,
  type TriggerProps,
} from "@corvu/disclosure";
import { type JSX, mergeProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

const rootKeys = [
  "expanded",
  "onExpandedChange",
  "initialExpanded",
  "collapseBehavior",
  "preventInitialContentAnimation",
  "onContentPresentChange",
  "disclosureId",
  "contextId",
] as const;

export type CollapsibleProps = Omit<RootProps, "children"> &
  Omit<JSX.HTMLAttributes<HTMLDivElement>, "children"> & { children?: JSX.Element };

/** Corvu's disclosure root renders no element, so this wraps the parts in a `div`. */
export function Collapsible(props: CollapsibleProps) {
  const [root, , rest] = splitProps(
    mergeProps({ preventInitialContentAnimation: true }, props),
    rootKeys,
    ["class", "ref", "children"],
  );
  return (
    <DisclosurePrimitive {...root}>
      <div ref={props.ref} data-slot="collapsible" class={props.class} {...rest}>
        {props.children}
      </div>
    </DisclosurePrimitive>
  );
}

export function CollapsibleTrigger(props: DynamicProps<"button", TriggerProps>) {
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  return (
    <DisclosurePrimitive.Trigger
      ref={props.ref}
      data-slot="collapsible-trigger"
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
    </DisclosurePrimitive.Trigger>
  );
}

/**
 * tw-animate-css reads the panel height from a primitive's CSS variable; corvu's is mapped onto
 * the one its `collapsible-*` keyframes check first.
 */
export function CollapsibleContent(props: DynamicProps<"div", ContentProps>) {
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  return (
    <DisclosurePrimitive.Content
      ref={props.ref}
      data-slot="collapsible-content"
      class="overflow-hidden text-xs/relaxed [--radix-collapsible-content-height:var(--corvu-disclosure-content-height)] data-expanded:animate-collapsible-down data-collapsed:animate-collapsible-up"
      {...rest}
    >
      <div class={cn("pt-2", props.class)}>{props.children}</div>
    </DisclosurePrimitive.Content>
  );
}

export const useCollapsibleContext = DisclosurePrimitive.useContext;
