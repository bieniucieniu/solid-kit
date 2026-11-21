import type { JSX } from "@solidjs/web";
import { omit } from "solid-js";
import { cn } from "#kit/lib/utils";

// ui-sdk has no breadcrumb part. A breadcrumb is a `nav` landmark with a list of links, so
// plain elements carry it.

const listClass =
  "flex flex-wrap items-center gap-1.5 text-xs/relaxed wrap-break-word text-muted-foreground";

export function Breadcrumb(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      aria-label="Breadcrumb"
      data-slot="breadcrumb"
      {...props}
      class={cn(
        "[&>ol]:flex [&>ol]:flex-wrap [&>ol]:items-center [&>ol]:gap-1.5 [&>ol]:text-xs/relaxed [&>ol]:wrap-break-word [&>ol]:text-muted-foreground [&>ol>li]:inline-flex [&>ol>li]:items-center [&>ol>li]:gap-1.5",
        props.class,
      )}
    />
  );
}

export function BreadcrumbList(props: JSX.OlHTMLAttributes<HTMLOListElement>) {
  return <ol data-slot="breadcrumb-list" {...props} class={cn(listClass, props.class)} />;
}

export function BreadcrumbItem(props: JSX.LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li
      data-slot="breadcrumb-item"
      {...props}
      class={cn("inline-flex items-center gap-1", props.class)}
    />
  );
}

export function BreadcrumbLink(
  props: JSX.AnchorHTMLAttributes<HTMLAnchorElement> & {
    /** The page the user is on. Renders `aria-current="page"` and drops the link target. */
    current?: boolean;
  },
) {
  const rest = omit(props, "current");
  return (
    <a
      data-slot="breadcrumb-link"
      data-current={props.current ? "" : undefined}
      aria-current={props.current ? "page" : undefined}
      {...rest}
      href={props.current ? undefined : props.href}
      class={cn(
        "rounded-sm transition-colors outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/30 data-current:font-normal data-current:text-foreground data-current:hover:text-foreground",
        props.class,
      )}
    />
  );
}

/** The current page, as text. */
export function BreadcrumbPage(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      {...props}
      class={cn("font-normal text-foreground", props.class)}
    />
  );
}

export function BreadcrumbSeparator(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      {...props}
      class={cn("[&>svg]:size-3.5", props.class)}
    >
      {props.children ?? "/"}
    </span>
  );
}

export function BreadcrumbEllipsis(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      {...props}
      class={cn("flex size-4 items-center justify-center [&>svg]:size-3.5", props.class)}
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
