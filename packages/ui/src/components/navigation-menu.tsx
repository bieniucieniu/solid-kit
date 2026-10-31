import { Popover as PopoverPrimitive } from "@kobalte/core/popover";
import { type ComponentProps, type JSX, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

function NavigationMenuRoot(props: JSX.HTMLAttributes<HTMLElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <nav
      ref={props.ref}
      class={cn("relative flex items-center", props.class)}
      {...rest}
    />
  );
}

export function NavigationMenuList(props: JSX.HTMLAttributes<HTMLUListElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ul
      ref={props.ref}
      class={cn("m-0 flex list-none items-center gap-1 p-0", props.class)}
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

export function NavigationMenuTrigger(
  props: ComponentProps<typeof PopoverPrimitive.Trigger>,
) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <PopoverPrimitive.Trigger
      ref={props.ref}
      class={cn(
        "inline-flex items-center justify-center rounded-lg bg-background px-3 py-2 text-sm font-medium text-foreground ring-ring hover:bg-muted focus-visible:outline-none focus-visible:ring-2 data-expanded:bg-muted",
        props.class,
      )}
      {...rest}
    />
  );
}

export function NavigationMenuContent(
  props: ComponentProps<typeof PopoverPrimitive.Content>,
) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={props.ref}
        class={cn(
          "z-50 w-max min-w-48 rounded-lg border border-border bg-background p-3 text-sm text-foreground shadow-lg outline-none",
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
        "inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium text-foreground ring-ring hover:bg-muted focus-visible:outline-none focus-visible:ring-2",
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
