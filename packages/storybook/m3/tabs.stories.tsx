import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { TabsDemo } from "../../web/src/demos/m3/tabs";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Tabs",
  component: TabsDemo,
  decorators: [withM3],
} satisfies Meta<typeof TabsDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
