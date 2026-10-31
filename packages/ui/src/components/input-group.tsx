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
        "flex h-7 w-full items-center rounded-md border border-input bg-input/20 px-2 text-xs/relaxed transition-colors focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/30 dark:bg-input/30",
        props.class,
      )}
      {...rest}
    />
  );
}
