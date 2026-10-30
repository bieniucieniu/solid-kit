import {
  AnimatePresence,
  MotionConfig,
  motion,
  useMotionValue,
  useSpring,
} from "@solid-kit/motion";
import { createSignal } from "solid-js";

interface Item {
  id: number;
  name: string;
}

export default function App() {
  const [open, setOpen] = createSignal(true);
  const [items, setItems] = createSignal<Item[]>([
    { id: 1, name: "One" },
    { id: 2, name: "Two" },
    { id: 3, name: "Three" },
  ]);
  const x = useMotionValue(0);
  const springX = useSpring(x, () => ({ stiffness: 220, damping: 18 }));

  return (
    <MotionConfig transition={{ duration: 0.35 }}>
      <main>
        <section>
          <div class="slot">
            <motion.div class="box" animate={{ x: 80 }} />
          </div>
          <motion.div class="box" style={{ background: "#8d30ff" }} whileHover={{ scale: 1.15 }} />
          <motion.div
            class="box"
            drag="x"
            dragConstraints={{ left: 0, right: 160 }}
            style={{ background: "#ff4fba" }}
          />
          <button type="button" onClick={() => x.set(x.get() > 40 ? 0 : 120)}>
            Spring
          </button>
          <motion.div class="box" style={{ x: springX, background: "#22c55e" }} />
        </section>
        <section>
          <button type="button" onClick={() => setOpen((value) => !value)}>
            Toggle
          </button>
          <AnimatePresence when={open}>
            <motion.div
              class="panel"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              Panel
            </motion.div>
          </AnimatePresence>
        </section>
        <section>
          <button
            type="button"
            onClick={() =>
              setItems((list) => [...list, { id: Date.now(), name: `Item ${list.length + 1}` }])
            }
          >
            Add
          </button>
          <button type="button" onClick={() => setItems((list) => list.slice(0, -1))}>
            Remove
          </button>
        </section>
        <section>
          <AnimatePresence each={items} by={(item) => item.id}>
            {(item) => (
              <motion.div
                class="row"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {item.name}
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>
    </MotionConfig>
  );
}
