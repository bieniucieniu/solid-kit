import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { BottomSheetDemo } from "../../web/src/demos/m3/bottom-sheet";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Bottom sheet",
  component: BottomSheetDemo,
  decorators: [withM3],
} satisfies Meta<typeof BottomSheetDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
