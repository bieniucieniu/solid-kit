import { type ParentProps } from "solid-js";
import { DocsLayout } from "~/components/docs-layout";

/** The demos use m3 components; `data-m3` points their primary/secondary colors at the M3 scheme. */
export default function MotionLayout(props: ParentProps) {
  return (
    <DocsLayout pkg="motion">
      <div data-m3>{props.children}</div>
    </DocsLayout>
  );
}
