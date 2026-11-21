import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { SearchDemo } from "./demos/search";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Search",
  component: SearchDemo,
  decorators: [withM3],
} satisfies Meta<typeof SearchDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
