import { DocsPage } from "~/components/preview";
import { AvatarDemo } from "~/demos/ui/avatar";

const snippet = `import { Avatar } from "@solid-kit/ui";

// size: "sm" | "default" | "lg"
<Avatar size="lg">
  <Avatar.Img src="https://github.com/solidjs.png" alt="Solid" />
  <Avatar.Fallback>SJ</Avatar.Fallback>
  <Avatar.Badge />
</Avatar>

<Avatar.Group>
  <Avatar><Avatar.Fallback>AL</Avatar.Fallback></Avatar>
  <Avatar><Avatar.Fallback>GH</Avatar.Fallback></Avatar>
  <Avatar.GroupCount>+3</Avatar.GroupCount>
</Avatar.Group>`;

export default function AvatarPage() {
  return (
    <DocsPage title="Avatar" description="An image with a fallback." snippet={snippet}>
      <AvatarDemo />
    </DocsPage>
  );
}
