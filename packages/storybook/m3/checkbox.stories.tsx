import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { CheckboxDemo } from "../../web/src/demos/m3/checkbox";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Checkbox",
  component: CheckboxDemo,
  decorators: [withM3],
} satisfies Meta<typeof CheckboxDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
