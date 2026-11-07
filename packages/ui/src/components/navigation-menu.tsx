import { Popover as PopoverPrimitive } from "@kobalte/core/popover";
import { type ComponentProps, type JSX, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

function NavigationMenuRoot(props: JSX.HTMLAttributes<HTMLElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <nav
      ref={props.ref}
      data-slot="navigation-menu"
      class={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        props.class,
      )}
      {...rest}
    />
  );
}

export function NavigationMenuList(props: JSX.HTMLAttributes<HTMLUListElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ul
      ref={props.ref}
      class={cn("group flex flex-1 list-none items-center justify-center gap-0", props.class)}
      {...rest}
    />
  );
}

export function NavigationMenuItem(props: JSX.LiHTMLAttributes<HTMLLIElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <PopoverPrimitive gutter={6} placement="bottom-start">
      <li ref={props.ref} class={cn("relative", props.class)} {...rest} />
    </PopoverPrimitive>
  );
}

export const navigationMenuTriggerStyle =
  "group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-lg px-2.5 py-1.5 text-xs/relaxed font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-expanded:bg-muted/50 data-expanded:hover:bg-muted data-expanded:focus:bg-muted";

export function NavigationMenuTrigger(props: ComponentProps<typeof PopoverPrimitive.Trigger>) {
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  return (
    <PopoverPrimitive.Trigger
      ref={props.ref}
      data-slot="navigation-menu-trigger"
      class={cn(navigationMenuTriggerStyle, props.class)}
      {...rest}
    >
      {props.children}{" "}
      <svg
        viewBox="0 0 24 24"
        class="relative top-px ml-1 size-3 transition duration-300 group-data-expanded/navigation-menu-trigger:rotate-180"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </PopoverPrimitive.Trigger>
  );
}

export function NavigationMenuContent(props: ComponentProps<typeof PopoverPrimitive.Content>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={props.ref}
        class={cn(
          "z-50 w-max min-w-32 origin-(--kb-popover-content-transform-origin) overflow-hidden rounded-xl bg-popover p-1.5 text-xs/relaxed text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] outline-none data-expanded:animate-in data-expanded:fade-in-0 data-expanded:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
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
      data-slot="navigation-menu-link"
      class={cn(
        "flex items-center gap-1.5 rounded-lg p-2 text-xs/relaxed transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:outline-1 data-[active=true]:bg-muted/50 data-[active=true]:hover:bg-muted data-[active=true]:focus:bg-muted [&_svg:not([class*='size-'])]:size-4",
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
