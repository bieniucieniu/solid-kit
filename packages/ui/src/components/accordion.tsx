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
  return (
    <AccordionPrimitive
      ref={props.ref}
      class={cn("flex w-full flex-col overflow-hidden rounded-md border", props.class)}
      {...rest}
    />
  );
}

export function AccordionItem(props: AccordionItemProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <AccordionPrimitive.Item
      ref={props.ref}
      class={cn("not-last:border-b data-expanded:bg-muted/50", props.class)}
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

export function AccordionContent(props: AccordionContentProps) {
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  return (
    <AccordionPrimitive.Content
      ref={props.ref}
      data-slot="accordion-content"
      class="overflow-hidden px-2 text-xs/relaxed data-expanded:animate-accordion-down data-closed:animate-accordion-up"
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

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Header: AccordionHeader,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});
