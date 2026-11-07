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
    description: "Buttons, form controls, overlays, and layout.",
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
    { title: "Accordion", href: "/ui/accordion" },
    { title: "Alert", href: "/ui/alert" },
    { title: "Alert dialog", href: "/ui/alert-dialog" },
    { title: "Aspect ratio", href: "/ui/aspect-ratio" },
    { title: "Avatar", href: "/ui/avatar" },
    { title: "Badge", href: "/ui/badge" },
    { title: "Breadcrumb", href: "/ui/breadcrumb" },
    { title: "Button", href: "/ui/button" },
    { title: "Button group", href: "/ui/button-group" },
    { title: "Card", href: "/ui/card" },
    { title: "Checkbox", href: "/ui/checkbox" },
    { title: "Code block", href: "/ui/code-block" },
    { title: "Collapsible", href: "/ui/collapsible" },
    { title: "Combobox", href: "/ui/combobox" },
    { title: "Context menu", href: "/ui/context-menu" },
    { title: "Dialog", href: "/ui/dialog" },
    { title: "Drawer", href: "/ui/drawer" },
    { title: "Dropdown menu", href: "/ui/dropdown-menu" },
    { title: "Empty", href: "/ui/empty" },
    { title: "Field", href: "/ui/field" },
    { title: "Hover card", href: "/ui/hover-card" },
    { title: "Input", href: "/ui/input" },
    { title: "Input group", href: "/ui/input-group" },
    { title: "Item", href: "/ui/item" },
    { title: "Kbd", href: "/ui/kbd" },
    { title: "Label", href: "/ui/label" },
    { title: "Menubar", href: "/ui/menubar" },
    { title: "Native select", href: "/ui/native-select" },
    { title: "Navigation menu", href: "/ui/navigation-menu" },
    { title: "Pagination", href: "/ui/pagination" },
    { title: "Popover", href: "/ui/popover" },
    { title: "Progress", href: "/ui/progress" },
    { title: "Radio group", href: "/ui/radio-group" },
    { title: "Scroll area", href: "/ui/scroll-area" },
    { title: "Select", href: "/ui/select" },
    { title: "Separator", href: "/ui/separator" },
    { title: "Sheet", href: "/ui/sheet" },
    { title: "Skeleton", href: "/ui/skeleton" },
    { title: "Slider", href: "/ui/slider" },
    { title: "Spinner", href: "/ui/spinner" },
    { title: "Switch", href: "/ui/switch" },
    { title: "Table", href: "/ui/table" },
    { title: "Tabs", href: "/ui/tabs" },
    { title: "Textarea", href: "/ui/textarea" },
    { title: "Toast", href: "/ui/toast" },
    { title: "Toggle", href: "/ui/toggle" },
    { title: "Toggle group", href: "/ui/toggle-group" },
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
