import { PackageIndex } from "~/components/package-index";
import { sidebars } from "~/nav";

const pages = sidebars.ui.slice(1);

export default function UIIndex() {
  return (
    <PackageIndex
      title="UI"
      description="Button, checkbox, dialog, and tooltip."
      snippet={'import { Button, Checkbox, Dialog, Tooltip } from "@solid-kit/ui";'}
      pages={pages}
    />
  );
}
