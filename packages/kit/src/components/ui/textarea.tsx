import {
  Field as FieldPrimitive,
  FieldDescription as FieldDescriptionPrimitive,
  FieldError as FieldErrorPrimitive,
  FieldLabel as FieldLabelPrimitive,
} from "@ui-sdk/solid/field";
import { Textarea as TextareaPrimitive } from "@ui-sdk/solid/textarea";
import { type ComponentProps, omit } from "solid-js";
import { partClass } from "#/lib/utils";

const fieldClass =
  "flex field-sizing-content min-h-16 w-full resize-none rounded-md border border-input bg-input/20 px-2 py-2 text-sm transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 md:text-xs/relaxed dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40";

/** A labeled multi-line field on ui-sdk's Field. The value goes on `TextareaControl`. */
export function Textarea(props: ComponentProps<typeof FieldPrimitive>) {
  const rest = omit(props, "class");
  return <FieldPrimitive class={partClass("flex w-full flex-col gap-2", props.class)} {...rest} />;
}

export function TextareaLabel(props: ComponentProps<typeof FieldLabelPrimitive>) {
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

/** The native `<textarea>`. `autoResize` grows it with its content. */
export function TextareaControl(props: ComponentProps<typeof TextareaPrimitive>) {
  const rest = omit(props, "class");
  return <TextareaPrimitive class={partClass(fieldClass, props.class)} {...rest} />;
}

export function TextareaDescription(props: ComponentProps<typeof FieldDescriptionPrimitive>) {
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

export function TextareaErrorMessage(props: ComponentProps<typeof FieldErrorPrimitive>) {
  const rest = omit(props, "class");
  return (
    <FieldErrorPrimitive
      class={partClass("text-xs/relaxed font-normal text-destructive", props.class)}
      {...rest}
    />
  );
}
