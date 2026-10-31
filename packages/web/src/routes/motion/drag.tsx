import { clientOnly } from "@solidjs/start";
import { DocsPage } from "~/components/preview";

const DragDemo = clientOnly(() => import("~/demos/motion/drag"));

const snippet = `import { motion } from "@solid-kit/motion";

<motion.div drag="x" dragConstraints={{ left: 0, right: 160 }} />`;

export default function DragPage() {
  return (
    <DocsPage
      title="Drag"
      description="Drag along the x axis inside constraints."
      snippet={snippet}
    >
      <DragDemo fallback={<div class="h-16" />} />
    </DocsPage>
  );
}
