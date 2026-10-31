import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { cn } from "@/lib/utils";

export function Kbd(props: JSX.HTMLAttributes<HTMLElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <kbd
      ref={props.ref}
      class={cn(
        "inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-xs bg-muted px-1 font-sans text-[0.625rem] font-medium text-muted-foreground",
        props.class,
      )}
      {...rest}
    />
  );
}
