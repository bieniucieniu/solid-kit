import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { FabMenuDemo } from "./demos/fab-menu";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/FAB menu",
  component: FabMenuDemo,
  decorators: [withM3],
} satisfies Meta<typeof FabMenuDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
