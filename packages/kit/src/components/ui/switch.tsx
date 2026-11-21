import type { JSX } from "@solidjs/web";
import {
  Switch as SwitchPrimitive,
  SwitchThumb as SwitchThumbPrimitive,
} from "@ui-sdk/solid/switch";
import { type ComponentProps, omit } from "solid-js";
import { cn, partClass } from "#kit/lib/utils";

type SwitchProps = ComponentProps<typeof SwitchPrimitive> & { size?: "sm" | "default" };

/** The track. It renders its own thumb unless you pass children. Wrap it with its text in `SwitchLabel`. */
export function Switch(props: SwitchProps) {
  const rest = omit(props, "size");
  return (
    <SwitchPrimitive
      data-size={props.size ?? "default"}
      {...rest}
      class={partClass(
        "group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 data-[size=default]:h-[16.6px] data-[size=default]:w-[28px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-unchecked:bg-input dark:data-unchecked:bg-input/80",
        props.class,
      )}
    >
      {(props.children as JSX.Element) ?? <SwitchThumb />}
    </SwitchPrimitive>
  );
}

export function SwitchThumb(props: ComponentProps<typeof SwitchThumbPrimitive>) {
  return (
    <SwitchThumbPrimitive
      {...props}
      class={partClass(
        "pointer-events-none block translate-x-0 rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-3.5 group-data-[size=sm]/switch:size-3 data-checked:translate-x-[calc(100%-2px)] rtl:data-checked:-translate-x-[calc(100%-2px)] dark:data-unchecked:bg-foreground dark:data-checked:bg-primary-foreground",
        props.class,
      )}
    />
  );
}

/** A `<label>` that lays out a switch and its text. */
export function SwitchLabel(props: JSX.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      data-slot="switch-label"
      {...props}
      class={cn(
        "inline-flex items-center gap-2 text-xs/relaxed font-medium text-foreground has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50",
        props.class,
      )}
    />
  );
}
