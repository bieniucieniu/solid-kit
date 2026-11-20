import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** A ui-sdk part's `class`: class names, or a function of the part's state that returns them. */
export type PartClass<State> = ClassValue | ((state: State) => ClassValue);

/**
 * Merges a part's own classes with the `class` a caller passed, which may be a function of the
 * part's state. Pass the result as the part's `class`; ui-sdk calls it with the current state.
 */
export function partClass<State>(
  base: ClassValue | ((state: State) => ClassValue),
  extra: PartClass<State> | undefined,
): (state: State) => string {
  return (state) =>
    cn(
      typeof base === "function" ? base(state) : base,
      typeof extra === "function" ? extra(state) : extra,
    );
}
