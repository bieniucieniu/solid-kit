import {
  BottomSheet,
  BottomSheetContent,
  BottomSheetDescription,
  BottomSheetDragHandle,
  BottomSheetOverlay,
  BottomSheetPortal,
  BottomSheetTitle,
  BottomSheetTrigger,
  Button,
  List,
  ListItem,
  ListItemContent,
  ListItemHeadline,
  ListItemLeading,
} from "@solid-kit/m3";
import { MailIcon, PersonIcon, ShareIcon } from "./shared";

export function BottomSheetDemo() {
  return (
    <BottomSheet>
      <BottomSheetTrigger as={Button} variant="tonal">
        Open bottom sheet
      </BottomSheetTrigger>
      <BottomSheetPortal>
        <BottomSheetOverlay />
        <BottomSheetContent>
          <BottomSheetDragHandle />
          <BottomSheetTitle>Share</BottomSheetTitle>
          <BottomSheetDescription>Send this page to someone.</BottomSheetDescription>
          <List>
            <ListItem as="button">
              <ListItemLeading>
                <MailIcon />
              </ListItemLeading>
              <ListItemContent>
                <ListItemHeadline>Email</ListItemHeadline>
              </ListItemContent>
            </ListItem>
            <ListItem as="button">
              <ListItemLeading>
                <PersonIcon />
              </ListItemLeading>
              <ListItemContent>
                <ListItemHeadline>Contacts</ListItemHeadline>
              </ListItemContent>
            </ListItem>
            <ListItem as="button">
              <ListItemLeading>
                <ShareIcon />
              </ListItemLeading>
              <ListItemContent>
                <ListItemHeadline>More options</ListItemHeadline>
              </ListItemContent>
            </ListItem>
          </List>
        </BottomSheetContent>
      </BottomSheetPortal>
    </BottomSheet>
  );
}
