import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { ColorSchemeDemo } from "./demos/color-scheme";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Color scheme",
  component: ColorSchemeDemo,
  decorators: [withM3],
} satisfies Meta<typeof ColorSchemeDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
