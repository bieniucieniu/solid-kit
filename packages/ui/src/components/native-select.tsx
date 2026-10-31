import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { cn } from "@/lib/utils";

export function NativeSelect(props: JSX.SelectHTMLAttributes<HTMLSelectElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <select
      ref={props.ref}
      class={cn(
        "h-9 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground ring-ring focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50",
        props.class,
      )}
      {...rest}
    />
  );
}
