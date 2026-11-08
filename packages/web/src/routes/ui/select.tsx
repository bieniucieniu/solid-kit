import { DocsPage } from "~/components/preview";
import { SelectDemo } from "~/demos/ui/select";

const snippet = `import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemLabel,
  SelectLabel,
  SelectListbox,
  SelectPortal,
  SelectTrigger,
  SelectValue,
} from "@solid-kit/ui";

<Select
  options={["Apple", "Banana", "Orange"]}
  placeholder="Pick a fruit"
  itemComponent={(props) => (
    <SelectItem item={props.item}>
      <SelectItemLabel>{props.item.rawValue}</SelectItemLabel>
    </SelectItem>
  )}
>
  <SelectLabel>Fruit</SelectLabel>
  <SelectTrigger>
    <SelectValue>{(state) => state.selectedOption()}</SelectValue>
  </SelectTrigger>
  <SelectPortal>
    <SelectContent>
      <SelectListbox />
    </SelectContent>
  </SelectPortal>
</Select>`;

export default function SelectPage() {
  return (
    <DocsPage title="Select" description="A list of options in a popup." snippet={snippet}>
      <SelectDemo />
    </DocsPage>
  );
}
