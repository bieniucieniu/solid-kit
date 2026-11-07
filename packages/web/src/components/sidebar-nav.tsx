import { A } from "@solidjs/router";
import { buttonVariants, cn } from "@solid-kit/ui";
import { For } from "solid-js";
import type { NavItem } from "~/nav";

export function SidebarNav(props: { items: NavItem[]; class?: string }) {
  return (
    <nav class={cn("flex flex-col gap-1", props.class)}>
      <For each={props.items}>
        {(item) => (
          <A
            href={item.href}
            end
            class={buttonVariants({ variant: "ghost", class: "w-full justify-start" })}
            activeClass="bg-muted text-foreground"
            inactiveClass="text-muted-foreground"
          >
            {item.title}
          </A>
        )}
      </For>
    </nav>
  );
}
