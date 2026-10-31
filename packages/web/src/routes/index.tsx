import { A } from "@solidjs/router";
import { For } from "solid-js";
import { packages } from "~/nav";

export default function Home() {
  return (
    <main class="mx-auto max-w-6xl px-6 py-16">
      <h1 class="text-4xl font-semibold tracking-tight text-foreground">solid-kit</h1>
      <p class="mt-3 max-w-xl text-muted-foreground">
        Solid 1.9 packages for UI, motion, node graphs, and a Tiptap editor.
      </p>
      <div class="mt-10 grid gap-4 sm:grid-cols-2">
        <For each={packages}>
          {(item) => (
            <A href={item.href} class="rounded-lg border border-border p-6 hover:bg-muted">
              <h2 class="text-lg font-medium text-foreground">{item.title}</h2>
              <p class="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </A>
          )}
        </For>
      </div>
    </main>
  );
}
