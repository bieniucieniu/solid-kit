import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { cn } from "@/lib/utils";

function EmptyRoot(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      class={cn(
        "flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed p-6 text-center text-xs/relaxed",
        props.class,
      )}
      {...rest}
    />
  );
}

export function EmptyHeader(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div ref={props.ref} class={cn("flex flex-col items-center gap-1", props.class)} {...rest} />
  );
}

export function EmptyTitle(props: JSX.HTMLAttributes<HTMLHeadingElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <h3 ref={props.ref} class={cn("text-sm font-medium tracking-tight", props.class)} {...rest} />
  );
}

export function EmptyDescription(props: JSX.HTMLAttributes<HTMLParagraphElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <p ref={props.ref} class={cn("text-xs/relaxed text-muted-foreground", props.class)} {...rest} />
  );
}

export function EmptyContent(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      class={cn("flex flex-col items-center gap-2 text-xs/relaxed", props.class)}
      {...rest}
    />
  );
}

export const Empty = Object.assign(EmptyRoot, {
  Header: EmptyHeader,
  Title: EmptyTitle,
  Description: EmptyDescription,
  Content: EmptyContent,
});
