import { clientOnly } from "@solidjs/start";
import { DocsPage } from "~/components/preview";
import source from "~/demos/motion/list.tsx?raw";

const ListDemo = clientOnly(() => import("~/demos/motion/list"));

const snippet = `import { AnimatePresence, motion } from "@solid-kit/motion";

<AnimatePresence each={items} by={(item) => item.id}>
  {(item) => <motion.div exit={{ opacity: 0 }}>{item.name}</motion.div>}
</AnimatePresence>`;

export default function ListPage() {
  return (
    <DocsPage
      title="List"
      description="Animate items added to and removed from a list."
      snippet={snippet}
      source={source}
      sourceTitle="demos/motion/list.tsx"
    >
      <ListDemo fallback={<div class="h-24" />} />
    </DocsPage>
  );
}
