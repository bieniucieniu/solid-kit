import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { cn } from "@/lib/utils";

function ItemRoot(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      class={cn(
        "flex items-center gap-3 rounded-lg border border-border bg-background p-3 text-foreground",
        props.class,
      )}
      {...rest}
    />
  );
}

export function ItemMedia(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      class={cn("flex shrink-0 items-center justify-center", props.class)}
      {...rest}
    />
  );
}

export function ItemContent(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      class={cn("flex min-w-0 flex-1 flex-col gap-1", props.class)}
      {...rest}
    />
  );
}

export function ItemTitle(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      class={cn("text-sm font-medium text-foreground", props.class)}
      {...rest}
    />
  );
}

export function ItemDescription(props: JSX.HTMLAttributes<HTMLParagraphElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <p
      ref={props.ref}
      class={cn("text-sm text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function ItemActions(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      class={cn("flex shrink-0 items-center gap-2", props.class)}
      {...rest}
    />
  );
}

export const Item = Object.assign(ItemRoot, {
  Media: ItemMedia,
  Content: ItemContent,
  Title: ItemTitle,
  Description: ItemDescription,
  Actions: ItemActions,
});
