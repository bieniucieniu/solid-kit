import { A, useLocation, useNavigate } from "@solidjs/router";
import { Button } from "@solid-kit/ui";
import { For } from "solid-js";
import { packages } from "~/nav";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const segment = () => location.pathname.split("/").filter(Boolean)[0] ?? "";

  return (
    <header class="sticky top-0 z-40 border-b border-border bg-background">
      <div class="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-6 py-3">
        <A href="/" class="mr-4 text-sm font-semibold tracking-tight text-foreground">
          solid-kit
        </A>
        <nav class="flex flex-wrap items-center gap-2">
          <For each={packages}>
            {(item) => (
              <Button
                type="button"
                aria-current={segment() === item.id ? "page" : undefined}
                class={
                  segment() === item.id
                    ? undefined
                    : "bg-transparent text-muted-foreground hover:bg-muted"
                }
                onClick={() => navigate(item.href)}
              >
                {item.title}
              </Button>
            )}
          </For>
        </nav>
      </div>
    </header>
  );
}
