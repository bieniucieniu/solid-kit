import {
  Pagination,
  PaginationEllipsis,
  PaginationItem,
  PaginationItems,
  PaginationNext,
  PaginationPrevious,
} from "@solid-kit/ui";
import { createSignal } from "solid-js";

export function PaginationDemo() {
  const [page, setPage] = createSignal(1);

  return (
    <div class="flex flex-col gap-3">
      <Pagination
        count={10}
        page={page()}
        onPageChange={setPage}
        itemComponent={(props) => <PaginationItem page={props.page}>{props.page}</PaginationItem>}
        ellipsisComponent={() => <PaginationEllipsis />}
      >
        <PaginationPrevious />
        <PaginationItems />
        <PaginationNext />
      </Pagination>
      <p class="text-sm text-muted-foreground">Page {page()}</p>
    </div>
  );
}
