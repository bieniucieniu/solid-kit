import { type ParentProps } from "solid-js";
import { DocsLayout } from "~/components/docs-layout";

export default function MotionLayout(props: ParentProps) {
  return <DocsLayout pkg="motion">{props.children}</DocsLayout>;
}
