import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { SwitchDemo } from "./demos/switch";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Switch",
  component: SwitchDemo,
  decorators: [withM3],
} satisfies Meta<typeof SwitchDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
