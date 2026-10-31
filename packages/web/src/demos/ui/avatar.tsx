import { Avatar } from "@solid-kit/ui";

export function AvatarDemo() {
  return (
    <Avatar>
      <Avatar.Img alt="Ada Lovelace" />
      <Avatar.Fallback>AL</Avatar.Fallback>
    </Avatar>
  );
}
