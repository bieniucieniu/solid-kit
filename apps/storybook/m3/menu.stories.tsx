import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { MenuDemo } from "./demos/menu";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Menu",
  component: MenuDemo,
  decorators: [withM3],
} satisfies Meta<typeof MenuDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
