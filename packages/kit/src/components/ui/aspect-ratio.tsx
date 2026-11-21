import type { JSX } from "@solidjs/web";
import { omit } from "solid-js";
import { cn } from "#kit/lib/utils";

type AspectRatioProps = JSX.HTMLAttributes<HTMLDivElement> & {
  ratio?: string;
};

export function AspectRatio(props: AspectRatioProps) {
  const rest = omit(props, "ratio");
  return (
    <div
      {...rest}
      class={cn("relative w-full", props.class)}
      style={{
        ...(props.style && typeof props.style === "object" ? props.style : {}),
        "aspect-ratio": props.ratio ?? "1 / 1",
      }}
    />
  );
}
