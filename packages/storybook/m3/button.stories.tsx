import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { ButtonDemo } from "../../web/src/demos/m3/button";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Button",
  component: ButtonDemo,
  decorators: [withM3],
} satisfies Meta<typeof ButtonDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
