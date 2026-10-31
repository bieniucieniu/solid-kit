import { Accordion as AccordionPrimitive } from "@kobalte/core/accordion";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type AccordionRootProps = ComponentProps<typeof AccordionPrimitive>;
type AccordionItemProps = ComponentProps<typeof AccordionPrimitive.Item>;
type AccordionHeaderProps = ComponentProps<typeof AccordionPrimitive.Header>;
type AccordionTriggerProps = ComponentProps<typeof AccordionPrimitive.Trigger>;
type AccordionContentProps = ComponentProps<typeof AccordionPrimitive.Content>;

function AccordionRoot(props: AccordionRootProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return <AccordionPrimitive ref={props.ref} class={cn("w-full", props.class)} {...rest} />;
}

export function AccordionItem(props: AccordionItemProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <AccordionPrimitive.Item
      ref={props.ref}
      class={cn("border-b border-border data-disabled:opacity-50", props.class)}
      {...rest}
    />
  );
}

export function AccordionHeader(props: AccordionHeaderProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return <AccordionPrimitive.Header ref={props.ref} class={cn("flex", props.class)} {...rest} />;
}

export function AccordionTrigger(props: AccordionTriggerProps) {
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  return (
    <AccordionPrimitive.Trigger
      ref={props.ref}
      class={cn(
        "group flex w-full items-center justify-between gap-2 py-3 text-left text-sm font-medium text-foreground ring-ring focus-visible:ring-2 focus-visible:outline-none data-disabled:opacity-50",
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
    </AccordionPrimitive.Trigger>
  );
}

export function AccordionContent(props: AccordionContentProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <AccordionPrimitive.Content
      ref={props.ref}
      class={cn("overflow-hidden pb-4 text-sm text-foreground", props.class)}
      {...rest}
    />
  );
}

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Header: AccordionHeader,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});
