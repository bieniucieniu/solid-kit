import type { HighlighterCore, LanguageInput, ThemedToken } from "shiki/core";

export type HighlightedToken = Pick<ThemedToken, "content" | "htmlStyle">;
export type HighlightedLine = HighlightedToken[];

/**
 * Languages that load on first use. `ansi` (terminal output) is built into Shiki.
 * Anything else renders as plain text.
 */
const languages: Record<string, LanguageInput> = {
  bash: () => import("shiki/langs/bash.mjs"),
  css: () => import("shiki/langs/css.mjs"),
  diff: () => import("shiki/langs/diff.mjs"),
  html: () => import("shiki/langs/html.mjs"),
  javascript: () => import("shiki/langs/javascript.mjs"),
  json: () => import("shiki/langs/json.mjs"),
  jsx: () => import("shiki/langs/jsx.mjs"),
  markdown: () => import("shiki/langs/markdown.mjs"),
  python: () => import("shiki/langs/python.mjs"),
  sql: () => import("shiki/langs/sql.mjs"),
  tsx: () => import("shiki/langs/tsx.mjs"),
  typescript: () => import("shiki/langs/typescript.mjs"),
  yaml: () => import("shiki/langs/yaml.mjs"),
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
  highlighter ??= Promise.all([import("shiki/core"), import("shiki/engine/javascript")])
    .then(([{ createHighlighterCore }, { createJavaScriptRegexEngine }]) =>
      createHighlighterCore({
        themes: [import("shiki/themes/github-light.mjs"), import("shiki/themes/github-dark.mjs")],
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
