import { DocsPage } from "~/components/preview";
import { TabsDemo } from "~/demos/ui/tabs";

const snippet = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@solid-kit/ui";

// TabsList variant: "default" | "line"   Tabs orientation: "horizontal" | "vertical"
<Tabs defaultValue="account">
  <TabsList variant="line">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account settings.</TabsContent>
  <TabsContent value="password">Password settings.</TabsContent>
</Tabs>`;

export default function TabsPage() {
  return (
    <DocsPage title="Tabs" description="Switch between panels." snippet={snippet}>
      <TabsDemo />
    </DocsPage>
  );
}
