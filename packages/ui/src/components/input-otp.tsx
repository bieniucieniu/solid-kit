import OtpFieldPrimitive, {
  type DynamicProps,
  type InputProps,
  type RootProps,
} from "@corvu/otp-field";
import { type JSX, Show, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

export function InputOTP(props: DynamicProps<"div", RootProps<"div">>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <OtpFieldPrimitive
      ref={props.ref}
      data-slot="input-otp"
      class={cn("relative flex w-fit items-center gap-2 has-disabled:opacity-50", props.class)}
      {...rest}
    />
  );
}

export function InputOTPInput(props: DynamicProps<"input", InputProps<"input">>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <OtpFieldPrimitive.Input
      ref={props.ref}
      data-slot="input-otp-input"
      aria-label="One-time code"
      class={cn("disabled:cursor-not-allowed", props.class)}
      {...rest}
    />
  );
}

export function InputOTPGroup(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      ref={props.ref}
      data-slot="input-otp-group"
      class={cn("flex items-center", props.class)}
      {...rest}
    />
  );
}

export function InputOTPSlot(
  props: JSX.HTMLAttributes<HTMLDivElement> & { index: number; contextId?: string },
) {
  const [, rest] = splitProps(props, ["class", "ref", "index", "contextId"]);
  const context = OtpFieldPrimitive.useContext(props.contextId);
  const char = () => context.value()[props.index];
  const active = () => context.isFocused() && context.activeSlots().includes(props.index);
  const caret = () => context.isInserting() && context.value().length === props.index;
  return (
    <div
      ref={props.ref}
      data-slot="input-otp-slot"
      data-active={active() ? "" : undefined}
      class={cn(
        "relative flex size-7 items-center justify-center border-y border-r border-input bg-input/20 text-xs/relaxed transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-active:z-10 data-active:border-ring data-active:ring-2 data-active:ring-ring/30 dark:bg-input/30",
        props.class,
      )}
      {...rest}
    >
      {char()}
      <Show when={caret()}>
        <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div class="h-4 w-px animate-pulse bg-foreground duration-1000" />
        </div>
      </Show>
    </div>
  );
}

export function InputOTPSeparator(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [, rest] = splitProps(props, ["class", "ref", "children"]);
  return (
    <div
      ref={props.ref}
      data-slot="input-otp-separator"
      role="separator"
      class={cn("flex items-center text-muted-foreground [&_svg]:size-3.5", props.class)}
      {...rest}
    >
      <Show
        when={props.children}
        fallback={
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
          </svg>
        }
      >
        {props.children}
      </Show>
    </div>
  );
}

export const useInputOTPContext = OtpFieldPrimitive.useContext;
