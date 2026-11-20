import type { JSX } from "@solidjs/web";
import { omit } from "solid-js";
import { cn } from "#kit/lib/utils";

// ui-sdk has no breadcrumb part. A breadcrumb is a `nav` landmark with a list of links, so
// plain elements carry it.

const listClass =
  "flex flex-wrap items-center gap-1.5 text-xs/relaxed wrap-break-word text-muted-foreground";

export function Breadcrumb(props: JSX.HTMLAttributes<HTMLElement>) {
  const rest = omit(props, "class");
  return (
    <nav
      aria-label="Breadcrumb"
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
  const rest = omit(props, "class");
  return <ol data-slot="breadcrumb-list" class={cn(listClass, props.class)} {...rest} />;
}

export function BreadcrumbItem(props: JSX.LiHTMLAttributes<HTMLLIElement>) {
  const rest = omit(props, "class");
  return (
    <li
      data-slot="breadcrumb-item"
      class={cn("inline-flex items-center gap-1", props.class)}
      {...rest}
    />
  );
}

export function BreadcrumbLink(
  props: JSX.AnchorHTMLAttributes<HTMLAnchorElement> & {
    /** The page the user is on. Renders `aria-current="page"` and drops the link target. */
    current?: boolean;
  },
) {
  const rest = omit(props, "class", "current", "href");
  return (
    <a
      data-slot="breadcrumb-link"
      data-current={props.current ? "" : undefined}
      aria-current={props.current ? "page" : undefined}
      href={props.current ? undefined : props.href}
      class={cn(
        "rounded-sm transition-colors outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/30 data-current:font-normal data-current:text-foreground data-current:hover:text-foreground",
        props.class,
      )}
      {...rest}
    />
  );
}

/** The current page, as text. */
export function BreadcrumbPage(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  const rest = omit(props, "class");
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      class={cn("font-normal text-foreground", props.class)}
      {...rest}
    />
  );
}

export function BreadcrumbSeparator(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  const rest = omit(props, "class", "children");
  return (
    <span
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      class={cn("[&>svg]:size-3.5", props.class)}
      {...rest}
    >
      {props.children ?? "/"}
    </span>
  );
}

export function BreadcrumbEllipsis(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  const rest = omit(props, "class");
  return (
    <span
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
