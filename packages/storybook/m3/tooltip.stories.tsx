import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { TooltipDemo } from "../../web/src/demos/m3/tooltip";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Tooltip",
  component: TooltipDemo,
  decorators: [withM3],
} satisfies Meta<typeof TooltipDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
