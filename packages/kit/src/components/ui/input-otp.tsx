import type { JSX } from "@solidjs/web";
import {
  OTPInput as OTPInputPrimitive,
  OTPInputGroup as OTPInputGroupPrimitive,
  OTPInputSeparator as OTPInputSeparatorPrimitive,
  OTPInputSlot as OTPInputSlotPrimitive,
} from "@ui-sdk/solid/otp-input";
import { type ComponentProps } from "solid-js";
import { partClass } from "#kit/lib/utils";

/**
 * A one-time code. One native input holds the code; the slots only display it, so paste, autofill
 * and undo work. Set `maxLength` to the number of slots.
 */
export function InputOTP(props: ComponentProps<typeof OTPInputPrimitive>) {
  return (
    <OTPInputPrimitive
      aria-label="One-time code"
      {...props}
      class={partClass(
        "relative flex w-fit items-center gap-2 data-disabled:opacity-50",
        props.class,
      )}
    />
  );
}

export function InputOTPGroup(props: ComponentProps<typeof OTPInputGroupPrimitive>) {
  return <OTPInputGroupPrimitive {...props} class={partClass("flex items-center", props.class)} />;
}

/** Shows the character at `index`, and a blinking caret while it's the empty slot typing goes to. */
export function InputOTPSlot(props: ComponentProps<typeof OTPInputSlotPrimitive>) {
  return (
    <OTPInputSlotPrimitive
      {...props}
      class={partClass(
        "relative flex size-7 items-center justify-center border-y border-r border-input bg-input/20 text-xs/relaxed transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-active:z-10 data-active:border-ring data-active:ring-2 data-active:ring-ring/30 dark:bg-input/30 data-fake-caret:after:h-4 data-fake-caret:after:w-px data-fake-caret:after:animate-pulse data-fake-caret:after:bg-foreground data-fake-caret:after:content-['']",
        props.class,
      )}
    />
  );
}

export function InputOTPSeparator(props: ComponentProps<typeof OTPInputSeparatorPrimitive>) {
  return (
    <OTPInputSeparatorPrimitive
      {...props}
      class={partClass("flex items-center text-muted-foreground [&_svg]:size-3.5", props.class)}
    >
      {(props.children as JSX.Element) ?? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          aria-hidden="true"
        >
          <path d="M5 12h14" />
        </svg>
      )}
    </OTPInputSeparatorPrimitive>
  );
}
