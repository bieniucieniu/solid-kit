import type { RouteSectionProps } from "@solidjs/router";
import { DocsLayout } from "~/components/docs-layout";

export default function TiptapLayout(props: RouteSectionProps) {
  return <DocsLayout pkg="tiptap">{props.children}</DocsLayout>;
}
