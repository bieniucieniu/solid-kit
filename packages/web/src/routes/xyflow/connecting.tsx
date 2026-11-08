import { clientOnly } from "@solidjs/start";
import { DocsPage } from "~/components/preview";

const ConnectingDemo = clientOnly(() => import("~/demos/xyflow/connecting"));

const snippet = `import { Button, ButtonGroup } from "@solid-kit/ui";
import { Flow, createFlow } from "@solid-kit/xyflow";

const flow = createFlow(() => ({
  nodes: initialNodes,
  edges: initialEdges,
  // The store adds the edge. This callback only hears about it.
  onConnect: (connection) => console.log(connection.source, connection.target),
}));

<ButtonGroup>
  <Button variant="outline" onClick={() => flow.setNodes([...flow.nodes, nextNode()])}>
    Add node
  </Button>
  <Button variant="outline" onClick={() => void flow.fitView()}>
    Fit view
  </Button>
</ButtonGroup>
<Flow flow={flow} />`;

export default function ConnectingPage() {
  return (
    <DocsPage
      title="Connecting"
      description="Drag between handles to add edges, and change the graph from a toolbar."
      snippet={snippet}
      previewClass="p-0"
    >
      <ConnectingDemo fallback={<div class="h-96" />} />
    </DocsPage>
  );
}
