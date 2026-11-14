import { DocsPage } from "~/components/preview";
import { PaginationDemo } from "~/demos/ui/pagination";
import source from "~/demos/ui/pagination.tsx?raw";

const snippet = `import {
  Pagination,
  PaginationEllipsis,
  PaginationItem,
  PaginationItems,
  PaginationNext,
  PaginationPrevious,
} from "@solid-kit/ui";

<Pagination
  count={10}
  page={page()}
  onPageChange={setPage}
  itemComponent={(props) => (
    <PaginationItem page={props.page}>{props.page}</PaginationItem>
  )}
  ellipsisComponent={() => <PaginationEllipsis />}
>
  <PaginationPrevious />
  <PaginationItems />
  <PaginationNext />
</Pagination>`;

export default function PaginationPage() {
  return (
    <DocsPage
      title="Pagination"
      description="Controls for moving between pages."
      snippet={snippet}
      source={source}
      sourceTitle="demos/ui/pagination.tsx"
    >
      <PaginationDemo />
    </DocsPage>
  );
}
