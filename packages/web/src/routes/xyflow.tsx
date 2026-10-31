import type { RouteSectionProps } from "@solidjs/router";
import { DocsLayout } from "~/components/docs-layout";

export default function XYFlowLayout(props: RouteSectionProps) {
  return <DocsLayout pkg="xyflow">{props.children}</DocsLayout>;
}
