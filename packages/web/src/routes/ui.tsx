import { type ParentProps } from "solid-js";
import { DocsLayout } from "~/components/docs-layout";

export default function UILayout(props: ParentProps) {
  return <DocsLayout pkg="ui">{props.children}</DocsLayout>;
}
