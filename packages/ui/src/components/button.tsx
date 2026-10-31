import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { cn } from "@/lib/utils";

export function Button(props: JSX.ButtonHTMLAttributes<HTMLButtonElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <button
      ref={props.ref}
      class={cn(
        "inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-ring transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50",
        props.class,
      )}
      {...rest}
    />
  );
}
