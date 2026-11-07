import { Toast as ToastPrimitive, toaster, useToastContext } from "@kobalte/core/toast";
import { type ComponentProps, onCleanup, onMount, splitProps } from "solid-js";
import { type ButtonSize, type ButtonVariant, buttonVariants } from "./button";
import { cn } from "@/lib/utils";

type ToastRootProps = ComponentProps<typeof ToastPrimitive>;
type ToastRegionProps = ComponentProps<typeof ToastPrimitive.Region>;
type ToastListProps = ComponentProps<typeof ToastPrimitive.List>;
type ToastTitleProps = ComponentProps<typeof ToastPrimitive.Title>;
type ToastDescriptionProps = ComponentProps<typeof ToastPrimitive.Description>;
type ToastCloseButtonProps = ComponentProps<typeof ToastPrimitive.CloseButton> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};
type ToastProgressTrackProps = ComponentProps<typeof ToastPrimitive.ProgressTrack>;
type ToastProgressFillProps = ComponentProps<typeof ToastPrimitive.ProgressFill>;

function ToastRoot(props: ToastRootProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ToastPrimitive
      ref={props.ref}
      class={cn(
        "group/toast pointer-events-auto relative z-50 flex w-full flex-col gap-1.5 rounded-lg border border-border bg-popover p-4 text-xs/relaxed text-popover-foreground shadow-lg duration-200 data-opened:animate-in data-opened:fade-in-0 data-opened:slide-in-from-bottom-full data-closed:animate-out data-closed:fade-out-80 data-closed:slide-out-to-right-full data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-transform data-[swipe=end]:animate-out data-[swipe=end]:slide-out-to-right-full data-[swipe=move]:translate-x-(--kb-toast-swipe-move-x) data-[swipe=move]:transition-none",
        props.class,
      )}
      {...rest}
    />
  );
}

export function ToastRegion(props: ToastRegionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ToastPrimitive.Region
      ref={props.ref}
      class={cn(
        "fixed right-0 bottom-0 z-50 flex max-h-screen w-full flex-col gap-2 p-4 outline-none sm:max-w-[356px]",
        props.class,
      )}
      {...rest}
    />
  );
}

const reflowDuration = 300;
const reflowEasing = "cubic-bezier(0.22, 1, 0.36, 1)";

/** Viewport top of an element's layout box, ignoring transforms and running animations. */
function layoutTop(el: HTMLElement): number | undefined {
  const parent = el.offsetParent;
  if (!(parent instanceof HTMLElement)) return undefined;
  return parent.getBoundingClientRect().top + el.offsetTop;
}

/**
 * When a toast is added or removed, the others change position in one frame. Slide them from
 * their old spot to the new one (FLIP). The animation composites on top of the toast's own
 * enter/exit/swipe transforms, so it never fights them.
 */
function reflowToasts(list: HTMLElement) {
  const tops = new WeakMap<HTMLElement, number>();
  const flips = new WeakMap<HTMLElement, { animation: Animation; from: number }>();
  const items = () => Array.from(list.children).filter((n) => n instanceof HTMLElement);
  const record = () => {
    for (const el of items()) {
      const top = layoutTop(el);
      if (top !== undefined) tops.set(el, top);
    }
  };
  // A toast can change height in place (e.g. `toaster.update` with longer text), which moves
  // the others without any child being added or removed. Re-record so the next slide starts
  // from where they really are.
  const sizes = new ResizeObserver(record);
  for (const el of items()) sizes.observe(el);

  record();
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.removedNodes) if (node instanceof Element) sizes.unobserve(node);
      for (const node of mutation.addedNodes) if (node instanceof Element) sizes.observe(node);
    }
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    for (const el of items()) {
      const next = layoutTop(el);
      if (next === undefined) continue;
      const prev = tops.get(el);
      tops.set(el, next);
      if (reduce || prev === undefined || prev === next) continue;

      // Start from where the toast is drawn now, including an unfinished slide.
      let carry = 0;
      const running = flips.get(el);
      if (running && running.animation.playState === "running") {
        const progress = running.animation.effect?.getComputedTiming().progress ?? 1;
        carry = running.from * (1 - progress);
        running.animation.cancel();
      }
      const from = prev - next + carry;
      const animation = el.animate(
        [{ transform: `translateY(${from}px)` }, { transform: "translateY(0)" }],
        { duration: reflowDuration, easing: reflowEasing, composite: "add" },
      );
      flips.set(el, { animation, from });
    }
  });
  observer.observe(list, { childList: true });
  window.addEventListener("resize", record);
  onCleanup(() => {
    observer.disconnect();
    sizes.disconnect();
    window.removeEventListener("resize", record);
  });
}

export function ToastList(props: ToastListProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  let list: HTMLElement | undefined;
  onMount(() => {
    if (list) reflowToasts(list);
  });
  return (
    <ToastPrimitive.List
      ref={(el: HTMLElement) => {
        list = el;
        const forward = props.ref;
        if (typeof forward === "function") forward(el);
      }}
      class={cn("flex w-full flex-col gap-2 outline-none", props.class)}
      {...rest}
    />
  );
}

export function ToastTitle(props: ToastTitleProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ToastPrimitive.Title
      ref={props.ref}
      class={cn("text-xs font-medium", props.class)}
      {...rest}
    />
  );
}

export function ToastDescription(props: ToastDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ToastPrimitive.Description
      ref={props.ref}
      class={cn("text-xs/relaxed text-muted-foreground", props.class)}
      {...rest}
    />
  );
}

export function ToastCloseButton(props: ToastCloseButtonProps) {
  const [, rest] = splitProps(props, ["class", "ref", "variant", "size"]);
  return (
    <ToastPrimitive.CloseButton
      ref={props.ref}
      class={buttonVariants({
        variant: props.variant ?? "outline",
        size: props.size ?? "sm",
        class: props.class,
      })}
      {...rest}
    />
  );
}

export function ToastProgressTrack(props: ToastProgressTrackProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ToastPrimitive.ProgressTrack
      ref={props.ref}
      class={cn("mt-2 h-1 w-full overflow-hidden rounded-full bg-muted", props.class)}
      {...rest}
    />
  );
}

export function ToastProgressFill(props: ToastProgressFillProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ToastPrimitive.ProgressFill
      ref={props.ref}
      class={cn("h-full w-(--kb-toast-progress-fill-width) bg-primary", props.class)}
      {...rest}
    />
  );
}

export { toaster };

export const Toast = Object.assign(ToastRoot, {
  Root: ToastRoot,
  Region: ToastRegion,
  List: ToastList,
  Title: ToastTitle,
  Description: ToastDescription,
  CloseButton: ToastCloseButton,
  ProgressTrack: ToastProgressTrack,
  ProgressFill: ToastProgressFill,
  useContext: useToastContext,
});
