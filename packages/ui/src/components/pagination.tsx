import { Pagination as PaginationPrimitive } from "@kobalte/core/pagination";
import { type ComponentProps, splitProps } from "solid-js";
import { buttonVariants } from "./button";
import { cn } from "@/lib/utils";

type PaginationRootProps = ComponentProps<typeof PaginationPrimitive>;
type PaginationPreviousProps = ComponentProps<typeof PaginationPrimitive.Previous>;
type PaginationNextProps = ComponentProps<typeof PaginationPrimitive.Next>;
type PaginationItemProps = ComponentProps<typeof PaginationPrimitive.Item>;
type PaginationEllipsisProps = ComponentProps<typeof PaginationPrimitive.Ellipsis>;

const pageClass = buttonVariants({
  variant: "ghost",
  size: "icon",
  class:
    "data-current:border-border data-current:bg-transparent data-current:hover:bg-input/50 data-current:hover:text-foreground dark:data-current:bg-input/30",
});
const stepClass = buttonVariants({ variant: "ghost" });

function PaginationRoot(props: PaginationRootProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <PaginationPrimitive
      ref={props.ref}
      class={cn(
        "mx-auto flex w-full justify-center data-disabled:opacity-50 [&>ul]:flex [&>ul]:list-none [&>ul]:items-center [&>ul]:gap-0.5 [&>ul]:p-0 [&_li]:flex",
        props.class,
      )}
      {...rest}
    />
  );
}

export function PaginationPrevious(props: PaginationPreviousProps) {
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  return (
    <PaginationPrimitive.Previous
      ref={props.ref}
      aria-label="Go to previous page"
      class={cn(stepClass, "pl-2!", props.class)}
      {...rest}
    >
      {props.children ?? (
        <>
          <svg
            viewBox="0 0 24 24"
            data-icon="inline-start"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span class="hidden sm:block">Previous</span>
        </>
      )}
    </PaginationPrimitive.Previous>
  );
}

export function PaginationNext(props: PaginationNextProps) {
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  return (
    <PaginationPrimitive.Next
      ref={props.ref}
      aria-label="Go to next page"
      class={cn(stepClass, "pr-2!", props.class)}
      {...rest}
    >
      {props.children ?? (
        <>
          <span class="hidden sm:block">Next</span>
          <svg
            viewBox="0 0 24 24"
            data-icon="inline-end"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </>
      )}
    </PaginationPrimitive.Next>
  );
}

export function PaginationItem(props: PaginationItemProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return <PaginationPrimitive.Item ref={props.ref} class={cn(pageClass, props.class)} {...rest} />;
}

export function PaginationEllipsis(props: PaginationEllipsisProps) {
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  return (
    <PaginationPrimitive.Ellipsis
      ref={props.ref}
      class={cn(
        "flex size-7 items-center justify-center [&_svg:not([class*='size-'])]:size-3.5",
        props.class,
      )}
      {...rest}
    >
      {props.children ?? "…"}
    </PaginationPrimitive.Ellipsis>
  );
}

export const PaginationItems = PaginationPrimitive.Items;

export const Pagination = Object.assign(PaginationRoot, {
  Previous: PaginationPrevious,
  Items: PaginationItems,
  Item: PaginationItem,
  Ellipsis: PaginationEllipsis,
  Next: PaginationNext,
});
