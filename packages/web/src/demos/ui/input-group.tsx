import { InputGroup, Kbd } from "@solid-kit/ui";
import { createSignal } from "solid-js";

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function InputGroupDemo() {
  const [url, setUrl] = createSignal("");
  const [message, setMessage] = createSignal("");

  return (
    <div class="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroup.Addon>
          <SearchIcon />
        </InputGroup.Addon>
        <InputGroup.Input placeholder="Search..." />
        <InputGroup.Addon align="inline-end">
          <Kbd>⌘K</Kbd>
        </InputGroup.Addon>
      </InputGroup>

      <InputGroup>
        <InputGroup.Addon>
          <InputGroup.Text>https://</InputGroup.Text>
        </InputGroup.Addon>
        <InputGroup.Input
          placeholder="example.com"
          value={url()}
          onInput={(event) => setUrl(event.currentTarget.value)}
        />
        <InputGroup.Addon align="inline-end">
          <InputGroup.Text>.com</InputGroup.Text>
        </InputGroup.Addon>
      </InputGroup>

      <InputGroup>
        <InputGroup.Input placeholder="Invite by email" />
        <InputGroup.Addon align="inline-end">
          <InputGroup.Button size="icon-xs" aria-label="Search">
            <SearchIcon />
          </InputGroup.Button>
          <InputGroup.Button variant="secondary" size="sm">
            Invite
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>

      <InputGroup>
        <InputGroup.Addon align="block-start" class="border-b">
          <InputGroup.Text class="font-medium text-foreground">script.ts</InputGroup.Text>
        </InputGroup.Addon>
        <InputGroup.Input placeholder="console.log('hi')" />
      </InputGroup>

      <InputGroup>
        <InputGroup.Textarea
          placeholder="Ask, search or chat..."
          value={message()}
          onInput={(event) => setMessage(event.currentTarget.value)}
        />
        <InputGroup.Addon align="block-end" class="border-t">
          <InputGroup.Text>{message().length} / 280</InputGroup.Text>
          <InputGroup.Button variant="default" size="xs" class="ml-auto">
            Send
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
    </div>
  );
}
