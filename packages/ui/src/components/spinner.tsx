import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { cn } from "@/lib/utils";

export function Spinner(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <span
      ref={props.ref}
      role="status"
      aria-label="Loading"
      class={cn(
        "inline-block size-4 shrink-0 animate-spin rounded-full border-2 border-border border-t-foreground",
        props.class,
      )}
      {...rest}
    />
  );
}
