import type { RouteSectionProps } from "@solidjs/router";
import { DocsLayout } from "~/components/docs-layout";

/** `data-m3` points bg-primary / bg-secondary at the M3 scheme while these pages are mounted. */
export default function M3Layout(props: RouteSectionProps) {
  return (
    <DocsLayout pkg="m3">
      <div data-m3>{props.children}</div>
    </DocsLayout>
  );
}
