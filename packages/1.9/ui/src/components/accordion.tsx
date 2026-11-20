import AccordionPrimitive, {
  type ContentProps,
  type DynamicProps,
  type ItemProps,
  type RootProps,
  type TriggerProps,
} from "@corvu/accordion";
import { type JSX, mergeProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

const rootKeys = [
  "multiple",
  "value",
  "onValueChange",
  "initialValue",
  "collapsible",
  "disabled",
  "orientation",
  "loop",
  "textDirection",
  "collapseBehavior",
  "preventInitialContentAnimation",
  "contextId",
] as const;

export type AccordionProps = Omit<RootProps, "children"> &
  Omit<JSX.HTMLAttributes<HTMLDivElement>, "children"> & { children?: JSX.Element };

/** Corvu's root renders no element, so the bordered frame is a wrapping `div`. */
export function Accordion(props: AccordionProps) {
  const [root, , rest] = splitProps(
    mergeProps({ preventInitialContentAnimation: true }, props),
    rootKeys,
    ["class", "ref", "children"],
  );
  return (
    <AccordionPrimitive {...root}>
      <div
        ref={props.ref}
        data-slot="accordion"
        class={cn("flex w-full flex-col overflow-hidden rounded-md border", props.class)}
        {...rest}
      >
        {props.children}
      </div>
    </AccordionPrimitive>
  );
}

export function AccordionItem(props: DynamicProps<"div", ItemProps<"div">>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <AccordionPrimitive.Item
      as="div"
      ref={props.ref}
      data-slot="accordion-item"
      class={cn("not-last:border-b has-data-expanded:bg-muted/50", props.class)}
      {...rest}
    />
  );
}

export function AccordionHeader(props: JSX.HTMLAttributes<HTMLHeadingElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <h3 ref={props.ref} data-slot="accordion-header" class={cn("flex", props.class)} {...rest} />
  );
}

export function AccordionTrigger(props: DynamicProps<"button", TriggerProps>) {
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  return (
    <AccordionPrimitive.Trigger
      ref={props.ref}
      data-slot="accordion-trigger"
      class={cn(
        "group/accordion-trigger relative flex flex-1 items-start justify-between gap-6 border border-transparent p-2 text-left text-xs/relaxed font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50",
        props.class,
      )}
      {...rest}
    >
      {props.children}
      <svg
        viewBox="0 0 24 24"
        data-slot="accordion-trigger-icon"
        class="pointer-events-none ml-auto size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-expanded/accordion-trigger:rotate-180"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </AccordionPrimitive.Trigger>
  );
}

/**
 * tw-animate-css reads the panel height from a primitive's CSS variable; corvu's is mapped onto
 * the one its `accordion-*` keyframes check first.
 */
export function AccordionContent(props: DynamicProps<"div", ContentProps>) {
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  return (
    <AccordionPrimitive.Content
      ref={props.ref}
      data-slot="accordion-content"
      class="overflow-hidden px-2 text-xs/relaxed [--radix-accordion-content-height:var(--corvu-disclosure-content-height)] data-expanded:animate-accordion-down data-collapsed:animate-accordion-up"
      {...rest}
    >
      <div
        class={cn(
          "pt-0 pb-4 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
          props.class,
        )}
      >
        {props.children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export const useAccordionContext = AccordionPrimitive.useContext;
export const useAccordionItemContext = AccordionPrimitive.useItemContext;
