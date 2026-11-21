import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { SliderDemo } from "./demos/slider";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Slider",
  component: SliderDemo,
  decorators: [withM3],
} satisfies Meta<typeof SliderDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
