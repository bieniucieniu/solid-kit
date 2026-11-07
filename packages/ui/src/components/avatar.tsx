import { Image as ImagePrimitive } from "@kobalte/core/image";
import { type ComponentProps, type JSX, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type AvatarRootProps = ComponentProps<typeof ImagePrimitive> & {
  size?: "default" | "sm" | "lg";
};
type AvatarImgProps = ComponentProps<typeof ImagePrimitive.Img>;
type AvatarFallbackProps = ComponentProps<typeof ImagePrimitive.Fallback>;

function AvatarRoot(props: AvatarRootProps) {
  const [, rest] = splitProps(props, ["class", "ref", "size"]);
  return (
    <ImagePrimitive
      ref={props.ref}
      data-slot="avatar"
      data-size={props.size ?? "default"}
      class={cn(
        "group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten",
        props.class,
      )}
      {...rest}
    />
  );
}

export function AvatarImg(props: AvatarImgProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ImagePrimitive.Img
      ref={props.ref}
      data-slot="avatar-image"
      class={cn("aspect-square size-full rounded-full object-cover", props.class)}
      {...rest}
    />
  );
}

export function AvatarFallback(props: AvatarFallbackProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ImagePrimitive.Fallback
      ref={props.ref}
      data-slot="avatar-fallback"
      class={cn(
        "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",
        props.class,
      )}
      {...rest}
    />
  );
}

export function AvatarBadge(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <span
      ref={props.ref}
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
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
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
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      data-slot="avatar-group-count"
      class={cn(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs/relaxed text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
        props.class,
      )}
      {...rest}
    />
  );
}

export const Avatar = Object.assign(AvatarRoot, {
  Img: AvatarImg,
  Fallback: AvatarFallback,
  Badge: AvatarBadge,
  Group: AvatarGroup,
  GroupCount: AvatarGroupCount,
});
