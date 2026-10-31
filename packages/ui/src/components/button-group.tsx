import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { cn } from "@/lib/utils";

export function ButtonGroup(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      role="group"
      class={cn("flex w-fit items-center gap-1", props.class)}
      {...rest}
    />
  );
}
