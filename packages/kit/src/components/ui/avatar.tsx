import type { JSX } from "@solidjs/web";
import {
  Avatar as AvatarPrimitive,
  AvatarFallback as AvatarFallbackPrimitive,
  AvatarImage as AvatarImagePrimitive,
} from "@ui-sdk/solid/avatar";
import { type ComponentProps, omit } from "solid-js";
import { cn, partClass } from "#kit/lib/utils";

type AvatarProps = ComponentProps<typeof AvatarPrimitive> & {
  size?: "default" | "sm" | "lg";
};

export function Avatar(props: AvatarProps) {
  const rest = omit(props, "class", "size");
  return (
    <AvatarPrimitive
      data-size={props.size ?? "default"}
      class={partClass(
        "group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten",
        props.class,
      )}
      {...rest}
    />
  );
}

export function AvatarImage(props: ComponentProps<typeof AvatarImagePrimitive>) {
  const rest = omit(props, "class");
  return (
    <AvatarImagePrimitive
      class={partClass(
        "aspect-square size-full rounded-full object-cover not-data-[loading-status=loaded]:hidden",
        props.class,
      )}
      {...rest}
    />
  );
}

/** The 1.9 name for the image. */
export const AvatarImg = AvatarImage;

export function AvatarFallback(props: ComponentProps<typeof AvatarFallbackPrimitive>) {
  const rest = omit(props, "class");
  return (
    <AvatarFallbackPrimitive
      class={partClass(
        "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",
        props.class,
      )}
      {...rest}
    />
  );
}

export function AvatarBadge(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  const rest = omit(props, "class");
  return (
    <span
      data-slot="avatar-badge"
      class={cn(
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground bg-blend-color ring-2 ring-background select-none",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
        props.class,
      )}
      {...rest}
    />
  );
}

export function AvatarGroup(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const rest = omit(props, "class");
  return (
    <div
      data-slot="avatar-group"
      class={cn(
        "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
        props.class,
      )}
      {...rest}
    />
  );
}

export function AvatarGroupCount(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const rest = omit(props, "class");
  return (
    <div
      data-slot="avatar-group-count"
      class={cn(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs/relaxed text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
        props.class,
      )}
      {...rest}
    />
  );
}
