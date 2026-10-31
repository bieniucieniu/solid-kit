import { Alert as AlertPrimitive } from "@kobalte/core/alert";
import { type ComponentProps, type JSX, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type AlertRootProps = ComponentProps<typeof AlertPrimitive>;

function AlertRoot(props: AlertRootProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <AlertPrimitive
      ref={props.ref}
      class={cn(
        "flex w-full flex-col gap-1 rounded-lg border border-border bg-background p-4 text-foreground",
        props.class,
      )}
      {...rest}
    />
  );
}

export function AlertTitle(props: JSX.HTMLAttributes<HTMLHeadingElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <h2 ref={props.ref} class={cn("text-sm font-medium text-foreground", props.class)} {...rest} />
  );
}

export function AlertDescription(props: JSX.HTMLAttributes<HTMLParagraphElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return <p ref={props.ref} class={cn("text-sm text-muted-foreground", props.class)} {...rest} />;
}

export function AlertAction(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return <div ref={props.ref} class={cn("flex items-center gap-2", props.class)} {...rest} />;
}

export const Alert = Object.assign(AlertRoot, {
  Title: AlertTitle,
  Description: AlertDescription,
  Action: AlertAction,
});
