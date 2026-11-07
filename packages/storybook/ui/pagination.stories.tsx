import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Pagination } from "../../ui/src/components/pagination";
import { createSignal } from "solid-js";

const meta = {
  title: "UI/Pagination",
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <PaginationDemo />,
};

function PaginationDemo() {
  const [page, setPage] = createSignal(1);

  return (
    <div class="flex flex-col gap-3">
      <Pagination
        count={10}
        page={page()}
        onPageChange={setPage}
        itemComponent={(props) => <Pagination.Item page={props.page}>{props.page}</Pagination.Item>}
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
