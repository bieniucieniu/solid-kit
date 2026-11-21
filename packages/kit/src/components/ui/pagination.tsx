import type { JSX } from "@solidjs/web";
import {
  Pagination as PaginationPrimitive,
  PaginationEllipsis as PaginationEllipsisPrimitive,
  PaginationItem as PaginationItemPrimitive,
  PaginationLink as PaginationLinkPrimitive,
  PaginationList as PaginationListPrimitive,
  PaginationNext as PaginationNextPrimitive,
  PaginationPrevious as PaginationPreviousPrimitive,
} from "@ui-sdk/solid/pagination";
import { type ComponentProps, For } from "solid-js";
import { buttonVariants } from "./button";
import { cn, partClass } from "#kit/lib/utils";

export { createPaginationController, paginationRange } from "@ui-sdk/solid/pagination";

const pageClass = buttonVariants({
  variant: "ghost",
  size: "icon",
  class:
    "data-current:border-border data-current:bg-transparent data-current:hover:bg-input/50 data-current:hover:text-foreground dark:data-current:bg-input/30",
});

const stepClass = buttonVariants({ variant: "ghost" });

/** A `nav` around the page list. Pass `pageCount` (or `total` and `pageSize`) and `page`/`onPageChange`. */
export function Pagination(props: ComponentProps<typeof PaginationPrimitive>) {
  return (
    <PaginationPrimitive
      aria-label="Pagination"
      {...props}
      class={partClass("mx-auto flex w-full justify-center data-disabled:opacity-50", props.class)}
    />
  );
}

export function PaginationList(props: ComponentProps<typeof PaginationListPrimitive>) {
  return (
    <PaginationListPrimitive
      {...props}
      class={partClass("flex list-none items-center gap-0.5 p-0", props.class)}
    />
  );
}

export function PaginationItem(props: ComponentProps<typeof PaginationItemPrimitive>) {
  return <PaginationItemPrimitive {...props} class={partClass("flex", props.class)} />;
}

/** A page's link. It shows its page number unless you pass children. */
export function PaginationLink(props: ComponentProps<typeof PaginationLinkPrimitive>) {
  return <PaginationLinkPrimitive {...props} class={partClass(pageClass, props.class)} />;
}

export function PaginationPrevious(props: ComponentProps<typeof PaginationPreviousPrimitive>) {
  return (
    <PaginationPreviousPrimitive
      aria-label="Go to previous page"
      {...props}
      class={partClass(
        cn(stepClass, "pl-2! data-disabled:pointer-events-none data-disabled:opacity-50"),
        props.class,
      )}
    >
      {(props.children as JSX.Element) ?? (
        <>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
            data-icon="inline-start"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span class="hidden sm:block">Previous</span>
        </>
      )}
    </PaginationPreviousPrimitive>
  );
}

export function PaginationNext(props: ComponentProps<typeof PaginationNextPrimitive>) {
  return (
    <PaginationNextPrimitive
      aria-label="Go to next page"
      {...props}
      class={partClass(
        cn(stepClass, "pr-2! data-disabled:pointer-events-none data-disabled:opacity-50"),
        props.class,
      )}
    >
      {(props.children as JSX.Element) ?? (
        <>
          <span class="hidden sm:block">Next</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
            data-icon="inline-end"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </>
      )}
    </PaginationNextPrimitive>
  );
}

export function PaginationEllipsis(props: ComponentProps<typeof PaginationEllipsisPrimitive>) {
  return (
    <PaginationEllipsisPrimitive
      {...props}
      class={partClass(
        "flex size-7 items-center justify-center [&_svg:not([class*='size-'])]:size-3.5",
        props.class,
      )}
    />
  );
}

/**
 * Renders Previous, a link or ellipsis for each entry of the range, and Next. Put it inside
 * `Pagination` in place of a hand-built `PaginationList`.
 */
export function PaginationItems() {
  return (
    <PaginationList>
      {({ items }) => (
        <>
          <PaginationItem>
            <PaginationPrevious />
          </PaginationItem>
          <For each={items}>
            {(item) => (
              <PaginationItem>
                {typeof item === "number" ? <PaginationLink page={item} /> : <PaginationEllipsis />}
              </PaginationItem>
            )}
          </For>
          <PaginationItem>
            <PaginationNext />
          </PaginationItem>
        </>
      )}
    </PaginationList>
  );
}
