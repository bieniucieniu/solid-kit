import type { RouteSectionProps } from "@solidjs/router";
import { DocsLayout } from "~/components/docs-layout";

export default function MotionLayout(props: RouteSectionProps) {
  return <DocsLayout pkg="motion">{props.children}</DocsLayout>;
}
