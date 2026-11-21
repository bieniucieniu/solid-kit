import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { FoundationsDemo } from "./demos/foundations";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Foundations",
  component: FoundationsDemo,
  decorators: [withM3],
} satisfies Meta<typeof FoundationsDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
