import {
  Combobox as SearchRootPrimitive,
  ComboboxContent as ComboboxContentPrimitive,
  ComboboxInput as ComboboxInputPrimitive,
  ComboboxItem as ComboboxItemPrimitive,
  ComboboxItemText as ComboboxItemTextPrimitive,
  ComboboxLabel as ComboboxLabelPrimitive,
  ComboboxList as ComboboxListPrimitive,
  ComboboxEmpty as ComboboxEmptyPrimitive,
  ComboboxGroupLabel as ComboboxGroupLabelPrimitive,
} from "@ui-sdk/solid/combobox";
import { type JSX } from "@solidjs/web";
import { type ComponentProps, omit } from "solid-js";
import { cn, partClass } from "#/lib/utils";

type SearchLabelProps = ComponentProps<typeof ComboboxLabelPrimitive>;
type SearchControlProps = JSX.HTMLAttributes<HTMLDivElement>;
type SearchInputProps = ComponentProps<typeof ComboboxInputPrimitive>;
type SearchIndicatorProps = JSX.HTMLAttributes<HTMLSpanElement>;
type SearchContentProps = ComponentProps<typeof ComboboxContentPrimitive>;
type SearchListboxProps = ComponentProps<typeof ComboboxListPrimitive>;
type SearchItemProps = ComponentProps<typeof ComboboxItemPrimitive>;
type SearchItemLabelProps = ComponentProps<typeof ComboboxItemTextPrimitive>;
type SearchItemDescriptionProps = JSX.HTMLAttributes<HTMLSpanElement>;
type SearchSectionProps = ComponentProps<typeof ComboboxGroupLabelPrimitive>;
type SearchNoResultProps = ComponentProps<typeof ComboboxEmptyPrimitive>;
type SearchDescriptionProps = JSX.HTMLAttributes<HTMLSpanElement>;

/**
 * Search bar with a docked results view, on ui-sdk's Combobox. It renders no element: put
 * SearchLabel, SearchControl and SearchContent inside, in a layout element of your own. Items are
 * `SearchItem` children or `items` data; `query` / `onQueryChange` follow the typed text.
 */
export const Search = SearchRootPrimitive;

export function SearchLabel(props: SearchLabelProps) {
  const rest = omit(props, "class");
  return (
    <ComboboxLabelPrimitive
      class={partClass(() => cn("px-4 typescale-title-small text-on-surface"), props.class)}
      {...rest}
    />
  );
}

/** The 56px pill. Holds SearchLeading, SearchInput, SearchIndicator, and SearchTrailing. */
export function SearchControl(props: SearchControlProps) {
  const rest = omit(props, "class", "ref");
  return (
    <div
      ref={props.ref}
      data-slot="search-control"
      class={cn(
        "relative flex h-14 w-full items-center gap-1 rounded-full bg-surface-container-high px-1 state-layer motion-fast [--state-layer-color:var(--md-sys-color-on-surface)] focus-within:outline-3 focus-within:outline-offset-2 focus-within:outline-secondary data-disabled:opacity-38 has-[>[data-slot=search-leading]]:pl-0 has-[>[data-slot=search-trailing]]:pr-0",
        props.class,
      )}
      {...rest}
    />
  );
}

/** Leading icon or icon button, such as a menu or back arrow. */
export function SearchLeading(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  const rest = omit(props, "class", "ref");
  return (
    <span
      ref={props.ref}
      data-slot="search-leading"
      class={cn(
        "flex shrink-0 items-center justify-center pl-1 text-on-surface [&>svg]:mx-3 [&_svg:not([class*='size-'])]:size-6",
        props.class,
      )}
      {...rest}
    />
  );
}

/** Trailing icon buttons or an avatar. */
export function SearchTrailing(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  const rest = omit(props, "class", "ref");
  return (
    <span
      ref={props.ref}
      data-slot="search-trailing"
      class={cn(
        "flex shrink-0 items-center gap-1 pr-1 text-on-surface-variant [&>svg]:mx-3 [&_svg:not([class*='size-'])]:size-6 [&>img]:mx-1 [&>img]:size-8 [&>img]:rounded-full",
        props.class,
      )}
      {...rest}
    />
  );
}

