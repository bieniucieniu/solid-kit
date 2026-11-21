import type { JSX } from "@solidjs/web";
import { omit } from "solid-js";
import { cn } from "#kit/lib/utils";

const fieldOrientationClasses = {
  vertical: "flex-col *:w-full [&>.sr-only]:w-auto",
  horizontal:
    "flex-row items-center has-[>[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
  responsive:
    "flex-col *:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:*:data-[slot=field-label]:flex-auto [&>.sr-only]:w-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
};

export function Field(
  props: JSX.HTMLAttributes<HTMLDivElement> & {
    orientation?: keyof typeof fieldOrientationClasses;
  },
) {
  const rest = omit(props, "orientation");
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={props.orientation ?? "vertical"}
      {...rest}
      class={cn(
        "group/field flex w-full gap-2 data-[invalid=true]:text-destructive",
        fieldOrientationClasses[props.orientation ?? "vertical"],
        props.class,
      )}
    />
  );
}

export function FieldSet(props: JSX.FieldsetHTMLAttributes<HTMLFieldSetElement>) {
  return (
    <fieldset
      data-slot="field-set"
      {...props}
      class={cn(
        "flex flex-col gap-4 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        props.class,
      )}
    />
  );
}

export function FieldLegend(
  props: JSX.HTMLAttributes<HTMLLegendElement> & { variant?: "legend" | "label" },
) {
  const rest = omit(props, "variant");
  return (
    <legend
      data-slot="field-legend"
      data-variant={props.variant ?? "legend"}
      {...rest}
      class={cn(
        "mb-2 font-medium data-[variant=label]:text-xs/relaxed data-[variant=legend]:text-sm",
        props.class,
      )}
    />
  );
}

export function FieldGroup(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="field-group"
      {...props}
      class={cn(
        "group/field-group @container/field-group flex w-full flex-col gap-4 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4",
        props.class,
      )}
    />
  );
}

export function FieldContent(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="field-content"
      {...props}
      class={cn("group/field-content flex flex-1 flex-col gap-0.5 leading-snug", props.class)}
    />
  );
}

export function FieldLabel(props: JSX.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      data-slot="field-label"
      {...props}
      class={cn(
        "group/field-label peer/field-label flex w-fit items-center gap-2 text-xs/relaxed leading-snug font-medium select-none group-data-[disabled=true]/field:opacity-50 has-data-checked:bg-primary/5 has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border has-[>[data-slot=field]]:has-[:focus-visible]:border-ring has-[>[data-slot=field]]:has-[:focus-visible]:ring-2 has-[>[data-slot=field]]:has-[:focus-visible]:ring-ring/30 *:data-[slot=field]:p-2 dark:has-data-checked:bg-primary/10",
        props.class,
      )}
    />
  );
}

export function FieldTitle(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="field-label"
      {...props}
      class={cn(
        "flex w-fit items-center gap-2 text-xs/relaxed font-medium group-data-[disabled=true]/field:opacity-50",
        props.class,
      )}
    />
  );
}

export function FieldDescription(props: JSX.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="field-description"
      {...props}
      class={cn(
        "text-left text-xs/relaxed leading-normal font-normal text-muted-foreground group-data-[orientation=horizontal]/field:text-balance [[data-variant=legend]+&]:-mt-1.5",
        "last:mt-0 nth-last-2:-mt-1",
        "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        props.class,
      )}
    />
  );
}

export function FieldError(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="alert"
      data-slot="field-error"
      {...props}
      class={cn("text-xs/relaxed font-normal text-destructive", props.class)}
    />
  );
}
