import type { JSX } from "@solidjs/web";

import { cn } from "#kit/lib/utils";

export function Table(props: JSX.HTMLAttributes<HTMLTableElement>) {
  return (
    <div data-slot="table-container" class="relative w-full overflow-x-auto">
      <table
        data-slot="table"
        {...props}
        class={cn("w-full caption-bottom text-xs", props.class)}
      />
    </div>
  );
}

export function TableHeader(props: JSX.HTMLAttributes<HTMLTableSectionElement>) {
  return <thead data-slot="table-header" {...props} class={cn("[&_tr]:border-b", props.class)} />;
}

export function TableBody(props: JSX.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tbody
      data-slot="table-body"
      {...props}
      class={cn("[&_tr:last-child]:border-0", props.class)}
    />
  );
}

export function TableFooter(props: JSX.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tfoot
      data-slot="table-footer"
      {...props}
      class={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", props.class)}
    />
  );
}

export function TableRow(props: JSX.HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      data-slot="table-row"
      {...props}
      class={cn(
        "border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted",
        props.class,
      )}
    />
  );
}

export function TableHead(props: JSX.ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      data-slot="table-head"
      {...props}
      class={cn(
        "h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0",
        props.class,
      )}
    />
  );
}

export function TableCell(props: JSX.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      data-slot="table-cell"
      {...props}
      class={cn("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0", props.class)}
    />
  );
}

export function TableCaption(props: JSX.HTMLAttributes<HTMLTableCaptionElement>) {
  return (
    <caption
      data-slot="table-caption"
      {...props}
      class={cn("mt-4 text-xs text-muted-foreground", props.class)}
    />
  );
}
