import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { BadgeDemo } from "../../web/src/demos/m3/badge";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Badge",
  component: BadgeDemo,
  decorators: [withM3],
} satisfies Meta<typeof BadgeDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
