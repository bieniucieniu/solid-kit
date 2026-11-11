import ResizablePrimitive, {
  type DynamicProps,
  type HandleProps,
  type PanelProps,
  type RootProps,
} from "@corvu/resizable";
import { Show, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

export function Resizable(props: DynamicProps<"div", RootProps<"div">>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ResizablePrimitive
      ref={props.ref}
      data-slot="resizable"
      class={cn("flex size-full data-[orientation=vertical]:flex-col", props.class)}
      {...rest}
    />
  );
}

export function ResizablePanel(props: DynamicProps<"div", PanelProps<"div">>) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <ResizablePrimitive.Panel
      ref={props.ref}
      data-slot="resizable-panel"
      class={cn("overflow-hidden", props.class)}
      {...rest}
    />
  );
}

export function ResizableHandle(
  props: DynamicProps<"button", HandleProps<"button">> & { withHandle?: boolean },
) {
  const [, rest] = splitProps(props, ["class", "ref", "withHandle"]);
  return (
    <ResizablePrimitive.Handle
      ref={props.ref}
      data-slot="resizable-handle"
      aria-label="Resize panels"
      class={cn(
        "relative flex w-px shrink-0 items-center justify-center bg-border p-0 outline-none after:absolute after:inset-y-0 after:left-1/2 after:w-2 after:-translate-x-1/2 focus-visible:ring-2 focus-visible:ring-ring/30 data-active:bg-ring data-dragging:bg-ring data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full data-[orientation=vertical]:after:inset-x-0 data-[orientation=vertical]:after:inset-y-auto data-[orientation=vertical]:after:top-1/2 data-[orientation=vertical]:after:left-0 data-[orientation=vertical]:after:h-2 data-[orientation=vertical]:after:w-full data-[orientation=vertical]:after:translate-x-0 data-[orientation=vertical]:after:-translate-y-1/2 [&[data-orientation=vertical]>div]:rotate-90",
        props.class,
      )}
      {...rest}
    >
      <Show when={props.withHandle}>
        <div class="z-10 flex h-6 w-1 shrink-0 rounded-lg bg-border" />
      </Show>
    </ResizablePrimitive.Handle>
  );
}

export const useResizableContext = ResizablePrimitive.useContext;
export const useResizablePanelContext = ResizablePrimitive.usePanelContext;
