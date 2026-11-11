import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { SegmentedButtonDemo } from "../../web/src/demos/m3/segmented-button";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Segmented button",
  component: SegmentedButtonDemo,
  decorators: [withM3],
} satisfies Meta<typeof SegmentedButtonDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
