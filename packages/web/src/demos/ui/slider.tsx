import {
  Slider,
  SliderFill,
  SliderLabel,
  SliderThumb,
  SliderTrack,
  SliderValueLabel,
} from "@solid-kit/ui";
import { createSignal } from "solid-js";

export function SliderDemo() {
  const [value, setValue] = createSignal([40]);

  return (
    <Slider class="max-w-xs" value={value()} onChange={setValue} minValue={0} maxValue={100}>
      <SliderLabel>Volume</SliderLabel>
      <SliderValueLabel />
      <SliderTrack>
        <SliderFill />
        <SliderThumb />
      </SliderTrack>
    </Slider>
  );
}
