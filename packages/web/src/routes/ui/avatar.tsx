import { DocsPage } from "~/components/preview";
import { AvatarDemo } from "~/demos/ui/avatar";

const snippet = `import { Avatar } from "@solid-kit/ui";

<Avatar>
  <Avatar.Img alt="Ada Lovelace" />
  <Avatar.Fallback>AL</Avatar.Fallback>
</Avatar>`;

export default function AvatarPage() {
  return (
    <DocsPage title="Avatar" description="An image with a fallback." snippet={snippet}>
      <AvatarDemo />
    </DocsPage>
  );
}
