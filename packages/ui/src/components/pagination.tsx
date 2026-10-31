import { Pagination as PaginationPrimitive } from "@kobalte/core/pagination";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type PaginationRootProps = ComponentProps<typeof PaginationPrimitive>;
type PaginationPreviousProps = ComponentProps<typeof PaginationPrimitive.Previous>;
type PaginationNextProps = ComponentProps<typeof PaginationPrimitive.Next>;
type PaginationItemProps = ComponentProps<typeof PaginationPrimitive.Item>;
type PaginationEllipsisProps = ComponentProps<typeof PaginationPrimitive.Ellipsis>;

const pageClass =
  "inline-flex h-9 min-w-9 items-center justify-center rounded-lg px-2 text-sm text-foreground ring-ring hover:bg-muted focus-visible:ring-2 focus-visible:outline-none data-disabled:opacity-50 data-current:bg-primary data-current:text-primary-foreground data-current:hover:bg-primary";

function PaginationRoot(props: PaginationRootProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <PaginationPrimitive
      ref={props.ref}
      class={cn(
        "data-disabled:opacity-50 [&>ul]:flex [&>ul]:list-none [&>ul]:items-center [&>ul]:gap-1 [&>ul]:p-0 [&_li]:flex",
        props.class,
      )}
      {...rest}
    />
  );
}

export function PaginationPrevious(props: PaginationPreviousProps) {
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  return (
    <PaginationPrimitive.Previous ref={props.ref} class={cn(pageClass, props.class)} {...rest}>
      {props.children ?? (
        <svg
          viewBox="0 0 24 24"
          class="size-4"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      )}
    </PaginationPrimitive.Previous>
  );
}

export function PaginationNext(props: PaginationNextProps) {
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  return (
    <PaginationPrimitive.Next ref={props.ref} class={cn(pageClass, props.class)} {...rest}>
      {props.children ?? (
        <svg
          viewBox="0 0 24 24"
          class="size-4"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
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
        "flex h-9 min-w-9 items-center justify-center text-sm text-muted-foreground",
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
