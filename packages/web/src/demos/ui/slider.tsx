import { Slider } from "@solid-kit/ui";
import { createSignal } from "solid-js";

export function SliderDemo() {
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
