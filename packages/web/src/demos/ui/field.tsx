import { Field } from "@solid-kit/ui";

export function FieldDemo() {
  return (
    <Field class="max-w-xs">
      <Field.Label for="city">City</Field.Label>
      <input
        id="city"
        class="rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
        placeholder="Paris"
      />
      <Field.Description>Where you work.</Field.Description>
    </Field>
  );
}
