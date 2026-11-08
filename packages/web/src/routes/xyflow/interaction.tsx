import { clientOnly } from "@solidjs/start";
import { DocsPage } from "~/components/preview";

const InteractionDemo = clientOnly(() => import("~/demos/xyflow/interaction"));

const snippet = `import { createSignal } from "solid-js";
import { createFlow } from "@solid-kit/xyflow";

const [draggable, setDraggable] = createSignal(true);
const [snap, setSnap] = createSignal(false);

// Keep nodes and edges outside the accessor. A new array here replaces the graph.
const flow = createFlow(() => ({
  nodes,
  edges,
  nodesDraggable: draggable(),
  snapToGrid: snap(),
  snapGrid: [40, 40],
}));`;

export default function InteractionPage() {
  return (
    <DocsPage
      title="Interaction"
      description="Turn dragging, connecting, selection, and grid snapping on and off."
      snippet={snippet}
      previewClass="p-0"
    >
      <InteractionDemo fallback={<div class="h-96" />} />
    </DocsPage>
  );
}
