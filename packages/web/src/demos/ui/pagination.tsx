import { Pagination } from "@solid-kit/ui";
import { createSignal } from "solid-js";

export function PaginationDemo() {
  const [page, setPage] = createSignal(1);

  return (
    <div class="flex flex-col gap-3">
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
      </Pagination>
      <p class="text-sm text-muted-foreground">Page {page()}</p>
    </div>
  );
}
