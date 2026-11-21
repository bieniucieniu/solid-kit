import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { ProgressDemo } from "./demos/progress";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Progress",
  component: ProgressDemo,
  decorators: [withM3],
} satisfies Meta<typeof ProgressDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
