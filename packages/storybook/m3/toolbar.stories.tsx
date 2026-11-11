import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { ToolbarDemo } from "../../web/src/demos/m3/toolbar";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Toolbar",
  component: ToolbarDemo,
  decorators: [withM3],
} satisfies Meta<typeof ToolbarDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
