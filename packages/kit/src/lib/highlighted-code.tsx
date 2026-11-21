import type { JSX } from "@solidjs/web";
import {
  type Accessor,
  createEffect,
  createMemo,
  createSignal,
  For,
  getOwner,
  mapArray,
  runWithOwner,
} from "solid-js";
import { type HighlightedLine, highlightCode } from "#kit/lib/highlighter";

function HighlightedTokens(props: { line: HighlightedLine }) {
  return (
    <For each={props.line} keyed={false}>
      {(token) => (
        <span data-slot="code-block-token" style={token().htmlStyle}>
          {token().content}
        </span>
      )}
    </For>
  );
}

const lineText = (line: HighlightedLine) => line.map((token) => token.content).join("");

/**
 * Syntax-highlights `code` with Shiki and returns one element per line, ready for
 * `CodeBlockLine`. Until highlighting finishes (and for unknown languages) the lines are
 * plain text. Highlighting runs in the browser only, so server and client render the same
 * plain lines first.
 */
export function createHighlightedCode(
  code: Accessor<string>,
  language: Accessor<string>,
): Accessor<JSX.Element[]> {
  const [highlighted, setHighlighted] = createSignal<{
    source: string;
    language: string;
    lines: HighlightedLine[];
  }>();
  let request = 0;

  createEffect(
    () => ({ source: code(), lang: language() }),
    ({ source, lang }) => {
      const id = ++request;
      void highlightCode(source, lang).then(
        (lines) => {
          if (id === request) setHighlighted(lines ? { source, language: lang, lines } : undefined);
        },
        () => {
          if (id === request) setHighlighted(undefined);
        },
      );
    },
  );

  const lines = createMemo<HighlightedLine[]>(() => {
    const text = code().replace(/\n$/, "").split("\n");
    const result = highlighted();
    if (!result || result.language !== language()) return text.map((content) => [{ content }]);
    if (result.source === code()) return result.lines;
    // A newer highlight is on its way. Keep the colors of lines whose text didn't change, so
    // editing doesn't flash the whole block back to plain text.
    const previous = new Map<string, HighlightedLine>();
    for (const line of result.lines) {
      const key = lineText(line);
      if (!previous.has(key)) previous.set(key, line);
    }
    return text.map((content) => previous.get(content) ?? [{ content }]);
  });

  // One element per line index, updated in place, so unchanged lines keep their DOM nodes.
  // Built on first read, not here: the server maps arrays as soon as `mapArray` is called,
  // which would render the tokens before the surrounding markup and shift every hydration
  // key after them. The owner is captured now so the lines are disposed with the caller.
  const owner = getOwner();
  let mapped: Accessor<JSX.Element[]> | undefined;
  return () => {
    mapped ??= runWithOwner(owner, () =>
      mapArray(lines, (line) => <HighlightedTokens line={line()} />, { keyed: false }),
    );
    return mapped?.() ?? [];
  };
}
