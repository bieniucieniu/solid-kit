import { MenuTrigger as MenuTriggerPrimitive } from "@ui-sdk/solid/menu";
import { type JSX } from "@solidjs/web";
import { type ComponentProps, createContext, omit, useContext } from "solid-js";
import { type ButtonSize, buttonVariants } from "./button";
import { cn, partClass } from "#kit/lib/utils";

export type SplitButtonVariant = "elevated" | "filled" | "tonal" | "outlined";

const SplitButtonContext = createContext<{ variant: SplitButtonVariant; size: ButtonSize }>({
  variant: "filled",
  size: "sm",
});

/** Inner corners where the two halves meet, and the round outer corners. */
const corners = {
  xs: { inner: "4px", outer: "1rem" },
  sm: { inner: "4px", outer: "1.25rem" },
  md: { inner: "4px", outer: "1.75rem" },
  lg: { inner: "8px", outer: "3rem" },
  xl: { inner: "12px", outer: "4.25rem" },
};

const trailingPaddingClasses = {
  xs: "px-1.5",
  sm: "px-2.5",
  md: "px-4",
  lg: "px-7",
  xl: "px-9",
};

export interface SplitButtonProps extends JSX.HTMLAttributes<HTMLDivElement> {
  variant?: SplitButtonVariant;
  size?: ButtonSize;
}

/**
 * A main action plus a menu button, joined. Put SplitButtonAction and a Menu whose trigger is
 * SplitButtonTrigger inside.
 */
export function SplitButton(props: SplitButtonProps) {
  const rest = omit(props, "variant", "size");
  return (
    <SplitButtonContext
      value={{
        get variant() {
          return props.variant ?? "filled";
        },
        get size() {
          return props.size ?? "sm";
        },
      }}
    >
      <div
        role="group"
        data-slot="split-button"
        {...rest}
        class={cn("inline-flex items-center gap-0.5", props.class)}
        style={{
          "--split-inner": corners[props.size ?? "sm"].inner,
          "--split-outer": corners[props.size ?? "sm"].outer,
          ...(typeof props.style === "object" ? (props.style as JSX.CSSProperties) : {}),
        }}
      />
    </SplitButtonContext>
  );
}

/** The leading half: the main action. */
export function SplitButtonAction(props: JSX.ButtonHTMLAttributes<HTMLButtonElement>) {
  const context = useContext(SplitButtonContext);
  return (
    <button
      type="button"
      data-slot="split-button-action"
      {...props}
      class={buttonVariants({
        variant: context.variant,
        size: context.size,
        class: cn(
          "rounded-s-(--split-outer) rounded-e-(--split-inner) active:rounded-s-(--split-outer) active:rounded-e-(--split-inner)",
          props.class,
        ),
      })}
    />
  );
}

function ArrowDropDownIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      class="motion-fast group-data-open/split-trigger:rotate-180"
    >
      <path d="M7 10l5 5 5-5z" />
    </svg>
  );
}

type SplitButtonTriggerProps = ComponentProps<typeof MenuTriggerPrimitive>;

/**
 * The trailing half: opens the menu. Use inside a Menu. Becomes fully round while the menu is
 * open. Give it an `aria-label`.
 */
export function SplitButtonTrigger(props: SplitButtonTriggerProps) {
  const context = useContext(SplitButtonContext);
  return (
    <MenuTriggerPrimitive
      {...props}
      class={partClass(
        () =>
          buttonVariants({
            variant: context.variant,
            size: context.size,
            class: cn(
              "group/split-trigger gap-0 rounded-s-(--split-inner) rounded-e-(--split-outer) active:rounded-s-(--split-inner) active:rounded-e-(--split-outer) data-open:rounded-(--split-outer)",
              trailingPaddingClasses[context.size],
            ),
          }),
        props.class,
      )}
    >
      {props.children ?? <ArrowDropDownIcon />}
    </MenuTriggerPrimitive>
  );
}
