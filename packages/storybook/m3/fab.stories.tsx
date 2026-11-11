import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { FabDemo } from "../../web/src/demos/m3/fab";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/FAB",
  component: FabDemo,
  decorators: [withM3],
} satisfies Meta<typeof FabDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
