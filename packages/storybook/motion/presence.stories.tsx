import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { AnimatePresence, MotionConfig, motion } from "../../motion/src/components/motion";
import { Button } from "../../ui/src/components/button";
import { createSignal } from "solid-js";

const meta = {
  title: "Motion/Presence",
  component: AnimatePresence,
} satisfies Meta<typeof AnimatePresence>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <PresenceDemo />,
};

function PresenceDemo() {
  const [open, setOpen] = createSignal(true);

  return (
    <MotionConfig transition={{ duration: 0.35 }}>
      <div class="flex flex-wrap items-center gap-4">
        <Button type="button" onClick={() => setOpen((value) => !value)}>
          Toggle
        </Button>
        <AnimatePresence when={open}>
          <motion.div
            class="rounded-lg bg-muted px-4 py-3 text-sm text-foreground"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            Panel
          </motion.div>
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
