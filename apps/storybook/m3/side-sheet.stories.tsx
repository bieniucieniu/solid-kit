import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { SideSheetDemo } from "./demos/side-sheet";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Side sheet",
  component: SideSheetDemo,
  decorators: [withM3],
} satisfies Meta<typeof SideSheetDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
