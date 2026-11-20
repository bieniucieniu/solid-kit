import type { JSX } from "@solidjs/web";
import { omit } from "solid-js";
import { cn } from "#kit/lib/utils";

export function Label(props: JSX.LabelHTMLAttributes<HTMLLabelElement>) {
  const rest = omit(props, "class", "ref");
  return (
    <label
      ref={props.ref}
      class={cn(
        "flex items-center gap-2 text-xs/relaxed leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        props.class,
      )}
      {...rest}
    />
  );
}
