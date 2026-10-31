import { DocsPage } from "~/components/preview";
import { SpinnerDemo } from "~/demos/ui/spinner";

const snippet = `import { Spinner } from "@solid-kit/ui";

<Spinner />`;

export default function SpinnerPage() {
  return (
    <DocsPage title="Spinner" description="An indicator that something is loading." snippet={snippet}>
      <SpinnerDemo />
    </DocsPage>
  );
}
