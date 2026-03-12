import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";

import "./index.css";
import { routeTree } from "./App";

function normalizeRouterBasepath(baseUrl: string) {
  if (baseUrl === "/") {
    return "/";
  }

  return baseUrl.replace(/\/+$/, "");
}

const router = createRouter({
  routeTree,
  basepath: normalizeRouterBasepath(import.meta.env.BASE_URL),
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
