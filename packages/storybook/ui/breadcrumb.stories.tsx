import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Breadcrumb } from "../../ui/src/components/breadcrumb";

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
