import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { cn } from "@/lib/utils";

function CardRoot(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      class={cn(
        "rounded-lg border border-border bg-background text-foreground",
        props.class,
      )}
      {...rest}
    />
  );
}

export function CardHeader(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      class={cn("flex flex-col gap-1.5 p-6", props.class)}
      {...rest}
    />
  );
}

export function CardTitle(props: JSX.HTMLAttributes<HTMLHeadingElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <h3
      ref={props.ref}
      class={cn("text-lg font-medium text-foreground", props.class)}
      {...rest}
    />
  );
}

export function CardDescription(props: JSX.HTMLAttributes<HTMLParagraphElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <p
      ref={props.ref}
      class={cn("text-sm text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function CardContent(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return <div ref={props.ref} class={cn("p-6 pt-0", props.class)} {...rest} />;
}

export function CardFooter(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      class={cn("flex items-center gap-2 p-6 pt-0", props.class)}
      {...rest}
    />
  );
}

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
});
