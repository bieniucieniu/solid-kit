import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { SplitButtonDemo } from "../../web/src/demos/m3/split-button";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Split button",
  component: SplitButtonDemo,
  decorators: [withM3],
} satisfies Meta<typeof SplitButtonDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
