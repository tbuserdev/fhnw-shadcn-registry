import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import { Home } from "./pages/Home";
import { Docs } from "./pages/Docs";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const docsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/docs",
  component: Docs,
});

export const routeTree = rootRoute.addChildren([indexRoute, docsRoute]);
