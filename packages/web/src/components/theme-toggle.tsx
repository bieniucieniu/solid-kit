import { Button, DropdownMenu } from "@solid-kit/ui";
import { createSignal, For } from "solid-js";

type Theme = "light" | "dark";
type ThemePreference = Theme | "system";

export const THEME_STORAGE_KEY = "solid-kit-theme";

// Runs in <head> before paint, so the first frame already has the right theme.
// Anything other than "light" / "dark" (missing, "system") follows the OS setting.
export const themeInitScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)});if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.classList.toggle("dark",t==="dark")}catch(e){}})()`;

const options: { value: ThemePreference; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
];

function parsePreference(value: unknown): ThemePreference {
  return value === "light" || value === "dark" ? value : "system";
}

const [preference, setPreference] = createSignal<ThemePreference>("system");
const [systemTheme, setSystemTheme] = createSignal<Theme>("light");
const theme = (): Theme => {
  const current = preference();
  return current === "system" ? systemTheme() : current;
};

function applyTheme() {
  document.documentElement.classList.toggle("dark", theme() === "dark");
}

function setThemePreference(next: ThemePreference) {
  setPreference(next);
  applyTheme();
  try {
    if (next === "system") localStorage.removeItem(THEME_STORAGE_KEY);
    else localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    // Storage can be unavailable (private mode, blocked site data).
  }
}

if (typeof document != "undefined") {
  try {
    setPreference(parsePreference(localStorage.getItem(THEME_STORAGE_KEY)));
  } catch {
    // Storage blocked: keep following the OS.
  }

  // In "system" mode, follow the OS theme live, not only on load.
  const media = matchMedia("(prefers-color-scheme: dark)");
  setSystemTheme(media.matches ? "dark" : "light");
  media.addEventListener("change", (event) => {
    setSystemTheme(event.matches ? "dark" : "light");
    applyTheme();
  });

  // Keep other open tabs in step when the choice changes in one of them.
  window.addEventListener("storage", (event) => {
    if (event.key !== THEME_STORAGE_KEY && event.key !== null) return;
    setPreference(parsePreference(event.newValue));
    applyTheme();
  });
}

export function ThemeToggle() {
  // The server can't know the theme, so the markup must not depend on it (hydration would
  // fail). Both icons render and the `.dark` class on <html> picks one, from the first paint.
  return (
    <DropdownMenu placement="bottom-end">
      <DropdownMenu.Trigger
        as={Button}
        type="button"
        variant="ghost"
        size="icon"
        aria-label="Change theme"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <g class="dark:hidden">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2m-7.07-17.07 1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </g>
          <path class="hidden dark:inline" d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content class="min-w-28">
          <DropdownMenu.RadioGroup
            value={preference()}
            onChange={(value) => setThemePreference(parsePreference(value))}
          >
            <For each={options}>
              {(option) => (
                <DropdownMenu.RadioItem value={option.value}>
                  {option.label}
                  <DropdownMenu.ItemIndicator />
                </DropdownMenu.RadioItem>
              )}
            </For>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu>
  );
}
