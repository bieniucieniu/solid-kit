import { type ParentProps } from "solid-js";
import { DocsLayout } from "~/components/docs-layout";

export default function TiptapLayout(props: ParentProps) {
  return <DocsLayout pkg="tiptap">{props.children}</DocsLayout>;
}
