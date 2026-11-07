import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { For } from "solid-js";
import { NavigationMenu } from "../../ui/src/components/navigation-menu";

const meta = {
  title: "UI/NavigationMenu",
  component: NavigationMenu,
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <NavigationMenuDemo />,
};

const gettingStarted = [
  { title: "Introduction", href: "/", description: "What solid-kit is and how the packages fit." },
  { title: "Installation", href: "/ui", description: "Add components with the shadcn CLI." },
  { title: "Theming", href: "/ui", description: "CSS variables, dark mode, and radius tokens." },
  { title: "Registry", href: "/ui", description: "Copy the source into your own project." },
];

const components = [
  { title: "Button", href: "/ui/button" },
  { title: "Dialog", href: "/ui/dialog" },
  { title: "Dropdown menu", href: "/ui/dropdown-menu" },
  { title: "Tabs", href: "/ui/tabs" },
  { title: "Tooltip", href: "/ui/tooltip" },
];

const packages = [
  { title: "@solid-kit/ui", href: "/ui", description: "shadcn-style components on Kobalte." },
  { title: "@solid-kit/tiptap", href: "/", description: "Tiptap editor bindings for Solid." },
];

function NavigationMenuDemo() {
  // The viewport renders below the list, so leave room for it inside clipped previews.
  return (
    <div class="min-h-64">
      <NavigationMenu>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Getting started</NavigationMenu.Trigger>
          <NavigationMenu.Content class="grid w-96 grid-cols-2 gap-1">
            <For each={gettingStarted}>
              {(item) => (
                <NavigationMenu.Link href={item.href} class="flex-col items-start gap-0.5">
                  <span class="font-medium">{item.title}</span>
                  <span class="text-muted-foreground">{item.description}</span>
                </NavigationMenu.Link>
              )}
            </For>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Components</NavigationMenu.Trigger>
          <NavigationMenu.Content class="w-48">
            <For each={components}>
              {(item) => <NavigationMenu.Link href={item.href}>{item.title}</NavigationMenu.Link>}
            </For>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Packages</NavigationMenu.Trigger>
          <NavigationMenu.Content class="w-72">
            <For each={packages}>
              {(item) => (
                <NavigationMenu.Link href={item.href} class="flex-col items-start gap-0.5">
                  <span class="font-medium">{item.title}</span>
                  <span class="text-muted-foreground">{item.description}</span>
                </NavigationMenu.Link>
              )}
            </For>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Trigger href="https://github.com/bieniucieniu/solid-kit">
          GitHub
        </NavigationMenu.Trigger>
      </NavigationMenu>
    </div>
  );
}
