import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { ScrollAreaDemo } from "../../web/src/demos/m3/scroll-area";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Scroll area",
  component: ScrollAreaDemo,
  decorators: [withM3],
} satisfies Meta<typeof ScrollAreaDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
