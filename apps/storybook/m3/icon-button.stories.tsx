import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { IconButtonDemo } from "./demos/icon-button";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Icon button",
  component: IconButtonDemo,
  decorators: [withM3],
} satisfies Meta<typeof IconButtonDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
