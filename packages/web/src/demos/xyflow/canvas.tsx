import { Flow, Handle, Position, createFlow, type FlowNode } from "@solid-kit/xyflow";
import "@solid-kit/xyflow/style.css";

function TextNode(props: { node: FlowNode }) {
  return (
    <>
      <Handle type="target" position={Position.Left} />
      <span>{typeof props.node.data.label === "string" ? props.node.data.label : ""}</span>
      <Handle type="source" position={Position.Right} />
    </>
  );
}

export default function CanvasDemo() {
  const flow = createFlow(() => ({
    nodes: [
      { id: "1", type: "text", position: { x: 0, y: 0 }, data: { label: "Send" } },
      { id: "2", type: "text", position: { x: 0, y: 120 }, data: { label: "Receive" } },
    ],
    edges: [{ id: "e1-2", source: "1", target: "2" }],
    fitView: true,
    nodeTypes: { text: TextNode },
  }));

  return (
    <div class="h-96">
      <Flow flow={flow}>
        <Flow.Background />
        <Flow.Controls />
      </Flow>
    </div>
  );
}
