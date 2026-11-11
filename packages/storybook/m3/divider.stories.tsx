import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { DividerDemo } from "../../web/src/demos/m3/divider";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Divider",
  component: DividerDemo,
  decorators: [withM3],
} satisfies Meta<typeof DividerDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
