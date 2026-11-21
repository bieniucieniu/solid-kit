import type { JSX } from "@solidjs/web";
import {
  Checkbox as CheckboxPrimitive,
  CheckboxGroup as CheckboxGroupPrimitive,
  CheckboxIndicator as CheckboxIndicatorPrimitive,
} from "@ui-sdk/solid/checkbox";
import { type ComponentProps } from "solid-js";
import { cn, partClass } from "#kit/lib/utils";

/**
 * The box. It renders its own check and dash icons unless you pass children. Wrap it and its
 * text in `CheckboxLabel` (a `<label>`), or name it with `aria-label`.
 */
export function Checkbox(props: ComponentProps<typeof CheckboxPrimitive>) {
  return (
    <CheckboxPrimitive
      {...props}
      class={partClass(
        "group/checkbox relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input transition-shadow outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-indeterminate:text-primary-foreground dark:data-indeterminate:bg-primary",
        props.class,
      )}
    >
      {(props.children as JSX.Element) ?? <CheckboxIndicator />}
    </CheckboxPrimitive>
  );
}

/** Shows while checked or mixed: a check, or a dash while mixed. */
export function CheckboxIndicator(props: ComponentProps<typeof CheckboxIndicatorPrimitive>) {
  return (
    <CheckboxIndicatorPrimitive
      {...props}
      class={partClass(
        "grid place-content-center text-current transition-none [&>svg]:size-3.5",
        props.class,
      )}
    >
      {(props.children as JSX.Element) ?? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path class="group-data-indeterminate/checkbox:hidden" d="M20 6 9 17l-5-5" />
          <path class="hidden group-data-indeterminate/checkbox:block" d="M5 12h14" />
        </svg>
      )}
    </CheckboxIndicatorPrimitive>
  );
}

/** A `<label>` that lays out a checkbox and its text. */
export function CheckboxLabel(props: JSX.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      data-slot="checkbox-label"
      {...props}
      class={cn(
        "inline-flex items-center gap-2 text-xs/relaxed leading-none font-medium text-foreground select-none has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50",
        props.class,
      )}
    />
  );
}

export function CheckboxGroup(props: ComponentProps<typeof CheckboxGroupPrimitive>) {
  return <CheckboxGroupPrimitive {...props} class={partClass("grid gap-3", props.class)} />;
}