export function SearchInput(props: SearchInputProps) {
  const rest = omit(props, "class");
  return (
    <ComboboxInputPrimitive
      class={partClass(
        () =>
          cn(
            "h-full min-w-0 flex-1 bg-transparent px-3 typescale-body-large text-on-surface caret-primary outline-none placeholder:text-on-surface-variant [&::-webkit-search-cancel-button]:hidden",
          ),
        props.class,
      )}
      {...rest}
    />
  );
}

/** Shows `loadingComponent` while results are loading, otherwise its children. */
export function SearchIndicator(props: SearchIndicatorProps) {
  const rest = omit(props, "class", "ref");
  return (
    <span
      ref={props.ref}
      data-slot="search-indicator"
      class={cn(
        "flex shrink-0 items-center justify-center text-on-surface-variant [&_svg:not([class*='size-'])]:size-6",
        props.class,
      )}
      {...rest}
    />
  );
}

/** The docked results view, as wide as the bar. */
export function SearchContent(props: SearchContentProps) {
  const rest = omit(props, "class");
  return (
    <ComboboxContentPrimitive
      class={partClass(
        () =>
          cn(
            "relative z-50 max-h-(--available-height) min-w-(--anchor-width) origin-(--transform-origin) overflow-hidden rounded-extra-large bg-surface-container-high py-2 text-on-surface shadow-level-3 outline-none transition-[opacity,scale] duration-150 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0",
          ),
        props.class,
      )}
      {...rest}
    />
  );
}

export function SearchListbox(props: SearchListboxProps) {
  const rest = omit(props, "class");
  return (
    <ComboboxListPrimitive
      class={partClass(() => cn("max-h-96 overflow-y-auto outline-none"), props.class)}
      {...rest}
    />
  );
}

export function SearchItem(props: SearchItemProps) {
  const rest = omit(props, "class");
  return (
    <ComboboxItemPrimitive
      class={partClass(
        () =>
          cn(
            "relative flex min-h-14 cursor-pointer items-center gap-4 px-4 py-2 text-on-surface outline-none select-none state-layer data-disabled:pointer-events-none data-disabled:text-on-surface/38 [&_svg]:shrink-0 [&_svg]:text-on-surface-variant [&_svg:not([class*='size-'])]:size-6",
          ),
        props.class,
      )}
      {...rest}
    />
  );
}

export function SearchItemLabel(props: SearchItemLabelProps) {
  const rest = omit(props, "class");
  return (
    <ComboboxItemTextPrimitive
      class={partClass(() => cn("block typescale-body-large"), props.class)}
      {...rest}
    />
  );
}

export function SearchItemDescription(props: SearchItemDescriptionProps) {
  const rest = omit(props, "class", "ref");
  return (
    <span
      ref={props.ref}
      data-slot="search-item-description"
      class={cn("block typescale-body-medium text-on-surface-variant", props.class)}
      {...rest}
    />
  );
}

export function SearchSection(props: SearchSectionProps) {
  const rest = omit(props, "class");
  return (
    <ComboboxGroupLabelPrimitive
      class={partClass(
        () => cn("px-4 pt-3 pb-1 typescale-title-small text-on-surface-variant"),
        props.class,
      )}
      {...rest}
    />
  );
}

export function SearchNoResult(props: SearchNoResultProps) {
  const rest = omit(props, "class");
  return (
    <ComboboxEmptyPrimitive
      class={partClass(
        () => cn("block px-4 py-3 typescale-body-medium text-on-surface-variant"),
        props.class,
      )}
      {...rest}
    />
  );
}

export function SearchDescription(props: SearchDescriptionProps) {
  const rest = omit(props, "class", "ref");
  return (
    <span
      ref={props.ref}
      data-slot="search-description"
      class={cn("px-4 typescale-body-small text-on-surface-variant", props.class)}
      {...rest}
    />
  );
}
