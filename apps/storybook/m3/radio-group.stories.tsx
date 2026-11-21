import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { RadioGroupDemo } from "./demos/radio-group";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Radio group",
  component: RadioGroupDemo,
  decorators: [withM3],
} satisfies Meta<typeof RadioGroupDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
