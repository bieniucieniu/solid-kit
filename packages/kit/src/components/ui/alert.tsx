import type { JSX } from "@solidjs/web";
import { omit } from "solid-js";
import { cn } from "#kit/lib/utils";

const alertVariantClasses = {
  default: "bg-card text-card-foreground",
  destructive:
    "bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current",
};

type AlertProps = JSX.HTMLAttributes<HTMLDivElement> & {
  variant?: keyof typeof alertVariantClasses;
};

export function Alert(props: AlertProps) {
  const rest = omit(props, "variant");
  return (
    <div
      data-slot="alert"
      role="alert"
      {...rest}
      class={cn(
        "group/alert relative grid w-full gap-0.5 rounded-lg border px-2 py-1.5 text-left text-xs/relaxed has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-1.5 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-3.5",
        alertVariantClasses[props.variant ?? "default"],
        props.class,
      )}
    />
  );
}

export function AlertTitle(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="alert-title"
      {...props}
      class={cn(
        "font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
        props.class,
      )}
    />
  );
}

export function AlertDescription(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="alert-description"
      {...props}
      class={cn(
        "text-xs/relaxed text-balance text-muted-foreground md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
        props.class,
      )}
    />
  );
}

export function AlertAction(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div data-slot="alert-action" {...props} class={cn("absolute top-1.5 right-2", props.class)} />
  );
}
