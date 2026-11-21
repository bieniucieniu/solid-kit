import type { JSX } from "@solidjs/web";
import { SidebarNav } from "~/components/sidebar-nav";
import { type PackageId, packages, sidebars } from "~/nav";

export function DocsLayout(props: { pkg: PackageId; children: JSX.Element }) {
  const title = () => packages.find((item) => item.id === props.pkg)?.title;
  return (
    <>
      <aside class="fixed top-(--header-height) bottom-0 left-0 z-30 hidden w-64 overflow-y-auto border-r border-outline-variant bg-surface md:block">
        <SidebarNav items={sidebars[props.pkg]} title={title()} />
      </aside>
      <div class="md:pl-64">
        <div class="mx-auto w-full max-w-4xl min-w-0 px-4 py-8 md:px-8">{props.children}</div>
      </div>
    </>
  );
}
