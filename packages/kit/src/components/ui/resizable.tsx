import type { JSX } from "@solidjs/web";
import {
  Resizable as ResizablePrimitive,
  ResizableHandle as ResizableHandlePrimitive,
  ResizablePanel as ResizablePanelPrimitive,
} from "@ui-sdk/solid/resizable";
import { type ComponentProps, Show, omit } from "solid-js";
import { partClass } from "#kit/lib/utils";

export { createResizableController } from "@ui-sdk/solid/resizable";

/** Panels in a row (or a column with `orientation="vertical"`). Give the group a size. */
export function Resizable(props: ComponentProps<typeof ResizablePrimitive>) {
  const rest = omit(props, "class");
  return (
    <ResizablePrimitive
      class={partClass("flex size-full data-[orientation=vertical]:flex-col", props.class)}
      {...rest}
    />
  );
}

/** `defaultSize`, `minSize` and `maxSize` are percentages of the space the panels share. */
export function ResizablePanel(props: ComponentProps<typeof ResizablePanelPrimitive>) {
  const rest = omit(props, "class");
  return <ResizablePanelPrimitive class={partClass("overflow-hidden", props.class)} {...rest} />;
}

export function ResizableHandle(
  props: ComponentProps<typeof ResizableHandlePrimitive> & { withHandle?: boolean },
) {
  const rest = omit(props, "class", "withHandle", "children");
  return (
    <ResizableHandlePrimitive
      aria-label="Resize panels"
      class={partClass(
        "relative flex w-px shrink-0 items-center justify-center bg-border p-0 outline-none after:absolute after:inset-y-0 after:left-1/2 after:w-2 after:-translate-x-1/2 focus-visible:ring-2 focus-visible:ring-ring/30 data-dragging:bg-ring data-hovering:bg-ring data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full data-[orientation=vertical]:after:inset-x-0 data-[orientation=vertical]:after:inset-y-auto data-[orientation=vertical]:after:top-1/2 data-[orientation=vertical]:after:left-0 data-[orientation=vertical]:after:h-2 data-[orientation=vertical]:after:w-full data-[orientation=vertical]:after:translate-x-0 data-[orientation=vertical]:after:-translate-y-1/2 [&[data-orientation=vertical]>div]:rotate-90",
        props.class,
      )}
      {...rest}
    >
      <Show when={props.withHandle}>
        <div class="z-10 flex h-6 w-1 shrink-0 rounded-lg bg-border" />
      </Show>
      {props.children as JSX.Element}
    </ResizableHandlePrimitive>
  );
}
