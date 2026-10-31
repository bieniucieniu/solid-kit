import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { cn } from "@/lib/utils";

export function InputGroup(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      role="group"
      class={cn(
        "flex w-full items-center gap-2 rounded-lg border border-border bg-background px-3 text-sm text-foreground ring-ring focus-within:outline-none focus-within:ring-2",
        props.class,
      )}
      {...rest}
    />
  );
}
