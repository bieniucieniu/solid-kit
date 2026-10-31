import { Image as ImagePrimitive } from "@kobalte/core/image";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type AvatarRootProps = ComponentProps<typeof ImagePrimitive>;
type AvatarImgProps = ComponentProps<typeof ImagePrimitive.Img>;
type AvatarFallbackProps = ComponentProps<typeof ImagePrimitive.Fallback>;

function AvatarRoot(props: AvatarRootProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ImagePrimitive
      ref={props.ref}
      class={cn(
        "relative inline-flex size-10 shrink-0 overflow-hidden rounded-lg bg-muted",
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
      class={cn("size-full object-cover", props.class)}
      {...rest}
    />
  );
}

export function AvatarFallback(props: AvatarFallbackProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ImagePrimitive.Fallback
      ref={props.ref}
      class={cn(
        "flex size-full items-center justify-center text-sm text-muted-foreground",
        props.class,
      )}
      {...rest}
    />
  );
}

export const Avatar = Object.assign(AvatarRoot, {
  Img: AvatarImg,
  Fallback: AvatarFallback,
});
