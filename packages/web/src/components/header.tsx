import { A, useLocation, useNavigate } from "@solidjs/router";
import { Button, ScrollArea, Sheet } from "@solid-kit/ui";
import { createEffect, createSignal, For, on, Show } from "solid-js";
import { SidebarNav } from "~/components/sidebar-nav";
import { ThemeToggle } from "~/components/theme-toggle";
import { packages, sidebars } from "~/nav";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const segment = () => location.pathname.split("/").filter(Boolean)[0] ?? "";
  const currentPackage = () => packages.find((item) => item.id === segment());
  const [menuOpen, setMenuOpen] = createSignal(false);

  createEffect(
    on(
      () => location.pathname,
      () => setMenuOpen(false),
      { defer: true },
    ),
  );

  return (
    <header class="sticky top-0 z-40 h-(--header-height) border-b border-border bg-background">
      <div class="flex h-full items-center gap-1 px-4 py-1.5 md:gap-2">
        <Show when={currentPackage()}>
          {(pkg) => (
            <Sheet open={menuOpen()} onOpenChange={setMenuOpen}>
              <Sheet.Trigger
                as={Button}
                type="button"
                variant="ghost"
                size="icon"
                class="md:hidden"
                aria-label={`Open ${pkg().title} navigation`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Sheet.Trigger>
              <Sheet.Portal>
                <Sheet.Overlay />
                <Sheet.Content side="left">
                  <Sheet.Header>
                    <Sheet.Title>{pkg().title}</Sheet.Title>
                  </Sheet.Header>
                  <ScrollArea class="-mx-3 min-h-0 flex-1 px-3">
                    <SidebarNav items={sidebars[pkg().id]} />
                  </ScrollArea>
                </Sheet.Content>
              </Sheet.Portal>
            </Sheet>
          )}
        </Show>
        <A
          href="/"
          class="mr-1 shrink-0 text-sm font-semibold tracking-tight whitespace-nowrap text-foreground md:mr-4"
        >
          solid-kit
        </A>
        <nav class="flex min-w-0 items-center gap-1 overflow-x-auto">
          <For each={packages}>
            {(item) => (
              <Button
                type="button"
                variant={segment() === item.id ? "default" : "ghost"}
                aria-current={segment() === item.id ? "page" : undefined}
                classList={{ "text-muted-foreground": segment() !== item.id }}
                onClick={() => navigate(item.href)}
              >
                {item.title}
              </Button>
            )}
          </For>
        </nav>
        <div class="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
