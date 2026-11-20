import type { JSX } from "@solidjs/web";
import { omit } from "solid-js";
import { cn } from "#/lib/utils";

type SkeletonProps = JSX.HTMLAttributes<HTMLDivElement> & {
  /** Show the placeholder. When false, the children render as they are. Defaults to true. */
  visible?: boolean;
  /** Pulse while visible. Defaults to true. */
  animate?: boolean;
};

/** A placeholder block. ui-sdk has no skeleton part, so this is a plain element. */
export function Skeleton(props: SkeletonProps) {
  const rest = omit(props, "class", "visible", "animate");
  return (
    <div
      data-slot="skeleton"
      data-visible={(props.visible ?? true) ? "" : undefined}
      data-animate={(props.animate ?? true) ? "" : undefined}
      aria-busy={(props.visible ?? true) ? "true" : undefined}
      class={cn(
        "block rounded-md data-visible:bg-muted data-visible:text-transparent data-visible:data-animate:animate-pulse data-visible:[&>*]:invisible",
        props.class,
      )}
      {...rest}
    />
  );
}
