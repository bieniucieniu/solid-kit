import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { NavigationDrawerDemo } from "./demos/navigation-drawer";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Navigation drawer",
  component: NavigationDrawerDemo,
  decorators: [withM3],
} satisfies Meta<typeof NavigationDrawerDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
