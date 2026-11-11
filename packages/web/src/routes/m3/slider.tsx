import { DocsPage } from "~/components/preview";
import { SliderDemo } from "~/demos/m3/slider";

const snippet = `import { Slider, SliderFill, SliderInput, SliderLabel, SliderThumb, SliderTrack } from "@solid-kit/m3";

<Slider defaultValue={[40]}>
  <SliderLabel>Volume</SliderLabel>
  <SliderTrack>
    <SliderFill />
    <SliderThumb><SliderInput /></SliderThumb>
  </SliderTrack>
</Slider>`;

export default function SliderPage() {
  return (
    <DocsPage
      title="Slider"
      description="Pick a value or range. Expressive bar handle with a gap in the track."
      snippet={snippet}
      previewClass="bg-surface text-on-surface"
    >
      <SliderDemo />
    </DocsPage>
  );
}
