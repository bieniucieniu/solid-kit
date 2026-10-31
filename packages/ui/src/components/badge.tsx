import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { cn } from "@/lib/utils";

export function Badge(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <span
      ref={props.ref}
      class={cn(
        "inline-flex items-center rounded-lg bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground",
        props.class,
      )}
      {...rest}
    />
  );
}
