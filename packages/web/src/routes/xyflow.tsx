import { type ParentProps } from "solid-js";
import { DocsLayout } from "~/components/docs-layout";

export default function XYFlowLayout(props: ParentProps) {
  return <DocsLayout pkg="xyflow">{props.children}</DocsLayout>;
}
