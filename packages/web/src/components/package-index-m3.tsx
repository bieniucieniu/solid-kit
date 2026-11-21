import { type ComponentProps } from "solid-js";
import { PackageIndex as BaseIndex } from "~/components/package-index";

/** The m3 overview, on the M3 surface. */
export function PackageIndex(props: ComponentProps<typeof BaseIndex>) {
  return <BaseIndex previewClass="bg-surface text-on-surface" {...props} />;
}
