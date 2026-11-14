import { DocsPage } from "~/components/preview";
import { SnackbarDemo } from "~/demos/m3/snackbar";
import source from "~/demos/m3/snackbar.tsx?raw";

const snippet = `import { Snackbar, SnackbarAction, SnackbarList, SnackbarMessage, SnackbarRegion, snackbar } from "@solid-kit/m3";

// Mount once
<SnackbarRegion><SnackbarList /></SnackbarRegion>

snackbar.show((props) => (
  <Snackbar toastId={props.toastId}>
    <SnackbarMessage>Message archived</SnackbarMessage>
    <SnackbarAction onClick={() => snackbar.dismiss(props.toastId)}>Undo</SnackbarAction>
  </Snackbar>
));`;

export default function SnackbarPage() {
  return (
    <DocsPage
      title="Snackbar"
      description="Short updates at the bottom of the screen, in their own toast region."
      snippet={snippet}
      source={source}
      sourceTitle="demos/m3/snackbar.tsx"
      previewClass="bg-surface text-on-surface"
    >
      <SnackbarDemo />
    </DocsPage>
  );
}
