import { DocsPage } from "~/components/preview";
import { SliderDemo } from "~/demos/ui/slider";

const snippet = `import { Slider } from "@solid-kit/ui";

<Slider value={value()} onChange={setValue} minValue={0} maxValue={100}>
  <Slider.Label>Volume</Slider.Label>
  <Slider.ValueLabel />
  <Slider.Track>
    <Slider.Fill />
    <Slider.Thumb />
  </Slider.Track>
</Slider>`;

export default function SliderPage() {
  return (
    <DocsPage title="Slider" description="A draggable value on a track." snippet={snippet}>
      <SliderDemo />
    </DocsPage>
  );
}
