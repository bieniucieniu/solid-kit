import { MotionConfig, motion } from "@solid-kit/kit/motion";

export default function DragDemo() {
  return (
    <MotionConfig transition={{ duration: 0.35 }}>
      <motion.div
        class="size-16 rounded-lg bg-foreground"
        drag="x"
        dragConstraints={{ left: 0, right: 160 }}
      />
    </MotionConfig>
  );
}
