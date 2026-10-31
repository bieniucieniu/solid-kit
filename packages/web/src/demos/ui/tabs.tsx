import { Tabs } from "@solid-kit/ui";

export function TabsDemo() {
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
