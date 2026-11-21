import type { JSX } from "@solidjs/web";
import {
  Radio as RadioPrimitive,
  RadioGroup as RadioGroupPrimitive,
  RadioIndicator as RadioIndicatorPrimitive,
} from "@ui-sdk/solid/radio";
import { type ComponentProps } from "solid-js";
import { cn, partClass } from "#kit/lib/utils";

/** `value` / `onValueChange` hold the checked radio's value. Name it with `aria-label` or a label. */
export function RadioGroup(props: ComponentProps<typeof RadioGroupPrimitive>) {
  return (
    <RadioGroupPrimitive
      {...props}
      class={partClass("flex flex-col gap-1 text-on-surface", props.class)}
    />
  );
}

export function RadioGroupLabel(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="radio-group-label"
      {...props}
      class={cn("typescale-title-small text-on-surface", props.class)}
    />
  );
}

export function RadioGroupDescription(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="radio-group-description"
      {...props}
      class={cn("typescale-body-small text-on-surface-variant", props.class)}
    />
  );
}

export function RadioGroupErrorMessage(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="radio-group-error-message"
      {...props}
      class={cn("typescale-body-small text-error", props.class)}
    />
  );
}

/** A `<label>` that lays out one radio control and its text. */
export function RadioGroupItem(props: JSX.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      data-slot="radio-group-item"
      {...props}
      class={cn(
        "group/radio flex items-center gap-4 has-data-disabled:cursor-not-allowed",
        props.class,
      )}
    />
  );
}

/**
 * The 20px ring: ui-sdk's Radio. Give it a `value`. Its state layer is a 40px circle. It renders
 * its own indicator unless you pass children.
 */
export function RadioGroupItemControl(props: ComponentProps<typeof RadioPrimitive>) {
  return (
    <RadioPrimitive
      {...props}
      class={partClass(
        "relative m-2.5 flex size-5 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-on-surface-variant state-layer outline-none motion-fast [--state-layer-color:var(--md-sys-color-on-surface)] [--state-layer-inset:-12px] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-secondary focus-visible:before:opacity-10 data-checked:border-primary data-checked:[--state-layer-color:var(--md-sys-color-primary)] aria-invalid:border-error data-disabled:pointer-events-none data-disabled:border-on-surface/38",
        props.class,
      )}
    >
      {(props.children as JSX.Element) ?? <RadioGroupItemIndicator />}
    </RadioPrimitive>
  );
}

export function RadioGroupItemIndicator(props: ComponentProps<typeof RadioIndicatorPrimitive>) {
  return (
    <RadioIndicatorPrimitive
      {...props}
      class={partClass(
        "size-2.5 rounded-full bg-primary transition-[scale] duration-150 data-starting-style:scale-0 group-has-aria-invalid/radio:bg-error group-has-data-disabled/radio:bg-on-surface/38",
        props.class,
      )}
    />
  );
}

export function RadioGroupItemLabel(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="radio-group-item-label"
      {...props}
      class={cn(
        "typescale-body-large text-on-surface select-none group-has-data-disabled/radio:text-on-surface/38",
        props.class,
      )}
    />
  );
}

export function RadioGroupItemDescription(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="radio-group-item-description"
      {...props}
      class={cn("typescale-body-small text-on-surface-variant", props.class)}
    />
  );
}
