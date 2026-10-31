import { MotionConfig, motion, useMotionValue, useSpring } from "@solid-kit/motion";
import { Button } from "@solid-kit/ui";

export default function SpringDemo() {
  const x = useMotionValue(0);
  const springX = useSpring(x, () => ({ stiffness: 220, damping: 18 }));

  return (
    <MotionConfig transition={{ duration: 0.35 }}>
      <div class="flex items-center gap-4">
        <Button type="button" onClick={() => x.set(x.get() > 40 ? 0 : 120)}>
          Spring
        </Button>
        <motion.div class="size-16 rounded-lg bg-primary" style={{ x: springX }} />
      </div>
    </MotionConfig>
  );
}
