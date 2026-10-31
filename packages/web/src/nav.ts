export type PackageId = "ui" | "motion" | "xyflow" | "tiptap";

export type NavItem = {
  title: string;
  href: string;
};

export type PackageNav = {
  id: PackageId;
  title: string;
  href: string;
  description: string;
};

export const packages: PackageNav[] = [
  {
    id: "ui",
    title: "UI",
    href: "/ui",
    description: "Button, checkbox, dialog, and tooltip.",
  },
  {
    id: "motion",
    title: "Motion",
    href: "/motion",
    description: "Animate, hover, drag, spring, presence, and lists.",
  },
  {
    id: "xyflow",
    title: "XYFlow",
    href: "/xyflow",
    description: "A canvas for nodes and edges.",
  },
  {
    id: "tiptap",
    title: "Tiptap",
    href: "/tiptap",
    description: "Basic, markdown, and menu editors.",
  },
];

export const sidebars: Record<PackageId, NavItem[]> = {
  ui: [
    { title: "Overview", href: "/ui" },
    { title: "Button", href: "/ui/button" },
    { title: "Checkbox", href: "/ui/checkbox" },
    { title: "Dialog", href: "/ui/dialog" },
    { title: "Tooltip", href: "/ui/tooltip" },
  ],
  motion: [
    { title: "Overview", href: "/motion" },
    { title: "Animate", href: "/motion/animate" },
    { title: "Hover", href: "/motion/hover" },
    { title: "Drag", href: "/motion/drag" },
    { title: "Spring", href: "/motion/spring" },
    { title: "Presence", href: "/motion/presence" },
    { title: "List", href: "/motion/list" },
  ],
  xyflow: [{ title: "Canvas", href: "/xyflow" }],
  tiptap: [
    { title: "Overview", href: "/tiptap" },
    { title: "Basic", href: "/tiptap/basic" },
    { title: "Markdown", href: "/tiptap/markdown" },
    { title: "Menus", href: "/tiptap/menus" },
  ],
};
