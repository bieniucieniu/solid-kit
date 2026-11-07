import { Tabs } from "@solid-kit/ui";
import { For } from "solid-js";
import { VariantRow, VariantStack } from "~/components/preview";

const variants = ["default", "line"] as const;

export function TabsDemo() {
  return (
    <VariantStack>
      <For each={variants}>
        {(variant) => (
          <VariantRow label={variant}>
            <Tabs defaultValue="account">
              <Tabs.List variant={variant}>
                <Tabs.Trigger value="account">Account</Tabs.Trigger>
                <Tabs.Trigger value="password">Password</Tabs.Trigger>
                <Tabs.Trigger value="team">Team</Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="account">Account settings.</Tabs.Content>
              <Tabs.Content value="password">Password settings.</Tabs.Content>
              <Tabs.Content value="team">Team settings.</Tabs.Content>
            </Tabs>
          </VariantRow>
        )}
      </For>
      <VariantRow label="Vertical">
        <Tabs defaultValue="account" orientation="vertical">
          <Tabs.List>
            <Tabs.Trigger value="account">Account</Tabs.Trigger>
            <Tabs.Trigger value="password">Password</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="account">Account settings.</Tabs.Content>
          <Tabs.Content value="password">Password settings.</Tabs.Content>
        </Tabs>
      </VariantRow>
    </VariantStack>
  );
}
