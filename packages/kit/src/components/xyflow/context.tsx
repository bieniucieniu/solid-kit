import { type JSX } from "@solidjs/web";
import { createContext, useContext } from "solid-js";
import type { Flow } from "#kit/lib/xyflow/createFlow";

// Optional contexts default to null: Solid 2 throws on a read with no provider and no default.
export const FlowContext = createContext<Flow | null>(null);
export const NodeIdContext = createContext<string | null>(null);

export function useFlow(): Flow {
  const flow = useContext(FlowContext);
  if (!flow) throw new Error("useFlow must be used inside <Flow>.");
  return flow;
}

export function useNodeId(): string | undefined {
  return useContext(NodeIdContext) ?? undefined;
}

export function FlowProvider(props: { flow: Flow; children: JSX.Element }) {
  return <FlowContext value={props.flow}>{props.children}</FlowContext>;
}
