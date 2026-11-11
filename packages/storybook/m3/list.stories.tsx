import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { ListDemo } from "../../web/src/demos/m3/list";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/List",
  component: ListDemo,
  decorators: [withM3],
} satisfies Meta<typeof ListDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
