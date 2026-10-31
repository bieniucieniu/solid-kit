import { TextField as TextFieldPrimitive } from "@kobalte/core/text-field";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type InputRootProps = ComponentProps<typeof TextFieldPrimitive>;
type InputLabelProps = ComponentProps<typeof TextFieldPrimitive.Label>;
type InputControlProps = ComponentProps<typeof TextFieldPrimitive.Input>;
type InputDescriptionProps = ComponentProps<typeof TextFieldPrimitive.Description>;
type InputErrorMessageProps = ComponentProps<typeof TextFieldPrimitive.ErrorMessage>;

const fieldClass =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground ring-ring outline-none focus-visible:ring-2 data-invalid:border-foreground disabled:opacity-50 placeholder:text-muted-foreground";

function InputRoot(props: InputRootProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <TextFieldPrimitive
      ref={props.ref}
      class={cn("flex w-full flex-col gap-1.5 data-disabled:opacity-50", props.class)}
      {...rest}
    />
  );
}

export function InputLabel(props: InputLabelProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <TextFieldPrimitive.Label
      ref={props.ref}
      class={cn("text-sm text-foreground", props.class)}
      {...rest}
    />
  );
}

export function InputControl(props: InputControlProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return <TextFieldPrimitive.Input ref={props.ref} class={cn(fieldClass, props.class)} {...rest} />;
}

export function InputDescription(props: InputDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <TextFieldPrimitive.Description
      ref={props.ref}
      class={cn("text-sm text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function InputErrorMessage(props: InputErrorMessageProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <TextFieldPrimitive.ErrorMessage
      ref={props.ref}
      class={cn("text-sm text-foreground", props.class)}
      {...rest}
    />
  );
}

export const Input = Object.assign(InputRoot, {
  Label: InputLabel,
  Input: InputControl,
  Description: InputDescription,
  ErrorMessage: InputErrorMessage,
});
