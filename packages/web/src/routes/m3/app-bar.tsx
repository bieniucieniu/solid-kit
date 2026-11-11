import { DocsPage } from "~/components/preview";
import { AppBarDemo } from "~/demos/m3/app-bar";

const snippet = `import { AppBar, AppBarHeadline, AppBarLeading, AppBarSubtitle, AppBarTitle, AppBarTrailing } from "@solid-kit/m3";

// variant: "small" | "medium" | "large"
<AppBar variant="medium" scrolled={scrolled()}>
  <AppBarLeading><IconButton aria-label="Back"><ArrowBackIcon /></IconButton></AppBarLeading>
  <AppBarHeadline>
    <AppBarTitle>Title</AppBarTitle>
    <AppBarSubtitle>Subtitle</AppBarSubtitle>
  </AppBarHeadline>
  <AppBarTrailing><IconButton aria-label="More"><MoreVertIcon /></IconButton></AppBarTrailing>
</AppBar>`;

export default function AppBarPage() {
  return (
    <DocsPage
      title="App bar"
      description="Small, medium, and large top app bars."
      snippet={snippet}
      previewClass="bg-surface text-on-surface"
    >
      <AppBarDemo />
    </DocsPage>
  );
}
