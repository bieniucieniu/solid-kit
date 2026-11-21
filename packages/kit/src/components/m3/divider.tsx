import { Separator as SeparatorPrimitive } from "@ui-sdk/solid/separator";
import { type ComponentProps, omit } from "solid-js";
import { cn, partClass } from "#kit/lib/utils";

const insetClasses = {
  none: "",
  start: "data-[orientation=horizontal]:ms-4 data-[orientation=vertical]:mt-4",
  middle: "data-[orientation=horizontal]:mx-4 data-[orientation=vertical]:my-4",
};

type DividerProps = ComponentProps<typeof SeparatorPrimitive> & {
  inset?: keyof typeof insetClasses;
};

/** A 1px outline-variant line. `inset` indents it from the start or both ends. */
export function Divider(props: DividerProps) {
  const rest = omit(props, "inset");
  return (
    <SeparatorPrimitive
      {...rest}
      class={partClass(
        () =>
          cn(
            "shrink-0 border-none bg-outline-variant data-[orientation=horizontal]:h-px data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch",
            insetClasses[props.inset ?? "none"],
          ),
        props.class,
      )}
    />
  );
}
