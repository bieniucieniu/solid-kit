import { Popover as PopoverPrimitive } from "@kobalte/core/popover";
import { type ComponentProps, type JSX, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

function NavigationMenuRoot(props: JSX.HTMLAttributes<HTMLElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return <nav ref={props.ref} class={cn("relative flex items-center", props.class)} {...rest} />;
}

export function NavigationMenuList(props: JSX.HTMLAttributes<HTMLUListElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ul
      ref={props.ref}
      class={cn("m-0 flex list-none items-center gap-0 p-0", props.class)}
      {...rest}
    />
  );
}

export function NavigationMenuItem(props: JSX.LiHTMLAttributes<HTMLLIElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <PopoverPrimitive gutter={8} placement="bottom-start">
      <li ref={props.ref} class={cn("relative", props.class)} {...rest} />
    </PopoverPrimitive>
  );
}

export function NavigationMenuTrigger(props: ComponentProps<typeof PopoverPrimitive.Trigger>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <PopoverPrimitive.Trigger
      ref={props.ref}
      class={cn(
        "inline-flex items-center justify-center rounded-lg px-2.5 py-1.5 text-xs/relaxed font-medium transition-all hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:outline-none data-expanded:bg-muted/50",
        props.class,
      )}
      {...rest}
    />
  );
}

export function NavigationMenuContent(props: ComponentProps<typeof PopoverPrimitive.Content>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={props.ref}
        class={cn(
          "z-50 w-max min-w-32 rounded-xl bg-popover p-1.5 text-xs/relaxed text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-none",
          props.class,
        )}
        {...rest}
      />
    </PopoverPrimitive.Portal>
  );
}

export function NavigationMenuLink(props: JSX.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <a
      ref={props.ref}
      class={cn(
        "inline-flex items-center gap-1.5 rounded-lg p-2 text-xs/relaxed transition-all hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:outline-none",
        props.class,
      )}
      {...rest}
    />
  );
}

export const NavigationMenu = Object.assign(NavigationMenuRoot, {
  List: NavigationMenuList,
  Item: NavigationMenuItem,
  Trigger: NavigationMenuTrigger,
  Content: NavigationMenuContent,
  Link: NavigationMenuLink,
});
