import { A } from "@solidjs/router";
import { For } from "solid-js";
import { DocsPage } from "~/components/preview";
import type { NavItem } from "~/nav";

export function PackageIndex(props: {
  title: string;
  description: string;
  snippet: string;
  pages: NavItem[];
}) {
  return (
    <DocsPage title={props.title} description={props.description} snippet={props.snippet}>
      <ul class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <For each={props.pages}>
          {(item) => (
            <li>
              <A
                href={item.href}
                class="block rounded-lg border border-border px-4 py-3 text-sm text-foreground hover:bg-muted"
              >
                {item.title}
              </A>
            </li>
          )}
        </For>
      </ul>
    </DocsPage>
  );
}
