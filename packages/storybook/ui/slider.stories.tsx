import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Slider } from "../../ui/src/components/slider";
import { createSignal } from "solid-js";

const meta = {
  title: "UI/Slider",
  component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <SliderDemo />,
};

function SliderDemo() {
  const [value, setValue] = createSignal([40]);

  return (
    <Slider class="max-w-xs" value={value()} onChange={setValue} minValue={0} maxValue={100}>
      <Slider.Label>Volume</Slider.Label>
      <Slider.ValueLabel />
      <Slider.Track>
        <Slider.Fill />
        <Slider.Thumb />
      </Slider.Track>
    </Slider>
  );
}
