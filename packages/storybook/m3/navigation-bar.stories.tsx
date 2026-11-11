import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { NavigationBarDemo } from "../../web/src/demos/m3/navigation-bar";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Navigation bar",
  component: NavigationBarDemo,
  decorators: [withM3],
} satisfies Meta<typeof NavigationBarDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
