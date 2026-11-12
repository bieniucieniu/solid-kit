import { List, ListItem, ListItemContent, ListItemHeadline, ScrollArea } from "@solid-kit/m3";
import { Index } from "solid-js";

const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

export function ScrollAreaDemo() {
  return (
    <ScrollArea class="h-72 w-full max-w-xs rounded-medium bg-surface-container-low">
      <List>
        <Index each={items}>
          {(item) => (
            <ListItem>
              <ListItemContent>
                <ListItemHeadline>{item()}</ListItemHeadline>
              </ListItemContent>
            </ListItem>
          )}
        </Index>
      </List>
    </ScrollArea>
  );
}
