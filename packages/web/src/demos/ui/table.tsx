import { Table } from "@solid-kit/ui";

export function TableDemo() {
  return (
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
        <Table.Row>
          <Table.Cell>Grace</Table.Cell>
          <Table.Cell>Editor</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
