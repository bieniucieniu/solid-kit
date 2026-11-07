import { ScrollArea } from "@solid-kit/ui";
import type { JSX } from "solid-js";
import { SidebarNav } from "~/components/sidebar-nav";
import { sidebars, type PackageId } from "~/nav";

export function DocsLayout(props: { pkg: PackageId; children: JSX.Element }) {
  return (
    <>
      <aside class="fixed top-(--header-height) bottom-0 left-0 z-30 hidden w-56 border-r border-border bg-background md:block">
        <ScrollArea class="h-full">
          <SidebarNav items={sidebars[props.pkg]} class="p-3" />
        </ScrollArea>
      </aside>
      <div class="md:pl-56">
        <div class="mx-auto w-full max-w-4xl min-w-0 px-4 py-8 md:px-8">{props.children}</div>
      </div>
    </>
  );
}
