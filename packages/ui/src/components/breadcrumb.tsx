import { Breadcrumbs as BreadcrumbsPrimitive } from "@kobalte/core/breadcrumbs";
import { type ComponentProps, type JSX, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type BreadcrumbRootProps = ComponentProps<typeof BreadcrumbsPrimitive>;
type BreadcrumbLinkProps = ComponentProps<typeof BreadcrumbsPrimitive.Link>;
type BreadcrumbSeparatorProps = ComponentProps<typeof BreadcrumbsPrimitive.Separator>;

const listClass =
  "flex flex-wrap items-center gap-1.5 text-xs/relaxed wrap-break-word text-muted-foreground";

function BreadcrumbRoot(props: BreadcrumbRootProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <BreadcrumbsPrimitive
      ref={props.ref}
      data-slot="breadcrumb"
      class={cn(
        "[&>ol]:flex [&>ol]:flex-wrap [&>ol]:items-center [&>ol]:gap-1.5 [&>ol]:text-xs/relaxed [&>ol]:wrap-break-word [&>ol]:text-muted-foreground [&>ol>li]:inline-flex [&>ol>li]:items-center [&>ol>li]:gap-1.5",
        props.class,
      )}
      {...rest}
    />
  );
}

export function BreadcrumbList(props: JSX.OlHTMLAttributes<HTMLOListElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ol ref={props.ref} data-slot="breadcrumb-list" class={cn(listClass, props.class)} {...rest} />
  );
}

export function BreadcrumbItem(props: JSX.LiHTMLAttributes<HTMLLIElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <li
      ref={props.ref}
      data-slot="breadcrumb-item"
      class={cn("inline-flex items-center gap-1", props.class)}
      {...rest}
    />
  );
}

export function BreadcrumbLink(props: BreadcrumbLinkProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <BreadcrumbsPrimitive.Link
      ref={props.ref}
      data-slot="breadcrumb-link"
      class={cn(
        "rounded-sm transition-colors outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/30 data-current:font-normal data-current:text-foreground data-current:hover:text-foreground",
        props.class,
      )}
      {...rest}
    />
  );
}

export function BreadcrumbSeparator(props: BreadcrumbSeparatorProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <BreadcrumbsPrimitive.Separator
      ref={props.ref}
      data-slot="breadcrumb-separator"
      class={cn("[&>svg]:size-3.5", props.class)}
      {...rest}
    />
  );
}

export function BreadcrumbEllipsis(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <span
      ref={props.ref}
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      class={cn("flex size-4 items-center justify-center [&>svg]:size-3.5", props.class)}
      {...rest}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
        <circle cx="5" cy="12" r="1" />
      </svg>
      <span class="sr-only">More</span>
    </span>
  );
}

export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  List: BreadcrumbList,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  Separator: BreadcrumbSeparator,
  Ellipsis: BreadcrumbEllipsis,
});
