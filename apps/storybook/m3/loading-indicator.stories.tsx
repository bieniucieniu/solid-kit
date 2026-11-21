import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { LoadingIndicatorDemo } from "./demos/loading-indicator";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Loading indicator",
  component: LoadingIndicatorDemo,
  decorators: [withM3],
} satisfies Meta<typeof LoadingIndicatorDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
