import { clientOnly } from "@solidjs/start";
import { DocsPage } from "~/components/preview";

const PresenceDemo = clientOnly(() => import("~/demos/motion/presence"));

const snippet = `import { AnimatePresence, motion } from "@solid-kit/motion";

<AnimatePresence when={open}>
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
  />
</AnimatePresence>`;

export default function PresencePage() {
  return (
    <DocsPage
      title="Presence"
      description="Enter and exit when the panel toggles."
      snippet={snippet}
    >
      <PresenceDemo fallback={<div class="h-16" />} />
    </DocsPage>
  );
}
