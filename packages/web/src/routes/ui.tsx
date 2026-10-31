import type { RouteSectionProps } from "@solidjs/router";
import { DocsLayout } from "~/components/docs-layout";

export default function UILayout(props: RouteSectionProps) {
  return <DocsLayout pkg="ui">{props.children}</DocsLayout>;
}
