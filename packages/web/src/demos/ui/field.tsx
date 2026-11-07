import { Field, Switch } from "@solid-kit/ui";

const inputClass =
  "h-7 w-full rounded-md border border-input bg-input/20 px-2 text-xs/relaxed text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 dark:bg-input/30";

export function FieldDemo() {
  return (
    <Field.Set class="w-full max-w-md">
      <Field.Legend>Profile</Field.Legend>
      <Field.Description>Each field below uses a different orientation.</Field.Description>
      <Field.Group>
        <Field orientation="vertical">
          <Field.Label for="field-city">City (vertical)</Field.Label>
          <input id="field-city" class={inputClass} placeholder="Paris" />
          <Field.Description>Where you work.</Field.Description>
        </Field>
        <Field orientation="horizontal">
          <Field.Content>
            <Field.Label for="field-public">Public profile (horizontal)</Field.Label>
            <Field.Description>Anyone can see your name.</Field.Description>
          </Field.Content>
          <Switch id="field-public">
            <Switch.Input />
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
          </Switch>
        </Field>
        <Field orientation="responsive">
          <Field.Content>
            <Field.Label for="field-name">Name (responsive)</Field.Label>
            <Field.Description>Row on wide groups, column on narrow.</Field.Description>
          </Field.Content>
          <input id="field-name" class={inputClass} placeholder="Ada Lovelace" />
        </Field>
        <Field orientation="vertical" data-invalid="true">
          <Field.Label for="field-email">Email</Field.Label>
          <input id="field-email" class={inputClass} aria-invalid="true" value="ada@" />
          <Field.Error>Enter a valid email.</Field.Error>
        </Field>
      </Field.Group>
    </Field.Set>
  );
}
