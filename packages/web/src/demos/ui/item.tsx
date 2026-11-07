import { Button, Item } from "@solid-kit/ui";
import { For } from "solid-js";
import { VariantRow, VariantStack } from "~/components/preview";

const variants = ["default", "outline", "muted"] as const;
const sizes = ["default", "sm", "xs"] as const;

export function ItemDemo() {
  return (
    <VariantStack class="max-w-md">
      <For each={variants}>
        {(variant) => (
          <VariantRow label={`Variant: ${variant}`}>
            <Item variant={variant} class="w-full">
              <Item.Media>AL</Item.Media>
              <Item.Content>
                <Item.Title>Ada Lovelace</Item.Title>
                <Item.Description>Editor</Item.Description>
              </Item.Content>
              <Item.Actions>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </Item.Actions>
            </Item>
          </VariantRow>
        )}
      </For>
      <For each={sizes}>
        {(size) => (
          <VariantRow label={`Size: ${size}`}>
            <Item variant="outline" size={size} class="w-full">
              <Item.Media variant="image">
                <img src="https://github.com/solidjs.png" alt="Solid" />
              </Item.Media>
              <Item.Content>
                <Item.Title>solid-kit</Item.Title>
              </Item.Content>
            </Item>
          </VariantRow>
        )}
      </For>
      <VariantRow label="Media: icon">
        <Item variant="muted" class="w-full">
          <Item.Media variant="icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </Item.Media>
          <Item.Content>
            <Item.Title>Security alert</Item.Title>
            <Item.Description>New sign-in from an unknown device.</Item.Description>
          </Item.Content>
        </Item>
      </VariantRow>
    </VariantStack>
  );
}
