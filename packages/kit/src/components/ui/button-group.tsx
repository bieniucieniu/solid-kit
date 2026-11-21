import type { JSX } from "@solidjs/web";
import { omit } from "solid-js";
import { cn } from "#kit/lib/utils";

const buttonGroupOrientationClasses = {
  horizontal:
    "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none [&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-md!",
  vertical:
    "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none [&>[data-slot]:not(:has(~[data-slot]))]:rounded-b-md!",
};

export function ButtonGroup(
  props: JSX.HTMLAttributes<HTMLDivElement> & { orientation?: "horizontal" | "vertical" },
) {
  const rest = omit(props, "orientation");
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={props.orientation ?? "horizontal"}
      {...rest}
      class={cn(
        "group/button-group flex w-fit items-stretch *:focus-visible:relative *:focus-visible:z-10 has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",
        buttonGroupOrientationClasses[props.orientation ?? "horizontal"],
        props.class,
      )}
    />
  );
}

export function ButtonGroupText(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="button-group-text"
      {...props}
      class={cn(
        "flex items-center gap-2 rounded-md border bg-muted px-2.5 text-xs/relaxed font-medium [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        props.class,
      )}
    />
  );
}

export function ButtonGroupSeparator(
  props: JSX.HTMLAttributes<HTMLDivElement> & { orientation?: "horizontal" | "vertical" },
) {
  const rest = omit(props, "orientation");
  return (
    <div
      role="separator"
      data-slot="button-group-separator"
      data-orientation={props.orientation ?? "vertical"}
      {...rest}
      class={cn(
        "relative shrink-0 self-stretch bg-input data-[orientation=horizontal]:mx-px data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-auto data-[orientation=vertical]:my-px data-[orientation=vertical]:h-auto data-[orientation=vertical]:w-px",
        props.class,
      )}
    />
  );
}
