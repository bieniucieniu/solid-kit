import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { DialogDemo } from "./demos/dialog";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Dialog",
  component: DialogDemo,
  decorators: [withM3],
} satisfies Meta<typeof DialogDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
