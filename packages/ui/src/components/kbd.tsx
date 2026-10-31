import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { cn } from "@/lib/utils";

export function Kbd(props: JSX.HTMLAttributes<HTMLElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <kbd
      ref={props.ref}
      class={cn(
        "inline-flex h-5 min-w-5 items-center justify-center rounded-lg border border-border bg-muted px-1 font-mono text-xs text-muted-foreground",
        props.class,
      )}
      {...rest}
    />
  );
}
