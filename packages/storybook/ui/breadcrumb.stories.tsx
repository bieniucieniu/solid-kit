import type { Meta, StoryObj } from "storybook-solidjs-vite";
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "../../ui/src/components/breadcrumb";

const meta = {
  title: "UI/Breadcrumb",
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <BreadcrumbDemo />,
};

function BreadcrumbDemo() {
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
