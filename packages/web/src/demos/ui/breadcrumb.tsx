import { Breadcrumb } from "@solid-kit/ui";

export function BreadcrumbDemo() {
  return (
    <Breadcrumb separator="/">
      <ol>
        <li>
          <Breadcrumb.Link href="/ui">UI</Breadcrumb.Link>
          <Breadcrumb.Separator />
        </li>
        <li>
          <Breadcrumb.Link href="/ui/breadcrumb" current>
            Breadcrumb
          </Breadcrumb.Link>
        </li>
      </ol>
    </Breadcrumb>
  );
}
