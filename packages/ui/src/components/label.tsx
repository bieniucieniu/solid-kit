import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { cn } from "@/lib/utils";

export function Label(props: JSX.LabelHTMLAttributes<HTMLLabelElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <label
      ref={props.ref}
      class={cn("text-sm font-medium text-foreground", props.class)}
      {...rest}
    />
  );
}
