import { DocsPage } from "~/components/preview";
import { SliderDemo } from "~/demos/ui/slider";
import source from "~/demos/ui/slider.tsx?raw";

const snippet = `import {
  Slider,
  SliderFill,
  SliderLabel,
  SliderThumb,
  SliderTrack,
  SliderValueLabel,
} from "@solid-kit/ui";

<Slider value={value()} onChange={setValue} minValue={0} maxValue={100}>
  <SliderLabel>Volume</SliderLabel>
  <SliderValueLabel />
  <SliderTrack>
    <SliderFill />
    <SliderThumb />
  </SliderTrack>
</Slider>`;

export default function SliderPage() {
  return (
    <DocsPage
      title="Slider"
      description="A draggable value on a track."
      snippet={snippet}
      source={source}
      sourceTitle="demos/ui/slider.tsx"
    >
      <SliderDemo />
    </DocsPage>
  );
}
