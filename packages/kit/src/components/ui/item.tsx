import type { JSX } from "@solidjs/web";
import { omit } from "solid-js";
import { cn } from "#kit/lib/utils";

const itemVariantClasses = {
  default: "border-transparent",
  outline: "border-border",
  muted: "border-transparent bg-muted/50",
};

const itemSizeClasses = {
  default: "gap-2.5 px-3 py-2.5",
  sm: "gap-2.5 px-3 py-2.5",
  xs: "gap-2.5 px-2.5 py-2 in-data-[slot=dropdown-menu-content]:p-0",
};

const itemMediaVariantClasses = {
  default: "bg-transparent",
  icon: "[&_svg:not([class*='size-'])]:size-4",
  image:
    "size-8 overflow-hidden rounded-sm group-data-[size=sm]/item:size-8 group-data-[size=xs]/item:size-6 [&_img]:size-full [&_img]:object-cover",
};

export function ItemGroup(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="list"
      data-slot="item-group"
      {...props}
      class={cn(
        "group/item-group flex w-full flex-col gap-4 has-data-[size=sm]:gap-2.5 has-data-[size=xs]:gap-2",
        props.class,
      )}
    />
  );
}

export function ItemSeparator(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="separator"
      data-slot="item-separator"
      {...props}
      class={cn("my-2 h-px shrink-0 bg-border", props.class)}
    />
  );
}

export function Item(
  props: JSX.HTMLAttributes<HTMLDivElement> & {
    variant?: keyof typeof itemVariantClasses;
    size?: keyof typeof itemSizeClasses;
  },
) {
  const rest = omit(props, "variant", "size");
  return (
    <div
      data-slot="item"
      data-variant={props.variant ?? "default"}
      data-size={props.size ?? "default"}
      {...rest}
      class={cn(
        "group/item flex w-full flex-wrap items-center rounded-md border text-xs/relaxed transition-colors duration-100 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [a]:transition-colors [a]:hover:bg-muted",
        itemVariantClasses[props.variant ?? "default"],
        itemSizeClasses[props.size ?? "default"],
        props.class,
      )}
    />
  );
}

export function ItemMedia(
  props: JSX.HTMLAttributes<HTMLDivElement> & { variant?: keyof typeof itemMediaVariantClasses },
) {
  const rest = omit(props, "variant");
  return (
    <div
      data-slot="item-media"
      data-variant={props.variant ?? "default"}
      {...rest}
      class={cn(
        "flex shrink-0 items-center justify-center gap-2 group-has-data-[slot=item-description]/item:translate-y-0.5 group-has-data-[slot=item-description]/item:self-start [&_svg]:pointer-events-none",
        itemMediaVariantClasses[props.variant ?? "default"],
        props.class,
      )}
    />
  );
}

export function ItemContent(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="item-content"
      {...props}
      class={cn(
        "flex flex-1 flex-col gap-1 group-data-[size=xs]/item:gap-0.5 [&+[data-slot=item-content]]:flex-none",
        props.class,
      )}
    />
  );
}

export function ItemTitle(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="item-title"
      {...props}
      class={cn(
        "line-clamp-1 flex w-fit items-center gap-2 text-xs/relaxed leading-snug font-medium underline-offset-4",
        props.class,
      )}
    />
  );
}

export function ItemDescription(props: JSX.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="item-description"
      {...props}
      class={cn(
        "line-clamp-2 text-left text-xs/relaxed font-normal text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        props.class,
      )}
    />
  );
}

export function ItemActions(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div data-slot="item-actions" {...props} class={cn("flex items-center gap-2", props.class)} />
  );
}

export function ItemHeader(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="item-header"
      {...props}
      class={cn("flex basis-full items-center justify-between gap-2", props.class)}
    />
  );
}

export function ItemFooter(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="item-footer"
      {...props}
      class={cn("flex basis-full items-center justify-between gap-2", props.class)}
    />
  );
}
