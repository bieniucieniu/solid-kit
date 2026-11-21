import { createRouter, intentPreload } from "@solidjs/router";
import { fileRoutes } from "@solidjs/router/fs";
import { pageRoutes } from "virtual:file-routes";

// One router instance, shared by App.tsx. Link preloading warms a page's code on hover or focus.
export const Router = createRouter({
  routes: fileRoutes(pageRoutes),
  preloadLinks: intentPreload(),
});
