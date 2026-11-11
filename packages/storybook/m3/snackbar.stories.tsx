import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { SnackbarDemo } from "../../web/src/demos/m3/snackbar";
import { withM3 } from "./m3-decorator";

const meta = {
  title: "M3/Snackbar",
  component: SnackbarDemo,
  decorators: [withM3],
} satisfies Meta<typeof SnackbarDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
