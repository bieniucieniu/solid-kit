import { For } from "solid-js";
import { DemoRow, DemoStack } from "./shared";

const roles = [
  ["bg-primary text-on-primary", "primary"],
  ["bg-primary-container text-on-primary-container", "primary-container"],
  ["bg-secondary text-on-secondary", "secondary"],
  ["bg-secondary-container text-on-secondary-container", "secondary-container"],
  ["bg-tertiary text-on-tertiary", "tertiary"],
  ["bg-tertiary-container text-on-tertiary-container", "tertiary-container"],
  ["bg-error text-on-error", "error"],
  ["bg-error-container text-on-error-container", "error-container"],
  ["bg-inverse-surface text-inverse-on-surface", "inverse-surface"],
] as const;

const surfaces = [
  ["bg-surface-container-lowest", "lowest"],
  ["bg-surface-container-low", "low"],
  ["bg-surface-container", "container"],
  ["bg-surface-container-high", "high"],
  ["bg-surface-container-highest", "highest"],
] as const;

const typescale = [
  ["typescale-display-large", "Display large"],
  ["typescale-display-medium", "Display medium"],
  ["typescale-display-small", "Display small"],
  ["typescale-headline-large", "Headline large"],
  ["typescale-headline-medium", "Headline medium"],
  ["typescale-headline-small", "Headline small"],
  ["typescale-title-large", "Title large"],
  ["typescale-title-medium", "Title medium"],
  ["typescale-title-small", "Title small"],
  ["typescale-body-large", "Body large"],
  ["typescale-body-medium", "Body medium"],
  ["typescale-body-small", "Body small"],
  ["typescale-label-large", "Label large"],
  ["typescale-label-medium", "Label medium"],
  ["typescale-label-small", "Label small"],
] as const;

const shapes = [
  ["rounded-none", "none"],
  ["rounded-extra-small", "extra-small"],
  ["rounded-small", "small"],
  ["rounded-medium", "medium"],
  ["rounded-large", "large"],
  ["rounded-large-increased", "large-increased"],
  ["rounded-extra-large", "extra-large"],
  ["rounded-extra-large-increased", "extra-large-increased"],
  ["rounded-extra-extra-large", "extra-extra-large"],
  ["rounded-full", "full"],
] as const;

const levels = [
  "shadow-level-0",
  "shadow-level-1",
  "shadow-level-2",
  "shadow-level-3",
  "shadow-level-4",
  "shadow-level-5",
] as const;

export function FoundationsDemo() {
  return (
    <DemoStack>
      <DemoRow label="Color roles" class="grid grid-cols-1 gap-2 medium:grid-cols-3">
        <For each={roles}>
          {([classes, name]) => (
            <div class={`rounded-medium p-4 typescale-label-large ${classes}`}>{name}</div>
          )}
        </For>
      </DemoRow>
      <DemoRow label="Surface containers" class="grid grid-cols-5 gap-2">
        <For each={surfaces}>
          {([classes, name]) => (
            <div
              class={`flex h-20 items-end rounded-medium p-2 typescale-label-small text-on-surface ring-1 ring-outline-variant ${classes}`}
            >
              {name}
            </div>
          )}
        </For>
      </DemoRow>
      <DemoRow label="Type scale" class="flex-col items-start gap-1">
        <For each={typescale}>{([classes, name]) => <span class={classes}>{name}</span>}</For>
      </DemoRow>
      <DemoRow label="Shape" class="gap-4">
        <For each={shapes}>
          {([classes, name]) => (
            <div class="flex flex-col items-center gap-1">
              <div class={`size-16 bg-primary-container ${classes}`} />
              <span class="typescale-label-small text-on-surface-variant">{name}</span>
            </div>
          )}
        </For>
      </DemoRow>
      <DemoRow label="Elevation" class="gap-6">
        <For each={levels}>
          {(classes, index) => (
            <div
              class={`flex size-20 items-center justify-center rounded-medium bg-surface-container-low typescale-label-medium ${classes}`}
            >
              {index()}
            </div>
          )}
        </For>
      </DemoRow>
    </DemoStack>
  );
}
