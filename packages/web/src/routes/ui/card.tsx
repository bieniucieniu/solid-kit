import { DocsPage } from "~/components/preview";
import { CardDemo } from "~/demos/ui/card";

const snippet = `import { Button, Card } from "@solid-kit/ui";

<Card>
  <Card.Header>
    <Card.Title>Project</Card.Title>
    <Card.Description>A short summary of the work.</Card.Description>
  </Card.Header>
  <Card.Content>Three open tasks.</Card.Content>
  <Card.Footer>
    <Button>Save</Button>
  </Card.Footer>
</Card>`;

export default function CardPage() {
  return (
    <DocsPage
      title="Card"
      description="A bordered block with a header and footer."
      snippet={snippet}
    >
      <CardDemo />
    </DocsPage>
  );
}
