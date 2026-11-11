import { DocsPage } from "~/components/preview";
import { SearchDemo } from "~/demos/m3/search";

const snippet = `import { Search, SearchContent, SearchControl, SearchInput, SearchItem, SearchItemLabel, SearchListbox, SearchPortal } from "@solid-kit/m3";

<Search
  options={options()}
  onInputChange={filter}
  itemComponent={(props) => (
    <SearchItem item={props.item}>
      <SearchItemLabel>{props.item.rawValue}</SearchItemLabel>
    </SearchItem>
  )}
>
  <SearchControl>
    <SearchInput placeholder="Search" />
  </SearchControl>
  <SearchPortal>
    <SearchContent>
      <SearchListbox />
    </SearchContent>
  </SearchPortal>
</Search>`;

export default function SearchPage() {
  return (
    <DocsPage
      title="Search"
      description="A search bar with a docked results view."
      snippet={snippet}
      previewClass="bg-surface text-on-surface"
    >
      <SearchDemo />
    </DocsPage>
  );
}
