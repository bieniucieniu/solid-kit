import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { cn } from "@/lib/utils";

const badgeSizeClasses = {
  /** A 6px dot. */
  small: "size-1.5",
  /** A 16px pill for a count or short label. */
  large: "h-4 min-w-4 px-1 typescale-label-small",
};

export type BadgeSize = keyof typeof badgeSizeClasses;

export function badgeVariants(options?: { size?: BadgeSize; class?: string }) {
  return cn(
    "inline-flex shrink-0 items-center justify-center rounded-full bg-error text-on-error tabular-nums",
    badgeSizeClasses[options?.size ?? "large"],
    options?.class,
  );
}

export interface BadgeProps extends JSX.HTMLAttributes<HTMLSpanElement> {
  size?: BadgeSize;
}

/**
 * Error-colored count or dot. On an icon, wrap both in BadgeAnchor so the badge sits on the
 * icon's top-end corner.
 */
export function Badge(props: BadgeProps) {
  const [, rest] = splitProps(props, ["class", "ref", "size"]);
  return (
    <span
      ref={props.ref}
      data-slot="badge"
      data-size={props.size ?? "large"}
      class={badgeVariants({ size: props.size, class: props.class })}
      {...rest}
    />
  );
}

/** Positions a Badge over the top-end corner of the icon next to it. */
export function BadgeAnchor(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <span
      ref={props.ref}
      data-slot="badge-anchor"
      class={cn(
        "relative inline-flex [&>[data-slot=badge]]:absolute [&>[data-slot=badge][data-size=large]]:start-[calc(100%-12px)] [&>[data-slot=badge][data-size=large]]:-top-0.5 [&>[data-slot=badge][data-size=small]]:start-[calc(100%-6px)] [&>[data-slot=badge][data-size=small]]:top-0",
        props.class,
      )}
      {...rest}
    />
  );
}
