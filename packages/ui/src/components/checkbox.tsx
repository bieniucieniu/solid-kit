import { Checkbox as CheckboxPrimitive, useCheckboxContext } from "@kobalte/core/checkbox";
import { type ComponentProps, Show, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type CheckboxRootProps = ComponentProps<typeof CheckboxPrimitive>;
type CheckboxControlProps = ComponentProps<typeof CheckboxPrimitive.Control>;
type CheckboxIndicatorProps = ComponentProps<typeof CheckboxPrimitive.Indicator>;
type CheckboxLabelProps = ComponentProps<typeof CheckboxPrimitive.Label>;
type CheckboxDescriptionProps = ComponentProps<typeof CheckboxPrimitive.Description>;
type CheckboxErrorMessageProps = ComponentProps<typeof CheckboxPrimitive.ErrorMessage>;

function CheckboxRoot(props: CheckboxRootProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <CheckboxPrimitive
      ref={props.ref}
      class={cn(
        "group inline-flex items-center gap-2 text-sm text-foreground data-disabled:opacity-50",
        props.class,
      )}
      {...rest}
    />
  );
}

export function CheckboxControl(props: CheckboxControlProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <CheckboxPrimitive.Control
      ref={props.ref}
      class={cn(
        "flex size-4 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-primary-foreground ring-ring group-focus-within:ring-2 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary",
        props.class,
      )}
      {...rest}
    />
  );
}

export function CheckboxIndicator(props: CheckboxIndicatorProps) {
  const state = useCheckboxContext();
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  return (
    <CheckboxPrimitive.Indicator
      ref={props.ref}
      class={cn("flex items-center justify-center", props.class)}
      {...rest}
    >
      {props.children ?? (
        <svg
          viewBox="0 0 24 24"
          class="size-3"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          aria-hidden="true"
        >
          <Show when={state.indeterminate()} fallback={<path d="M20 6 9 17l-5-5" />}>
            <path d="M5 12h14" />
          </Show>
        </svg>
      )}
    </CheckboxPrimitive.Indicator>
  );
}

export function CheckboxLabel(props: CheckboxLabelProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <CheckboxPrimitive.Label
      ref={props.ref}
      class={cn("text-sm text-foreground", props.class)}
      {...rest}
    />
  );
}

export function CheckboxDescription(props: CheckboxDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <CheckboxPrimitive.Description
      ref={props.ref}
      class={cn("text-sm text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function CheckboxErrorMessage(props: CheckboxErrorMessageProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <CheckboxPrimitive.ErrorMessage
      ref={props.ref}
      class={cn("text-sm text-foreground", props.class)}
      {...rest}
    />
  );
}

export const CheckboxInput = CheckboxPrimitive.Input;

export const Checkbox = Object.assign(CheckboxRoot, {
  Input: CheckboxInput,
  Control: CheckboxControl,
  Indicator: CheckboxIndicator,
  Label: CheckboxLabel,
  Description: CheckboxDescription,
  ErrorMessage: CheckboxErrorMessage,
});
