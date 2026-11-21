import type { JSX } from "@solidjs/web";

import { cn } from "#kit/lib/utils";

export function Empty(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      class={cn(
        "flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-4 rounded-xl border-dashed p-6 text-center text-balance",
        props.class,
      )}
    />
  );
}

export function EmptyHeader(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} class={cn("flex max-w-sm flex-col items-center gap-1", props.class)} />;
}

export function EmptyTitle(props: JSX.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 {...props} class={cn("text-sm font-medium tracking-tight", props.class)} />;
}

export function EmptyDescription(props: JSX.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      {...props}
      class={cn(
        "text-xs/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        props.class,
      )}
    />
  );
}

export function EmptyContent(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      class={cn(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-2 text-xs/relaxed text-balance",
        props.class,
      )}
    />
  );
}
