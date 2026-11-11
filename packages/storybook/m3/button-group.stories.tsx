import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { ButtonGroupDemo } from "../../web/src/demos/m3/button-group";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Button group",
  component: ButtonGroupDemo,
  decorators: [withM3],
} satisfies Meta<typeof ButtonGroupDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
