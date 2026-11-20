import type { JSX } from "@solidjs/web";
import { omit } from "solid-js";
import { cn } from "#/lib/utils";

type AspectRatioProps = JSX.HTMLAttributes<HTMLDivElement> & {
  ratio?: string;
};

export function AspectRatio(props: AspectRatioProps) {
  const rest = omit(props, "class", "ref", "ratio", "style");
  return (
    <div
      ref={props.ref}
      class={cn("relative w-full", props.class)}
      {...rest}
      style={{
        ...(props.style && typeof props.style === "object" ? props.style : {}),
        "aspect-ratio": props.ratio ?? "1 / 1",
      }}
    />
  );
}
