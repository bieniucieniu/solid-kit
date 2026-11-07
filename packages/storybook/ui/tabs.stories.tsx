import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Tabs } from "../../ui/src/components/tabs";

const meta = {
  title: "UI/Tabs",
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <TabsDemo />,
};

function TabsDemo() {
  return (
    <Tabs defaultValue="account">
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">Password</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">Account settings.</Tabs.Content>
      <Tabs.Content value="password">Password settings.</Tabs.Content>
    </Tabs>
  );
}
