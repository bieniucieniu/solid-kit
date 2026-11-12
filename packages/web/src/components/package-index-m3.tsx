import { buttonVariants } from "@solid-kit/m3";
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
    <DocsPage
      title={props.title}
      description={props.description}
      snippet={props.snippet}
      previewClass="bg-surface text-on-surface"
    >
      <ul class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <For each={props.pages}>
          {(item) => (
            <li>
              <A
                href={item.href}
                class={buttonVariants({
                  variant: "elevated",
                  class: "w-full",
                })}
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
