import {
  Field as FieldPrimitive,
  FieldDescription as FieldDescriptionPrimitive,
  FieldError as FieldErrorPrimitive,
  FieldLabel as FieldLabelPrimitive,
} from "@ui-sdk/solid/field";
import { Input as InputPrimitive } from "@ui-sdk/solid/input";
import { type ComponentProps, omit } from "solid-js";
import { partClass } from "#kit/lib/utils";

/** Classes for a text control, shared with `Textarea` and `InputGroup`. */
export const inputControlClass =
  "h-7 w-full min-w-0 rounded-md border border-input bg-input/20 px-2 py-0.5 text-sm transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-xs/relaxed file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 md:text-xs/relaxed dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40";

/**
 * A labeled text field: ui-sdk's Field, which ties the label, description and error to the
 * control. Pass `disabled` or `invalid` here; the value goes on `InputControl`.
 */
export function Input(props: ComponentProps<typeof FieldPrimitive>) {
  const rest = omit(props, "class");
  return <FieldPrimitive class={partClass("flex w-full flex-col gap-2", props.class)} {...rest} />;
}

export function InputLabel(props: ComponentProps<typeof FieldLabelPrimitive>) {
  const rest = omit(props, "class");
  return (
    <FieldLabelPrimitive
      class={partClass(
        "flex items-center gap-2 text-xs/relaxed leading-none font-medium select-none data-disabled:pointer-events-none data-disabled:opacity-50",
        props.class,
      )}
      {...rest}
    />
  );
}

/** The native `<input>`. Takes `value`/`defaultValue`/`onValueChange` and every native attribute. */
export function InputControl(props: ComponentProps<typeof InputPrimitive>) {
  const rest = omit(props, "class");
  return <InputPrimitive class={partClass(inputControlClass, props.class)} {...rest} />;
}

export function InputDescription(props: ComponentProps<typeof FieldDescriptionPrimitive>) {
  const rest = omit(props, "class");
  return (
    <FieldDescriptionPrimitive
      class={partClass(
        "text-left text-xs/relaxed leading-normal font-normal text-muted-foreground",
        props.class,
      )}
      {...rest}
    />
  );
}

/** Shows while the field is invalid. */
export function InputErrorMessage(props: ComponentProps<typeof FieldErrorPrimitive>) {
  const rest = omit(props, "class");
  return (
    <FieldErrorPrimitive
      class={partClass("text-xs/relaxed font-normal text-destructive", props.class)}
      {...rest}
    />
  );
}
