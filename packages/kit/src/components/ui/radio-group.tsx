import type { JSX } from "@solidjs/web";
import {
  Radio as RadioPrimitive,
  RadioGroup as RadioGroupPrimitive,
  RadioIndicator as RadioIndicatorPrimitive,
} from "@ui-sdk/solid/radio";
import { type ComponentProps, omit } from "solid-js";
import { cn, partClass } from "#/lib/utils";

export function RadioGroup(props: ComponentProps<typeof RadioGroupPrimitive>) {
  const rest = omit(props, "class");
  return (
    <RadioGroupPrimitive
      class={partClass(
        "grid w-full gap-3 text-xs text-foreground data-disabled:opacity-50",
        props.class,
      )}
      {...rest}
    />
  );
}

/** One radio. Give it a `value`, and wrap it with its text in `RadioGroupItemLabel`. */
export function RadioGroupItem(props: ComponentProps<typeof RadioPrimitive>) {
  const rest = omit(props, "class", "children");
  return (
    <RadioPrimitive
      class={partClass(
        "relative flex aspect-square size-4 shrink-0 items-center justify-center rounded-full border border-input outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-disabled:pointer-events-none data-disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
        props.class,
      )}
      {...rest}
    >
      {(props.children as JSX.Element) ?? <RadioGroupItemIndicator />}
    </RadioPrimitive>
  );
}

export function RadioGroupItemIndicator(props: ComponentProps<typeof RadioIndicatorPrimitive>) {
  const rest = omit(props, "class");
  return (
    <RadioIndicatorPrimitive
      class={partClass(
        "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground",
        props.class,
      )}
      {...rest}
    />
  );
}

/** A `<label>` that lays out a radio and its text. */
export function RadioGroupItemLabel(props: JSX.LabelHTMLAttributes<HTMLLabelElement>) {
  const rest = omit(props, "class");
  return (
    <label
      data-slot="radio-group-item-label"
      class={cn(
        "inline-flex items-center gap-2 text-xs/relaxed font-medium text-foreground has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50",
        props.class,
      )}
      {...rest}
    />
  );
}
