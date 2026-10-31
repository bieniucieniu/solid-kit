import { DocsPage } from "~/components/preview";
import { PaginationDemo } from "~/demos/ui/pagination";

const snippet = `import { Pagination } from "@solid-kit/ui";

<Pagination
  count={10}
  page={page()}
  onPageChange={setPage}
  itemComponent={(props) => (
    <Pagination.Item page={props.page}>{props.page}</Pagination.Item>
  )}
  ellipsisComponent={() => <Pagination.Ellipsis />}
>
  <Pagination.Previous />
  <Pagination.Items />
  <Pagination.Next />
</Pagination>`;

export default function PaginationPage() {
  return (
    <DocsPage title="Pagination" description="Controls for moving between pages." snippet={snippet}>
      <PaginationDemo />
    </DocsPage>
  );
}
