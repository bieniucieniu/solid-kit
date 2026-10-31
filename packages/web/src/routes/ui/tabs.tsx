import { DocsPage } from "~/components/preview";
import { TabsDemo } from "~/demos/ui/tabs";

const snippet = `import { Tabs } from "@solid-kit/ui";

<Tabs defaultValue="account">
  <Tabs.List>
    <Tabs.Trigger value="account">Account</Tabs.Trigger>
    <Tabs.Trigger value="password">Password</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="account">Account settings.</Tabs.Content>
  <Tabs.Content value="password">Password settings.</Tabs.Content>
</Tabs>`;

export default function TabsPage() {
  return (
    <DocsPage title="Tabs" description="Switch between panels." snippet={snippet}>
      <TabsDemo />
    </DocsPage>
  );
}
