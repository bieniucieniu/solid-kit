import { Search as SearchPrimitive } from "@kobalte/core/search";
import { type ComponentProps, type JSX, splitProps } from "solid-js";
import { cn } from "@/lib/utils";

type SearchProps = ComponentProps<typeof SearchPrimitive>;
type SearchLabelProps = ComponentProps<typeof SearchPrimitive.Label>;
type SearchControlProps = ComponentProps<typeof SearchPrimitive.Control>;
type SearchInputProps = ComponentProps<typeof SearchPrimitive.Input>;
type SearchIndicatorProps = ComponentProps<typeof SearchPrimitive.Indicator>;
type SearchContentProps = ComponentProps<typeof SearchPrimitive.Content>;
type SearchListboxProps = ComponentProps<typeof SearchPrimitive.Listbox>;
type SearchItemProps = ComponentProps<typeof SearchPrimitive.Item>;
type SearchItemLabelProps = ComponentProps<typeof SearchPrimitive.ItemLabel>;
type SearchItemDescriptionProps = ComponentProps<typeof SearchPrimitive.ItemDescription>;
type SearchSectionProps = ComponentProps<typeof SearchPrimitive.Section>;
type SearchNoResultProps = ComponentProps<typeof SearchPrimitive.NoResult>;
type SearchDescriptionProps = ComponentProps<typeof SearchPrimitive.Description>;

/**
 * Search bar with a docked results view (Kobalte search). Pass `options`, `onInputChange`, and an
 * `itemComponent` that renders SearchItem.
 */
export function Search(props: SearchProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SearchPrimitive
      ref={props.ref}
      data-slot="search"
      gutter={4}
      class={cn("group/search flex w-full flex-col gap-1 text-on-surface", props.class)}
      {...rest}
    />
  );
}

export function SearchLabel(props: SearchLabelProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SearchPrimitive.Label
      ref={props.ref}
      data-slot="search-label"
      class={cn("px-4 typescale-title-small text-on-surface", props.class)}
      {...rest}
    />
  );
}

/** The 56px pill. Holds SearchLeading, SearchInput, SearchIndicator, and SearchTrailing. */
export function SearchControl(props: SearchControlProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SearchPrimitive.Control
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
  const [, rest] = splitProps(props, ["class", "ref"]);
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
  const [, rest] = splitProps(props, ["class", "ref"]);
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
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SearchPrimitive.Input
      ref={props.ref}
      data-slot="search-input"
      class={cn(
        "h-full min-w-0 flex-1 bg-transparent px-3 typescale-body-large text-on-surface caret-primary outline-none placeholder:text-on-surface-variant [&::-webkit-search-cancel-button]:hidden",
        props.class,
      )}
      {...rest}
    />
  );
}

/** Shows `loadingComponent` while results are loading, otherwise its children. */
export function SearchIndicator(props: SearchIndicatorProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SearchPrimitive.Indicator
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
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SearchPrimitive.Content
      ref={props.ref}
      data-slot="search-content"
      class={cn(
        "relative z-50 max-h-(--kb-popper-content-available-height) min-w-(--kb-popper-anchor-width) origin-(--kb-combobox-content-transform-origin) overflow-hidden rounded-extra-large bg-surface-container-high py-2 text-on-surface shadow-level-3 outline-none data-expanded:animate-in data-expanded:fade-in-0 data-expanded:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        props.class,
      )}
      {...rest}
    />
  );
}

export function SearchListbox(props: SearchListboxProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SearchPrimitive.Listbox
      ref={props.ref}
      data-slot="search-listbox"
      class={cn("max-h-96 overflow-y-auto outline-none", props.class)}
      {...rest}
    />
  );
}

export function SearchItem(props: SearchItemProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SearchPrimitive.Item
      ref={props.ref}
      data-slot="search-item"
      class={cn(
        "relative flex min-h-14 cursor-pointer items-center gap-4 px-4 py-2 text-on-surface outline-none select-none state-layer data-disabled:pointer-events-none data-disabled:text-on-surface/38 [&_svg]:shrink-0 [&_svg]:text-on-surface-variant [&_svg:not([class*='size-'])]:size-6",
        props.class,
      )}
      {...rest}
    />
  );
}

export function SearchItemLabel(props: SearchItemLabelProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SearchPrimitive.ItemLabel
      ref={props.ref}
      data-slot="search-item-label"
      class={cn("block typescale-body-large", props.class)}
      {...rest}
    />
  );
}

export function SearchItemDescription(props: SearchItemDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SearchPrimitive.ItemDescription
      ref={props.ref}
      data-slot="search-item-description"
      class={cn("block typescale-body-medium text-on-surface-variant", props.class)}
      {...rest}
    />
  );
}

export function SearchSection(props: SearchSectionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SearchPrimitive.Section
      ref={props.ref}
      data-slot="search-section"
      class={cn("px-4 pt-3 pb-1 typescale-title-small text-on-surface-variant", props.class)}
      {...rest}
    />
  );
}

export function SearchNoResult(props: SearchNoResultProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SearchPrimitive.NoResult
      ref={props.ref}
      data-slot="search-no-result"
      class={cn("block px-4 py-3 typescale-body-medium text-on-surface-variant", props.class)}
      {...rest}
    />
  );
}

export function SearchDescription(props: SearchDescriptionProps) {
  const [, rest] = splitProps(props, ["class", "ref"]);
  return (
    <SearchPrimitive.Description
      ref={props.ref}
      data-slot="search-description"
      class={cn("px-4 typescale-body-small text-on-surface-variant", props.class)}
      {...rest}
    />
  );
}

export const SearchPortal = SearchPrimitive.Portal;
