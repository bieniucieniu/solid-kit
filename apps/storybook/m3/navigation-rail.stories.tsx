import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { NavigationRailDemo } from "./demos/navigation-rail";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Navigation rail",
  component: NavigationRailDemo,
  decorators: [withM3],
} satisfies Meta<typeof NavigationRailDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
