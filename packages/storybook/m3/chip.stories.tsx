import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { ChipDemo } from "../../web/src/demos/m3/chip";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Chips",
  component: ChipDemo,
  decorators: [withM3],
} satisfies Meta<typeof ChipDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
