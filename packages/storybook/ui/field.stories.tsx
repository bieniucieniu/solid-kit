import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Field } from "../../ui/src/components/field";

const meta = {
  title: "UI/Field",
  component: Field,
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <FieldDemo />,
};

function FieldDemo() {
  return (
    <Field class="max-w-xs">
      <Field.Label for="city">City</Field.Label>
      <input
        id="city"
        class="h-7 w-full rounded-md border border-input bg-input/20 px-2 text-xs/relaxed text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 dark:bg-input/30"
        placeholder="Paris"
      />
      <Field.Description>Where you work.</Field.Description>
    </Field>
  );
}
