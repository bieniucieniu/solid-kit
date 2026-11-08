import { Breadcrumb, BreadcrumbLink, BreadcrumbSeparator } from "@solid-kit/ui";

export function BreadcrumbDemo() {
  return (
    <Breadcrumb separator="/">
      <ol>
        <li>
          <BreadcrumbLink href="/ui">UI</BreadcrumbLink>
          <BreadcrumbSeparator />
        </li>
        <li>
          <BreadcrumbLink href="/ui/breadcrumb" current>
            Breadcrumb
          </BreadcrumbLink>
        </li>
      </ol>
    </Breadcrumb>
  );
}
