import { DocsPage } from "~/components/preview";
import { TableDemo } from "~/demos/ui/table";

const snippet = `import { Table } from "@solid-kit/ui";

<Table>
  <Table.Header>
    <Table.Row>
      <Table.Head>Name</Table.Head>
      <Table.Head>Role</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Ada</Table.Cell>
      <Table.Cell>Admin</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>`;

export default function TablePage() {
  return (
    <DocsPage title="Table" description="Rows and columns of data." snippet={snippet}>
      <TableDemo />
    </DocsPage>
  );
}
