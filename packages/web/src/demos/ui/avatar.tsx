import { Avatar } from "@solid-kit/ui";
import { For } from "solid-js";
import { VariantRow, VariantStack } from "~/components/preview";

const sizes = ["sm", "default", "lg"] as const;

export function AvatarDemo() {
  return (
    <VariantStack>
      <VariantRow label="Sizes">
        <For each={sizes}>
          {(size) => (
            <Avatar size={size}>
              <Avatar.Img src="https://github.com/solidjs.png" alt="Solid" />
              <Avatar.Fallback>SJ</Avatar.Fallback>
            </Avatar>
          )}
        </For>
      </VariantRow>
      <VariantRow label="Fallback">
        <For each={sizes}>
          {(size) => (
            <Avatar size={size}>
              <Avatar.Fallback>AL</Avatar.Fallback>
            </Avatar>
          )}
        </For>
      </VariantRow>
      <VariantRow label="Badge">
        <Avatar>
          <Avatar.Fallback>AL</Avatar.Fallback>
          <Avatar.Badge />
        </Avatar>
      </VariantRow>
      <VariantRow label="Group">
        <Avatar.Group>
          <Avatar>
            <Avatar.Fallback>AL</Avatar.Fallback>
          </Avatar>
          <Avatar>
            <Avatar.Fallback>GH</Avatar.Fallback>
          </Avatar>
          <Avatar>
            <Avatar.Fallback>KJ</Avatar.Fallback>
          </Avatar>
          <Avatar.GroupCount>+3</Avatar.GroupCount>
        </Avatar.Group>
      </VariantRow>
    </VariantStack>
  );
}
