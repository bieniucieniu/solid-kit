import { DocsPage } from "~/components/preview";
import { TableDemo } from "~/demos/ui/table";

const snippet = `import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@solid-kit/ui";

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Ada</TableCell>
      <TableCell>Admin</TableCell>
    </TableRow>
  </TableBody>
</Table>`;

export default function TablePage() {
  return (
    <DocsPage title="Table" description="Rows and columns of data." snippet={snippet}>
      <TableDemo />
    </DocsPage>
  );
}
