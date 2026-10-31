import { clientOnly } from "@solidjs/start";
import { DocsPage } from "~/components/preview";

const SpringDemo = clientOnly(() => import("~/demos/motion/spring"));

const snippet = `import { motion, useMotionValue, useSpring } from "@solid-kit/motion";

const x = useMotionValue(0);
const springX = useSpring(x, () => ({ stiffness: 220, damping: 18 }));

<motion.div style={{ x: springX }} />`;

export default function SpringPage() {
  return (
    <DocsPage title="Spring" description="Spring a motion value toward a target." snippet={snippet}>
      <SpringDemo fallback={<div class="h-16" />} />
    </DocsPage>
  );
}
