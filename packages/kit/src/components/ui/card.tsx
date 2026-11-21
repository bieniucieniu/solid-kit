import type { JSX } from "@solidjs/web";
import { omit } from "solid-js";
import { cn } from "#kit/lib/utils";

export function Card(props: JSX.HTMLAttributes<HTMLDivElement> & { size?: "default" | "sm" }) {
  const rest = omit(props, "size");
  return (
    <div
      data-slot="card"
      data-size={props.size ?? "default"}
      {...rest}
      class={cn(
        "group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-lg bg-card py-(--card-spacing) text-xs/relaxed text-card-foreground ring-1 ring-foreground/10 [--card-spacing:--spacing(4)] has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] *:[img:first-child]:rounded-t-lg *:[img:last-child]:rounded-b-lg",
        props.class,
      )}
    />
  );
}

export function CardHeader(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-header"
      {...props}
      class={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-lg px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)",
        props.class,
      )}
    />
  );
}

export function CardTitle(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="card-title" {...props} class={cn("text-sm font-medium", props.class)} />;
}

export function CardDescription(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-description"
      {...props}
      class={cn("text-xs/relaxed text-muted-foreground", props.class)}
    />
  );
}

export function CardAction(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-action"
      {...props}
      class={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", props.class)}
    />
  );
}

export function CardContent(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="card-content" {...props} class={cn("px-(--card-spacing)", props.class)} />;
}

export function CardFooter(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-footer"
      {...props}
      class={cn(
        "flex items-center rounded-b-lg px-(--card-spacing) [.border-t]:pt-(--card-spacing)",
        props.class,
      )}
    />
  );
}
