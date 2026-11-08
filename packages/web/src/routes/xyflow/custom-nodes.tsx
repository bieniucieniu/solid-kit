import { clientOnly } from "@solidjs/start";
import { DocsPage } from "~/components/preview";

const CustomNodesDemo = clientOnly(() => import("~/demos/xyflow/custom-nodes"));

const snippet = `import {
  Card,
  CardHeader,
  CardTitle,
  Switch,
  SwitchControl,
  SwitchInput,
  SwitchThumb,
} from "@solid-kit/ui";
import {
  Handle,
  Position,
  createFlow,
  useFlow,
  type NodeComponentProps,
} from "@solid-kit/xyflow";

function TaskNode(props: NodeComponentProps) {
  const flow = useFlow();
  return (
    <>
      <Handle type="target" position={Position.Left} />
      <Card size="sm">
        <CardHeader>
          <CardTitle>{props.node.data.title as string}</CardTitle>
        </CardHeader>
        <Switch
          class="nodrag"
          checked={props.node.data.done as boolean}
          onChange={(done) => flow.updateNode(props.node.id, { data: { done } })}
        >
          <SwitchInput />
          <SwitchControl>
            <SwitchThumb />
          </SwitchControl>
        </Switch>
      </Card>
      <Handle id="approved" type="source" position={Position.Right} />
    </>
  );
}

const flow = createFlow(() => ({
  nodes: [
    {
      id: "draft",
      type: "task",
      position: { x: 0, y: 0 },
      data: { title: "Write draft", done: false },
    },
  ],
  nodeTypes: { task: TaskNode },
}));`;

export default function CustomNodesPage() {
  return (
    <DocsPage
      title="Custom nodes"
      description="Nodes built from ui cards, with named handles and state the node updates itself."
      snippet={snippet}
      previewClass="p-0"
    >
      <CustomNodesDemo fallback={<div class="h-96" />} />
    </DocsPage>
  );
}
