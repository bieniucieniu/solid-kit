import { Skeleton as SkeletonPrimitive } from "@kobalte/core/skeleton";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type SkeletonProps = ComponentProps<typeof SkeletonPrimitive>;

export function Skeleton(props: SkeletonProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SkeletonPrimitive
      ref={props.ref}
      class={cn(
        "block rounded-md bg-muted data-visible:text-transparent data-visible:data-animate:animate-pulse",
        props.class,
      )}
      {...rest}
    />
  );
}
