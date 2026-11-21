import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { CardDemo } from "./demos/card";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Card",
  component: CardDemo,
  decorators: [withM3],
} satisfies Meta<typeof CardDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
