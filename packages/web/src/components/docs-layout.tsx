import { useLocation, useNavigate } from "@solidjs/router";
import { Button } from "@solid-kit/ui";
import type { JSX } from "solid-js";
import { For } from "solid-js";
import { sidebars, type PackageId } from "~/nav";

export function DocsLayout(props: { pkg: PackageId; children: JSX.Element }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div class="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-8 md:flex-row">
      <aside class="w-full shrink-0 md:w-48">
        <nav class="sticky top-20 flex flex-col gap-1">
          <For each={sidebars[props.pkg]}>
            {(item) => (
              <Button
                type="button"
                aria-current={location.pathname === item.href ? "page" : undefined}
                class={
                  location.pathname === item.href
                    ? "w-full justify-start bg-muted text-foreground"
                    : "w-full justify-start bg-transparent text-muted-foreground hover:bg-muted"
                }
                onClick={() => navigate(item.href)}
              >
                {item.title}
              </Button>
            )}
          </For>
        </nav>
      </aside>
      <div class="min-w-0 flex-1">{props.children}</div>
    </div>
  );
}
