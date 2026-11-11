import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { AppBarDemo } from "../../web/src/demos/m3/app-bar";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/App bar",
  component: AppBarDemo,
  decorators: [withM3],
} satisfies Meta<typeof AppBarDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
