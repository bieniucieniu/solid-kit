import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { cn } from "@/lib/utils";

export function Badge(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <span
      ref={props.ref}
      class={cn(
        "inline-flex h-5 items-center gap-1 rounded-full border border-transparent bg-primary px-2 py-0.5 text-[0.625rem] font-medium text-primary-foreground [&_svg:not([class*='size-'])]:size-2.5",
        props.class,
      )}
      {...rest}
    />
  );
}
