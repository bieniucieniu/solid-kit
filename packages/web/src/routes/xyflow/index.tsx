import { clientOnly } from "@solidjs/start";
import { DocsPage } from "~/components/preview";

const CanvasDemo = clientOnly(() => import("~/demos/xyflow/canvas"));

const snippet = `import { Flow, Handle, Position, createFlow } from "@solid-kit/xyflow";
import "@solid-kit/xyflow/style.css";

const flow = createFlow(() => ({
  nodes: [
    { id: "1", type: "text", position: { x: 0, y: 0 }, data: { label: "Send" } },
    { id: "2", type: "text", position: { x: 0, y: 120 }, data: { label: "Receive" } },
  ],
  edges: [{ id: "e1-2", source: "1", target: "2" }],
  fitView: true,
}));

<Flow flow={flow}>
  <Flow.Background />
  <Flow.Controls />
</Flow>`;

export default function XYFlowPage() {
  return (
    <DocsPage
      title="Canvas"
      description="Nodes, edges, background, and controls."
      snippet={snippet}
      previewClass="p-0"
    >
      <CanvasDemo fallback={<div class="h-96" />} />
    </DocsPage>
  );
}
