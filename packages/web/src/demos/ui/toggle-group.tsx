import { ToggleGroup, type ToggleSize, type ToggleVariant } from "@solid-kit/ui";
import { createSignal, For } from "solid-js";
import { VariantRow, VariantStack } from "~/components/preview";

const variants: ToggleVariant[] = ["default", "outline"];
const sizes: ToggleSize[] = ["sm", "default", "lg"];

function Items() {
  return (
    <>
      <ToggleGroup.Item value="left">Left</ToggleGroup.Item>
      <ToggleGroup.Item value="center">Center</ToggleGroup.Item>
      <ToggleGroup.Item value="right">Right</ToggleGroup.Item>
    </>
  );
}

export function ToggleGroupDemo() {
  const [value, setValue] = createSignal<string | null>("left");

  return (
    <VariantStack>
      <VariantRow label="Variants">
        <For each={variants}>
          {(variant) => (
            <ToggleGroup variant={variant} value={value()} onChange={setValue}>
              <Items />
            </ToggleGroup>
          )}
        </For>
      </VariantRow>
      <VariantRow label="Sizes">
        <For each={sizes}>
          {(size) => (
            <ToggleGroup variant="outline" size={size} defaultValue="center">
              <Items />
            </ToggleGroup>
          )}
        </For>
      </VariantRow>
      <VariantRow label="Spacing 0 (joined)">
        <ToggleGroup variant="outline" spacing={0} defaultValue="left">
          <Items />
        </ToggleGroup>
      </VariantRow>
      <VariantRow label="Vertical">
        <ToggleGroup variant="outline" orientation="vertical" spacing={0} defaultValue="left">
          <Items />
        </ToggleGroup>
      </VariantRow>
      <VariantRow label="Multiple">
        <ToggleGroup variant="outline" multiple defaultValue={["left", "right"]}>
          <Items />
        </ToggleGroup>
      </VariantRow>
    </VariantStack>
  );
}
