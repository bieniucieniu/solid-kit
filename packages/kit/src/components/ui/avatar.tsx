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
  const rest = omit(props, "size");
  return (
    <AvatarPrimitive
      data-size={props.size ?? "default"}
      {...rest}
      class={partClass(
        "group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten",
        props.class,
      )}
    />
  );
}

export function AvatarImage(props: ComponentProps<typeof AvatarImagePrimitive>) {
  return (
    <AvatarImagePrimitive
      {...props}
      class={partClass(
        "aspect-square size-full rounded-full object-cover not-data-[loading-status=loaded]:hidden",
        props.class,
      )}
    />
  );
}

/** The 1.9 name for the image. */
export const AvatarImg = AvatarImage;

export function AvatarFallback(props: ComponentProps<typeof AvatarFallbackPrimitive>) {
  return (
    <AvatarFallbackPrimitive
      {...props}
      class={partClass(
        "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",
        props.class,
      )}
    />
  );
}

export function AvatarBadge(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="avatar-badge"
      {...props}
      class={cn(
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground bg-blend-color ring-2 ring-background select-none",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
        props.class,
      )}
    />
  );
}

export function AvatarGroup(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="avatar-group"
      {...props}
      class={cn(
        "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
        props.class,
      )}
    />
  );
}

export function AvatarGroupCount(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="avatar-group-count"
      {...props}
      class={cn(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs/relaxed text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
        props.class,
      )}
    />
  );
}
