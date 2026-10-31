import { Breadcrumbs as BreadcrumbsPrimitive } from "@kobalte/core/breadcrumbs";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type BreadcrumbRootProps = ComponentProps<typeof BreadcrumbsPrimitive>;
type BreadcrumbLinkProps = ComponentProps<typeof BreadcrumbsPrimitive.Link>;
type BreadcrumbSeparatorProps = ComponentProps<typeof BreadcrumbsPrimitive.Separator>;

function BreadcrumbRoot(props: BreadcrumbRootProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <BreadcrumbsPrimitive
      ref={props.ref}
      class={cn(
        "gap-1.5 text-xs/relaxed text-muted-foreground [&_ol]:flex [&_ol]:items-center [&_ol]:gap-1.5 [&_ol]:list-none [&_ol]:p-0",
        props.class,
      )}
      {...rest}
    />
  );
}

export function BreadcrumbLink(props: BreadcrumbLinkProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <BreadcrumbsPrimitive.Link
      ref={props.ref}
      class={cn(
        "text-muted-foreground ring-ring hover:text-foreground focus-visible:ring-2 focus-visible:outline-none data-current:font-medium data-current:text-foreground",
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
      class={cn("text-muted-foreground [&>svg]:size-3.5", props.class)}
      {...rest}
    />
  );
}

export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  Link: BreadcrumbLink,
  Separator: BreadcrumbSeparator,
});
