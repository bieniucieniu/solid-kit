import { Separator as SeparatorPrimitive } from "@ui-sdk/solid/separator";
import { type ComponentProps, omit } from "solid-js";
import { partClass } from "#kit/lib/utils";

export function Separator(props: ComponentProps<typeof SeparatorPrimitive>) {
  const rest = omit(props, "class");
  return (
    <SeparatorPrimitive
      class={partClass(
        "shrink-0 border-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch",
        props.class,
      )}
      {...rest}
    />
  );
}
