import type { HighlighterCore, LanguageInput, ThemedToken } from "@shikijs/core";

export type HighlightedToken = Pick<ThemedToken, "content" | "htmlStyle">;
export type HighlightedLine = HighlightedToken[];

/**
 * Languages that load on first use. `ansi` (terminal output) is built into Shiki.
 * Anything else renders as plain text.
 */
const languages: Record<string, LanguageInput> = {
  bash: () => import("@shikijs/langs/bash"),
  css: () => import("@shikijs/langs/css"),
  diff: () => import("@shikijs/langs/diff"),
  html: () => import("@shikijs/langs/html"),
  javascript: () => import("@shikijs/langs/javascript"),
  json: () => import("@shikijs/langs/json"),
  jsx: () => import("@shikijs/langs/jsx"),
  markdown: () => import("@shikijs/langs/markdown"),
  python: () => import("@shikijs/langs/python"),
  sql: () => import("@shikijs/langs/sql"),
  tsx: () => import("@shikijs/langs/tsx"),
  typescript: () => import("@shikijs/langs/typescript"),
  yaml: () => import("@shikijs/langs/yaml"),
};

const aliases: Record<string, string> = {
  js: "javascript",
  ts: "typescript",
  sh: "bash",
  shell: "bash",
  yml: "yaml",
  md: "markdown",
};

export const highlightThemes = { light: "github-light", dark: "github-dark" } as const;

export function resolveLanguage(language: string): string | undefined {
  const name = language.toLowerCase();
  const resolved = aliases[name] ?? name;
  return resolved === "ansi" || resolved in languages ? resolved : undefined;
}

let highlighter: Promise<HighlighterCore> | undefined;
const loaded = new Map<string, Promise<void>>();

function getHighlighter() {
  highlighter ??= Promise.all([import("@shikijs/core"), import("@shikijs/engine-javascript")])
    .then(([{ createHighlighterCore }, { createJavaScriptRegexEngine }]) =>
      createHighlighterCore({
        themes: [import("@shikijs/themes/github-light"), import("@shikijs/themes/github-dark")],
        langs: [],
        engine: createJavaScriptRegexEngine(),
      }),
    )
    .catch((error: unknown) => {
      // Don't cache a failed load (e.g. a chunk that 404s after a deploy); retry next time.
      highlighter = undefined;
      throw error;
    });
  return highlighter;
}

/**
 * Tokenizes `code` into lines of colored tokens. Each token's `htmlStyle` carries the light
 * color as `color` and the dark one as `--shiki-dark`. Returns `undefined` for a language that
 * is not in the list, so callers can fall back to plain text.
 */
export async function highlightCode(
  code: string,
  language: string,
): Promise<HighlightedLine[] | undefined> {
  const lang = resolveLanguage(language);
  if (!lang) return undefined;
  const core = await getHighlighter();
  if (lang !== "ansi") {
    let ready = loaded.get(lang);
    if (!ready) {
      ready = core.loadLanguage(languages[lang]).catch((error: unknown) => {
        loaded.delete(lang);
        throw error;
      });
      loaded.set(lang, ready);
    }
    await ready;
  }
  const { tokens } = core.codeToTokens(code.replace(/\n$/, ""), {
    lang,
    themes: highlightThemes,
  });
  return tokens.map((line) =>
    line.map((token) => ({ content: token.content, htmlStyle: token.htmlStyle })),
  );
}
