# `@solid-kit/m3`

Material 3 Expressive components for Solid, delivered through the [shadcn CLI](https://ui.shadcn.com/docs/registry). Same API as [`@solid-kit/ui`](../ui/README.md): compound parts with flat names (`Dialog`, `DialogTrigger`, `DialogContent`), `variant` / `size` props, `xxxVariants()` class helpers, `data-slot` attributes, and Kobalte or corvu primitives. The look follows [m3.material.io](https://m3.material.io).

Install into an app. The CLI copies the source and rewrites `@/lib/utils`.

## Install

Set up `components.json` as in the [`ui` README](../ui/README.md#install) (Solid has no `shadcn init`). Then:

```bash
pnpm dlx shadcn@latest add bieniucieniu/solid-kit/m3-theme
pnpm dlx shadcn@latest add bieniucieniu/solid-kit/m3-button
pnpm dlx shadcn@latest add bieniucieniu/solid-kit/m3-dialog
```

Items are named `m3-<component>` and install into `components/m3/`, so they can sit next to `ui` components. Each one pulls in `utils` and `m3-theme`.

`m3-theme` copies `m3-tokens.css` next to your Tailwind CSS file (`src/index.css`), imports it, and points `--primary` / `--secondary` at the M3 scheme.

Inside this repo, import the package directly:

```css
@import "@solid-kit/m3/theme.css"; /* tailwindcss + tw-animate-css + tokens */
```

## Tokens

Raw values use the M3 names on `:root` (light) and `.dark` (dark): `--md-sys-color-*`, `--md-sys-typescale-*`, `--md-sys-shape-corner-*`, `--md-sys-elevation-*`, `--md-sys-motion-*`. Tailwind utilities use the bare role names:

| Group      | Utilities                                                                                                                                      |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Color      | `bg-primary`, `text-on-primary-container`, `bg-surface-container-high`, `border-outline-variant`, `bg-inverse-surface`, ...                    |
| Type       | `typescale-display-large` ... `typescale-label-small`, plus `typescale-emphasized-*`. One class sets font, size, line height, tracking, weight |
| Shape      | `rounded-extra-small` (4) ... `rounded-extra-extra-large` (48), `rounded-full`                                                                 |
| Elevation  | `shadow-level-0` ... `shadow-level-5`                                                                                                          |
| Motion     | `motion-fast`, `motion-default`, `motion-slow` (spring curves: spatial overshoots, effects don't); `ease-fast-spatial` and friends             |
| States     | `state-layer` (8% hover, 10% focus and press, on `currentColor`), `focus-ring` (3px secondary outline)                                         |
| Breakpoint | `medium:` (600), `expanded:` (840), `large:` (1200), `extra-large:` (1600)                                                                     |

Type styles are `typescale-*` rather than `text-*`: `tailwind-merge` reads an unknown `text-body-medium` as a color and drops it next to `text-on-surface`. With the `typescale-` prefix the shared `cn` needs no configuration. A `class` override of `typescale-*`, `rounded-<m3 name>`, or `shadow-level-*` is resolved by stylesheet order, not argument order.

## Next to a shadcn theme

`bg-primary` and `bg-secondary` read `--primary` / `--secondary`, the same variables shadcn uses. When an app also loads the `ui` theme (like this repo's web app and Storybook), import `@solid-kit/m3/tokens.css` instead of `theme.css` and put `data-m3` on the M3 part of the page. While an element with `data-m3` is mounted, `:root:has([data-m3])` points the two variables at M3, so portals (dialogs, menus, tooltips) follow too.

## Dynamic color

`m3-scheme` generates a scheme from a seed color with [material-color-utilities](https://github.com/material-foundation/material-color-utilities). The library loads on first use, so it stays out of the main bundle and out of SSR (0.4.0 has an import that Node's ESM loader rejects).

```ts
import { applyScheme, schemeCss } from "@/lib/m3-scheme";

const remove = await applyScheme(document.documentElement, { seed: "#006A6A", dark: false });
console.log(await schemeCss({ seed: "#006A6A", variant: "vibrant" })); // paste over the baseline
```

## Components

| Item                   | Parts                                                                                                                                                                                | Primitive                                           |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------- |
| `m3-button`            | `Button`, `ToggleButton`, `buttonVariants`                                                                                                                                           | `<button>`, `@kobalte/core/toggle-button`           |
| `m3-icon-button`       | `IconButton`, `ToggleIconButton`                                                                                                                                                     | `<button>`, `@kobalte/core/toggle-button`           |
| `m3-fab`               | `Fab`, `ExtendedFab`                                                                                                                                                                 | `<button>`                                          |
| `m3-fab-menu`          | `FabMenu`, `FabMenuTrigger`, `FabMenuContent`, `FabMenuItem`                                                                                                                         | `@kobalte/core/dropdown-menu`                       |
| `m3-button-group`      | `ButtonGroup` (standard, connected)                                                                                                                                                  | styled HTML                                         |
| `m3-segmented-button`  | `SegmentedButton`, `SegmentedButtonItem`, `SegmentedButtonIcon`                                                                                                                      | `@kobalte/core/toggle-group`                        |
| `m3-split-button`      | `SplitButton`, `SplitButtonAction`, `SplitButtonTrigger` (with `m3-menu`)                                                                                                            | `@kobalte/core/dropdown-menu`                       |
| `m3-checkbox`          | same parts as `ui` checkbox                                                                                                                                                          | `@kobalte/core/checkbox`                            |
| `m3-radio-group`       | same parts as `ui` radio group                                                                                                                                                       | `@kobalte/core/radio-group`                         |
| `m3-switch`            | same parts as `ui` switch; `SwitchThumb icons`                                                                                                                                       | `@kobalte/core/switch`                              |
| `m3-slider`            | same parts as `ui` slider                                                                                                                                                            | `@kobalte/core/slider`                              |
| `m3-chip`              | `AssistChip`, `FilterChip`, `InputChip`, `InputChipRemove`, `SuggestionChip`, `ChipSet`                                                                                              | `<button>`, `@kobalte/core/toggle-button`           |
| `m3-text-field`        | `TextField`, `TextFieldContainer`, `TextFieldLabel`, `TextFieldInput`, `TextFieldTextArea`, `TextFieldLeading`, `TextFieldTrailing`, `TextFieldDescription`, `TextFieldErrorMessage` | `@kobalte/core/text-field`                          |
| `m3-search`            | `Search`, `SearchControl`, `SearchInput`, `SearchContent`, `SearchItem`, ...                                                                                                         | `@kobalte/core/search`                              |
| `m3-card`              | `Card` (elevated, filled, outlined), `CardMedia`, `CardHeader`, ...                                                                                                                  | styled HTML                                         |
| `m3-list`              | `List`, `ListItem`, `ListItemLeading`, `ListItemContent`, `ListItemHeadline`, ...                                                                                                    | styled HTML                                         |
| `m3-divider`           | `Divider`                                                                                                                                                                            | `@kobalte/core/separator`                           |
| `m3-dialog`            | `Dialog`, `DialogContent` (`fullScreen`), `DialogIcon`, `DialogHeadline`, `DialogActions`, `DialogClose`, ...                                                                        | `@corvu/dialog`                                     |
| `m3-bottom-sheet`      | `BottomSheet`, `BottomSheetContent`, `BottomSheetDragHandle`, ...                                                                                                                    | `@corvu/drawer`                                     |
| `m3-side-sheet`        | `SideSheet`, `SideSheetContent`, `SideSheetHeader`, `SideSheetActions`, ...                                                                                                          | `@corvu/dialog`                                     |
| `m3-menu`              | `Menu`, `MenuContent`, `MenuItem`, `MenuCheckboxItem`, `MenuRadioItem`, `MenuSub`, ...                                                                                               | `@kobalte/core/dropdown-menu`                       |
| `m3-tooltip`           | `Tooltip*`, `RichTooltip*`                                                                                                                                                           | `@corvu/tooltip`, `@kobalte/core/hover-card`        |
| `m3-snackbar`          | `Snackbar`, `SnackbarRegion`, `SnackbarMessage`, `SnackbarAction`, `snackbar.show()`                                                                                                 | `@kobalte/core/toast` (own region)                  |
| `m3-badge`             | `Badge`, `BadgeAnchor`                                                                                                                                                               | styled HTML                                         |
| `m3-progress`          | `Progress` parts (`ProgressFill wavy`), `CircularProgress`                                                                                                                           | `@kobalte/core/progress`                            |
| `m3-loading-indicator` | `LoadingIndicator`                                                                                                                                                                   | styled HTML                                         |
| `m3-app-bar`           | `AppBar` (small, medium, large), `AppBarLeading`, `AppBarHeadline`, `AppBarTitle`, ...                                                                                               | styled HTML                                         |
| `m3-toolbar`           | `Toolbar` (docked, floating; standard, vibrant)                                                                                                                                      | styled HTML                                         |
| `m3-tabs`              | `Tabs` (primary, secondary), `TabsList`, `TabsTrigger`, `TabsIndicator`, `TabsContent`                                                                                               | `@kobalte/core/tabs`                                |
| `m3-navigation-bar`    | `NavigationBar`, `NavigationBarItem`, `NavigationBarIcon`, `NavigationBarLabel`                                                                                                      | styled HTML                                         |
| `m3-navigation-rail`   | `NavigationRail` (`expanded`), `NavigationRailHeader`, `NavigationRailItem`, ...                                                                                                     | styled HTML                                         |
| `m3-navigation-drawer` | `NavigationDrawer`, `NavigationDrawerItem`, `ModalNavigationDrawer*`                                                                                                                 | styled HTML, `@corvu/drawer`                        |

Not built yet: date and time pickers (Kobalte has no calendar) and carousel.

```tsx
import { Button } from "@/components/m3/button";
import {
  Dialog,
  DialogActions,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeadline,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "@/components/m3/dialog";

<Dialog>
  <DialogTrigger as={Button} variant="tonal">
    Delete
  </DialogTrigger>
  <DialogPortal>
    <DialogOverlay />
    <DialogContent>
      <DialogHeadline>Permanently delete?</DialogHeadline>
      <DialogDescription>This can't be undone.</DialogDescription>
      <DialogActions>
        <DialogClose>Cancel</DialogClose>
        <DialogClose>Delete</DialogClose>
      </DialogActions>
    </DialogContent>
  </DialogPortal>
</Dialog>;
```

`tokens.css` is generated. Edit values in place; keep the names.
