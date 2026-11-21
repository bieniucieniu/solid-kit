import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { TextFieldDemo } from "./demos/text-field";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Text field",
  component: TextFieldDemo,
  decorators: [withM3],
} satisfies Meta<typeof TextFieldDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
