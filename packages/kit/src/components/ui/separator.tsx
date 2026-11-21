import { Separator as SeparatorPrimitive } from "@ui-sdk/solid/separator";
import { type ComponentProps } from "solid-js";
import { partClass } from "#kit/lib/utils";

export function Separator(props: ComponentProps<typeof SeparatorPrimitive>) {
  return (
    <SeparatorPrimitive
      {...props}
      class={partClass(
        "shrink-0 border-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch",
        props.class,
      )}
    />
  );
}
