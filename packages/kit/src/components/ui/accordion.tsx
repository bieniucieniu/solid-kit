import type { JSX } from "@solidjs/web";
import {
  Accordion as AccordionPrimitive,
  AccordionHeader as AccordionHeaderPrimitive,
  AccordionItem as AccordionItemPrimitive,
  AccordionPanel as AccordionPanelPrimitive,
  AccordionTrigger as AccordionTriggerPrimitive,
} from "@ui-sdk/solid/accordion";
import { type ComponentProps } from "solid-js";
import { cn, partClass } from "#kit/lib/utils";

/** The value is always an array of open item values. Pass `multiple` to open several at once. */
export function Accordion(props: ComponentProps<typeof AccordionPrimitive>) {
  return (
    <AccordionPrimitive
      {...props}
      class={partClass("flex w-full flex-col overflow-hidden rounded-md border", props.class)}
    />
  );
}

export function AccordionItem(props: ComponentProps<typeof AccordionItemPrimitive>) {
  return (
    <AccordionItemPrimitive
      {...props}
      class={partClass("not-last:border-b data-open:bg-muted/50", props.class)}
    />
  );
}

export function AccordionHeader(props: ComponentProps<typeof AccordionHeaderPrimitive>) {
  return <AccordionHeaderPrimitive {...props} class={partClass("flex", props.class)} />;
}

export function AccordionTrigger(props: ComponentProps<typeof AccordionTriggerPrimitive>) {
  return (
    <AccordionTriggerPrimitive
      {...props}
      class={partClass(
        "group/accordion-trigger relative flex flex-1 items-start justify-between gap-6 border border-transparent p-2 text-left text-xs/relaxed font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50",
        props.class,
      )}
    >
      {props.children as JSX.Element}
      <svg
        viewBox="0 0 24 24"
        data-slot="accordion-trigger-icon"
        class="pointer-events-none ml-auto size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-open/accordion-trigger:rotate-180"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </AccordionTriggerPrimitive>
  );
}

/** Animates its height from `--accordion-panel-height`, which ui-sdk measures. */
export function AccordionContent(props: ComponentProps<typeof AccordionPanelPrimitive>) {
  return (
    <AccordionPanelPrimitive
      {...props}
      class="h-(--accordion-panel-height) overflow-hidden px-2 text-xs/relaxed transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0"
    >
      <div
        class={cn(
          "pt-0 pb-4 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
          props.class as string,
        )}
      >
        {props.children as JSX.Element}
      </div>
    </AccordionPanelPrimitive>
  );
}

/** Alias for the ui-sdk part name. */
export const AccordionPanel = AccordionContent;
